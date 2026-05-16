from __future__ import annotations

import argparse
import json
import os
import random
import re
import urllib.error
import urllib.request
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent
STATIC_DIR = ROOT / "static"

SCENE_BANK = {
    "宿舍矛盾": [
        {
            "tag": "边界练习",
            "title": "室友作息冲突",
            "prompt": "室友晚上12点还在打游戏开语音，你明天有早课想早点睡。",
            "description": "请写一句既表达需求，又不指责对方的话。",
            "skill": "把感受说清楚，不是攻击人",
            "category": "宿舍矛盾",
        },
        {
            "tag": "边界练习",
            "title": "借用物品不打招呼",
            "prompt": "室友又没打招呼就用了你的洗发水，这已经是第三次了。",
            "description": "请写一句提醒对方尊重边界的话。",
            "skill": "温和设立边界",
            "category": "宿舍矛盾",
        },
    ],
    "被借钱": [
        {
            "tag": "边界练习",
            "title": "同学借钱不还再借",
            "prompt": "同学上次借的钱还没还，今天又来找你借200块。",
            "description": "请写一句既不伤害关系，又能明确表达立场的话。",
            "skill": "不尴尬地拒绝借钱",
            "category": "被借钱",
        },
        {
            "tag": "边界练习",
            "title": "不想借钱给不熟的人",
            "prompt": "不太熟的同学突然找你借500块应急。",
            "description": "请写一句礼貌但明确的拒绝。",
            "skill": "不熟也能礼貌拒绝",
            "category": "被借钱",
        },
    ],
    "被催恋爱": [
        {
            "tag": "沟通练习",
            "title": "亲戚催谈恋爱",
            "prompt": "过年回家，亲戚又开始催：\"都这么大了怎么还不谈恋爱？\"",
            "description": "请写一句既能回应关心，又不让话题继续的话。",
            "skill": "温柔化解催婚",
            "category": "被催恋爱",
        },
        {
            "tag": "沟通练习",
            "title": "父母催相亲",
            "prompt": "爸妈说：\"隔壁阿姨给你介绍了个对象，周末去见见吧。\"",
            "description": "请写一句表达自己想法，又不惹父母生气的话。",
            "skill": "表达自己的节奏",
            "category": "被催恋爱",
        },
    ],
    "小组作业冲突": [
        {
            "tag": "观点练习",
            "title": "小组分工不均",
            "prompt": "小组作业中，有同学几乎不干活，你承担了大部分工作。",
            "description": "请写一句在群里温和提醒的话。",
            "skill": "不指责地提出问题",
            "category": "小组作业冲突",
        },
        {
            "tag": "观点练习",
            "title": "方案意见不合",
            "prompt": "小组讨论方案时，你和另一位同学意见完全相反。",
            "description": "请写一句先肯定对方，再表达自己观点的话。",
            "skill": "不同意也能友好讨论",
            "category": "小组作业冲突",
        },
    ],
    "面试紧张": [
        {
            "tag": "表达练习",
            "title": "面试官问缺点",
            "prompt": "面试官问：\"请说说你的缺点是什么？\"",
            "description": "请写一句既诚实又不会减分的回答。",
            "skill": "巧妙回答缺点",
            "category": "面试紧张",
        },
        {
            "tag": "表达练习",
            "title": "被问到不会的问题",
            "prompt": "面试官问了一个你不太了解的技术问题。",
            "description": "请写一句诚实但不显得无能的回答。",
            "skill": "诚实应对不会的问题",
            "category": "面试紧张",
        },
    ],
    "初次见面": [
        {
            "tag": "开场练习",
            "title": "社团招新初次见面",
            "prompt": "社团招新会上，你和一位看起来很投缘的同学初次见面。",
            "description": "请写一句自然开启对话的开场白。",
            "skill": "轻松开启对话",
            "category": "初次见面",
        },
        {
            "tag": "开场练习",
            "title": "朋友介绍新朋友",
            "prompt": "朋友带你认识一位新朋友，三个人站在一起有点尴尬。",
            "description": "请写一句自我介绍并拉近距离的话。",
            "skill": "轻松自我介绍",
            "category": "初次见面",
        },
    ],
    "社团破冰": [
        {
            "tag": "破冰练习",
            "title": "社团第一次见面会",
            "prompt": "社团第一次见面会，大家轮流自我介绍，轮到你了。",
            "description": "请写一句有趣又不尴尬的自我介绍。",
            "skill": "让别人记住你",
            "category": "社团破冰",
        },
        {
            "tag": "破冰练习",
            "title": "主动搭话陌生人",
            "prompt": "社团活动中，你注意到一位独自坐着的同学。",
            "description": "请写一句主动搭话的开场白。",
            "skill": "主动不尴尬",
            "category": "社团破冰",
        },
    ],
    "被阴阳怪气": [
        {
            "tag": "应对练习",
            "title": "同学酸你成绩好",
            "prompt": "你考了高分，同学说：\"哎呀，学霸就是不一样，我们这种学渣比不了。\"",
            "description": "请写一句既不激化矛盾，又能表达态度的回应。",
            "skill": "优雅应对酸言酸语",
            "category": "被阴阳怪气",
        },
        {
            "tag": "应对练习",
            "title": "同事暗示你偷懒",
            "prompt": "同事当着大家的面说：\"有些人就是运气好，活儿少还轻松。\"",
            "description": "请写一句既澄清事实，又不失风度的回应。",
            "skill": "澄清不争吵",
            "category": "被阴阳怪气",
        },
    ],
    "不会拒绝别人": [
        {
            "tag": "边界练习",
            "title": "同事推活给你",
            "prompt": "同事说：\"你反正没事，帮我把这份报表做了吧。\"",
            "description": "请写一句礼貌但坚定的拒绝。",
            "skill": "温柔而坚定地拒绝",
            "category": "不会拒绝别人",
        },
        {
            "tag": "边界练习",
            "title": "朋友借你作业抄",
            "prompt": "朋友说：\"把你作业借我抄一下，就这一次。\"",
            "description": "请写一句既坚持原则，又不伤害友情的话。",
            "skill": "坚持原则不伤害关系",
            "category": "不会拒绝别人",
        },
    ],
    "聚餐冷场": [
        {
            "tag": "暖场练习",
            "title": "聚餐突然冷场",
            "prompt": "部门聚餐时，大家都低头玩手机，场面有点尴尬。",
            "description": "请写一句能活跃气氛的话。",
            "skill": "化解冷场",
            "category": "聚餐冷场",
        },
        {
            "tag": "暖场练习",
            "title": "和不熟的人吃饭",
            "prompt": "你和不太熟的同事一起吃饭，不知道聊什么。",
            "description": "请写一句开启话题的话。",
            "skill": "开启轻松话题",
            "category": "聚餐冷场",
        },
    ],
    "喜欢的人聊天": [
        {
            "tag": "表达练习",
            "title": "约喜欢的人出来",
            "prompt": "你想约喜欢的人周末一起看电影。",
            "description": "请写一句自然不尴尬的邀约。",
            "skill": "自然表达好感",
            "category": "喜欢的人聊天",
        },
        {
            "tag": "表达练习",
            "title": "收到喜欢的人消息",
            "prompt": "喜欢的人发来消息：\"周末有空吗？\"",
            "description": "请写一句既表达开心，又不显得太激动的回复。",
            "skill": "保持平常心",
            "category": "喜欢的人聊天",
        },
    ],
    "老师提问": [
        {
            "tag": "提问练习",
            "title": "课上被老师点名",
            "prompt": "老师突然点名让你回答问题，你还没理清思路。",
            "description": "请写一句既诚实，又能争取时间的回答。",
            "skill": "优雅应对突发提问",
            "category": "老师提问",
        },
        {
            "tag": "提问练习",
            "title": "课后追着老师问",
            "prompt": "你有个问题没懂，想课后追着老师问。",
            "description": "请写一句礼貌打扰的话。",
            "skill": "礼貌请教",
            "category": "老师提问",
        },
    ],
    "电梯偶遇": [
        {
            "tag": "开场练习",
            "title": "电梯偶遇领导",
            "prompt": "电梯门打开，里面只有你的直属领导。",
            "description": "请写一句自然不尴尬的寒暄。",
            "skill": "短时间建立好感",
            "category": "电梯偶遇",
        },
        {
            "tag": "开场练习",
            "title": "电梯偶遇暗恋对象",
            "prompt": "电梯里只有你和暗恋对象两人。",
            "description": "请写一句轻松自然的聊天开场。",
            "skill": "轻松应对近距离",
            "category": "电梯偶遇",
        },
    ],
}


def clamp(value: int, low: int = 0, high: int = 100) -> int:
    return max(low, min(high, value))


def read_json(handler: SimpleHTTPRequestHandler) -> dict[str, Any]:
    length = int(handler.headers.get("Content-Length", "0"))
    if length <= 0:
        return {}
    raw = handler.rfile.read(length).decode("utf-8")
    return json.loads(raw)


def json_response(handler: SimpleHTTPRequestHandler, payload: dict[str, Any], status: int = 200) -> None:
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Cache-Control", "no-store")
    handler.end_headers()
    handler.wfile.write(body)


def extract_json(text: str) -> dict[str, Any]:
    text = re.sub(r"<think>.*?</think>", "", text, flags=re.S).strip()
    decoder = json.JSONDecoder()
    for index, char in enumerate(text):
        if char != "{":
            continue
        try:
            value, _ = decoder.raw_decode(text[index:])
        except json.JSONDecodeError:
            continue
        if isinstance(value, dict):
            return value
    raise ValueError("AI response did not contain JSON")


def call_ai(system_prompt: str, user_prompt: str) -> dict[str, Any] | None:
    api_key = os.getenv("AI_API_KEY") or os.getenv("OPENAI_API_KEY")
    if not api_key:
        return None

    base_url = os.getenv("AI_BASE_URL", "https://api.minimaxi.com/v1/chat/completions")
    model = os.getenv("AI_MODEL", "MiniMax-M2.7")
    body = {
        "model": model,
        "temperature": 0.9,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
    }
    request = urllib.request.Request(
        base_url,
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            result = json.loads(response.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        return None

    content = result["choices"][0]["message"]["content"]
    return extract_json(content)


def local_scene(topic: str, avoid_title: str = "") -> dict[str, Any]:
    bank = SCENE_BANK.get(topic) or [item for scenes in SCENE_BANK.values() for item in scenes]
    candidates = [item for item in bank if item["title"] != avoid_title] or bank
    scene = dict(random.choice(candidates))
    scene["id"] = f"local-{random.randint(1000, 9999)}"
    scene["source"] = "local"
    return scene


def generate_scene(topic: str, avoid_title: str = "") -> dict[str, Any]:
    system_prompt = (
        "你是一个中文社交表达练习游戏的出题 AI。"
        "只返回 JSON，不要 Markdown。JSON 字段为 id, tag, title, prompt, description, skill。"
        "场景要具体、有画面感、轻量，不要像心理咨询问卷。"
        "不要重复用户刚刚练过的标题。"
    )
    user_prompt = f"围绕“{topic or '日常社交'}”生成一个新题目，避免标题“{avoid_title}”。"
    scene = call_ai(system_prompt, user_prompt)
    if scene:
        scene["source"] = "ai"
        return scene
    return local_scene(topic, avoid_title)


def make_better_answer(scene: dict[str, Any]) -> str:
    title = str(scene.get("title", ""))
    if "拒绝" in title or "求助" in title or "借" in title or "聚会" in title:
        return "不好意思，我今天状态不太够，今晚可能帮不了你。你可以先把最急的部分发我，我明天帮你看一眼思路。"
    if "老师" in title or "作业" in title or "提问" in title:
        return "老师，我中间这一步没有跟上，可以再讲一下为什么能这样变形吗？"
    if "群" in title or "提醒" in title or "文件" in title:
        return "大家好，我今晚 8 点后有空，要不要先把分工和截止时间简单列一下？"
    if "意见" in title or "方案" in title or "建议" in title:
        return "这个方向我觉得有亮点，但时间可能有点紧。要不要保留核心部分，把展示做轻一点？"
    return "嗨，我们好像是同一个小组的。我刚才看到你也在看选题，要不要等会儿简单对一下？"


def local_score(scene: dict[str, Any], answer: str) -> dict[str, Any]:
    text = answer.strip()
    scene_title = str(scene.get("title", ""))
    text_len = len(text)

    boundary_words = ["不能", "不太", "帮不了", "来不及", "没办法", "不方便", "先", "换", "改", "暂时", "今天", "现在"]
    stable_words = ["没关系", "不急", "慢慢来", "冷静", "没事", "还好", "正常", "理解", "明白"]
    relaxed_words = ["哈哈", "其实", "随便", "轻松", "没事", "不急", "慢慢来", "开心", "自然"]
    sincere_words = ["说实话", "其实", "我觉得", "真的", "确实", "坦白说", "老实说"]
    please_words = ["好的", "没问题", "可以", "行", "我来", "交给我", "一定", "保证"]
    pressure_words = ["必须", "马上", "立刻", "赶紧", "快点", "一定要", "不得不"]
    confident_words = ["我认为", "我觉得", "应该", "可以", "能够", "没问题", "相信"]
    
    weak_words = ["可能吧", "大概", "也许", "好像", "不知道", "随便", "都行"]
    aggressive_words = ["你怎么", "你为什么", "你不该", "真是的", "太过分"]
    vague_words = ["那个", "嗯", "啊", "这个", "随便吧", "都行"]

    def hits(words: list[str]) -> int:
        return sum(1 for word in words if word in text)

    if not text:
        return {
            "source": "local",
            "total": 0,
            "level": "还没开口",
            "scores": {
                "boundary": 0,
                "emotional_stability": 0,
                "relaxation": 0,
                "sincerity": 0,
                "pleasing": 0,
                "pressure": 0,
                "confidence": 0,
            },
            "feedback": "这次还没有输入回复。先写一句很短的话也可以，练习从开口开始。",
            "betterAnswer": make_better_answer(scene),
            "stress": 8,
            "overthink": 18,
            "courage": -4,
        }

    length_bonus = 0
    if text_len >= 8:
        length_bonus += 8
    if text_len >= 18:
        length_bonus += 10
    if text_len >= 36:
        length_bonus += 6
    if text_len > 120:
        length_bonus -= 8

    boundary = 40 + hits(boundary_words) * 8 + length_bonus
    emotional_stability = 45 + hits(stable_words) * 10 + hits(relaxed_words) * 5
    relaxation = 40 + hits(relaxed_words) * 10 + hits(stable_words) * 6
    sincerity = 45 + hits(sincere_words) * 12 - hits(vague_words) * 8
    pleasing = 50 + hits(please_words) * 8 - hits(boundary_words) * 3
    pressure = 30 + hits(pressure_words) * 10 + hits(aggressive_words) * 8
    confidence = 40 + hits(confident_words) * 10 - hits(weak_words) * 8

    if any(mark in text for mark in ["？", "?"]):
        boundary += 5
        confidence += 5
    if "拒绝" in scene_title or "借" in scene_title:
        boundary += 10
    if "催" in scene_title or "问" in scene_title:
        emotional_stability += 8
    if "喜欢" in scene_title:
        relaxation += 8
        sincerity += 8

    penalty = hits(aggressive_words) * 15 + hits(weak_words) * 10 + hits(vague_words) * 6
    boundary -= hits(weak_words) * 5
    emotional_stability -= hits(aggressive_words) * 12
    relaxation -= hits(pressure_words) * 8
    sincerity -= hits(vague_words) * 6
    confidence -= penalty

    scores = {
        "boundary": clamp(boundary),
        "emotional_stability": clamp(emotional_stability),
        "relaxation": clamp(relaxation),
        "sincerity": clamp(sincerity),
        "pleasing": clamp(pleasing),
        "pressure": clamp(pressure),
        "confidence": clamp(confidence),
    }
    
    total = round(
        scores["boundary"] * 0.15 +
        scores["emotional_stability"] * 0.15 +
        scores["relaxation"] * 0.15 +
        scores["sincerity"] * 0.15 +
        (100 - scores["pleasing"]) * 0.12 +
        (100 - scores["pressure"]) * 0.12 +
        scores["confidence"] * 0.16
    )

    level_map = [
        (90, "社交大师"),
        (80, "气场稳定者"),
        (70, "自然表达者"),
        (60, "稳步进步中"),
        (50, "开始突破"),
        (0, "继续练习"),
    ]
    level = next((name for score, name in level_map if total >= score), "继续练习")

    advice_parts = []
    if scores["boundary"] < 50:
        advice_parts.append("可以更明确地表达自己的边界")
    if scores["emotional_stability"] < 50:
        advice_parts.append("语气可以更平稳一些")
    if scores["relaxation"] < 50:
        advice_parts.append("试着让表达更轻松自然")
    if scores["sincerity"] < 50:
        advice_parts.append("可以更直接坦诚一些")
    if scores["pleasing"] > 70:
        advice_parts.append("注意不要过度讨好")
    if scores["pressure"] > 50:
        advice_parts.append("减少给对方的压迫感")
    if scores["confidence"] < 50:
        advice_parts.append("可以更自信一点")

    if total >= 85:
        advice = "太棒了！你的表达既清晰又得体，继续保持！"
    elif total >= 70:
        advice = "很不错！" + (" ".join(advice_parts) if advice_parts else "继续保持这种状态。")
    elif total >= 50:
        advice = "有进步空间，但没关系！每一次练习都在成长。继续尝试不同的表达方式。"
    else:
        advice = "这确实有点难，别灰心！尴尬是允许的。多练习几次，你会越来越好的。"

    anxiety_change = -20 if total >= 80 else -10 if total >= 65 else 5 if total >= 50 else 10

    return {
        "source": "local",
        "total": total,
        "level": level,
        "scores": scores,
        "feedback": f"你在「{scene.get('title', '这个场景')}」中的表现：{advice}",
        "betterAnswer": make_better_answer(scene),
        "stress": anxiety_change,
        "overthink": -25 if total >= 80 else -12 if total >= 65 else 12,
        "courage": 20 if total >= 80 else 12 if total >= 65 else 5,
    }


def score_answer(scene: dict[str, Any], answer: str) -> dict[str, Any]:
    system_prompt = (
        "你是中文社交表达练习游戏的评分 AI。只返回 JSON，不要 Markdown。"
        "JSON 字段：total(0-100), level, scores, feedback, betterAnswer, stress, overthink, courage。"
        "scores 字段包含 boundary, emotional_stability, relaxation, sincerity, pleasing, pressure, confidence 七个 0-100 分。"
        "反馈要温和、鼓励、具体、像小游戏报告，不要像诊断。永远要鼓励用户，即使表现不好也要说\"继续加油\"。"
        "焦虑值计算：stress 字段表示焦虑变化，负数表示焦虑降低（好），正数表示焦虑升高（需要改进）。"
        "IMPORTANT：永远不要说用户的表达\"不好\"或\"错误\"，只说\"可以改进\"或\"有进步空间\"。"
    )
    user_prompt = json.dumps({"scene": scene, "answer": answer}, ensure_ascii=False)
    result = call_ai(system_prompt, user_prompt)
    if result:
        result["source"] = "ai"
        total = clamp(int(result.get("total", 0)))
        result["total"] = total
        result["stress"] = -16 if total >= 80 else -8 if total >= 65 else 4
        result["overthink"] = -22 if total >= 80 else -10 if total >= 65 else 10
        result["courage"] = 18 if total >= 80 else 10 if total >= 65 else 3
        return result
    return local_score(scene, answer)


class PracticeRoomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args: Any, **kwargs: Any):
        super().__init__(*args, directory=str(STATIC_DIR), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self) -> None:
        if self.path == "/api/status":
            json_response(
                self,
                {
                    "aiEnabled": bool(os.getenv("AI_API_KEY") or os.getenv("OPENAI_API_KEY")),
                    "model": os.getenv("AI_MODEL", "local-fallback"),
                },
            )
            return
        super().do_GET()

    def do_POST(self) -> None:
        try:
            payload = read_json(self)
            if self.path == "/api/generate-scene":
                scene = generate_scene(str(payload.get("topic", "")), str(payload.get("avoidTitle", "")))
                json_response(self, {"scene": scene})
                return
            if self.path == "/api/score-answer":
                scene = payload.get("scene") or {}
                answer = str(payload.get("answer", "")).strip()
                if not answer:
                    json_response(self, {"error": "answer is required"}, HTTPStatus.BAD_REQUEST)
                    return
                json_response(self, {"result": score_answer(scene, answer)})
                return
            json_response(self, {"error": "not found"}, HTTPStatus.NOT_FOUND)
        except Exception as exc:
            json_response(self, {"error": str(exc)}, HTTPStatus.INTERNAL_SERVER_ERROR)


def run_server(port: int) -> None:
    with ThreadingHTTPServer(("127.0.0.1", port), PracticeRoomHandler) as server:
        print(f"社恐练习室已启动：http://127.0.0.1:{port}")
        print("AI_API_KEY/OPENAI_API_KEY 已配置时使用在线 AI，否则使用本地随机题库和模拟评分。")
        print("按 Ctrl+C 结束服务")
        server.serve_forever()


def main() -> None:
    parser = argparse.ArgumentParser(description="启动社恐练习室小游戏")
    parser.add_argument("--port", type=int, default=8000, help="本地服务端口，默认 8000")
    args = parser.parse_args()
    run_server(args.port)


if __name__ == "__main__":
    main()
