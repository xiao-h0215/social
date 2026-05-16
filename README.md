# 社恐练习室

一个轻量互动小游戏：用户进入虚拟练习室，选择社交场景，通过表达选项获得即时反馈，最后生成「社恐练习报告」。

## 运行方式

```powershell
cd D:\social_anxiety_practice_room
python app.py
```

然后打开浏览器访问：

```text
http://127.0.0.1:8000
```

如果 8000 端口被占用，可以指定端口：

```powershell
python app.py --port 8010
```

## 项目结构

```text
social_anxiety_practice_room/
  app.py
  README.md
  static/
    index.html
    styles.css
    app.js
```

## 玩法内容

- 选择一个社交练习场景
- 阅读聊天/现实对话背景
- 在多个表达选项中做选择
- 获得社交压力、内耗、勇气值变化
- 完成 3 次练习后生成练习报告

## AI 生成与评分

页面底部新增「AI 自由作答」：

- 选择练习主题
- 点击「生成问题」
- 输入你会怎么回复
- 点击「提交评分」
- 系统会给出总分、表达等级、四项小分和参考表达

默认不配置任何密钥也能运行，会使用本地模拟 AI 生成和评分。

如果要接入在线大模型，请在启动前配置 OpenAI 兼容接口：

```powershell
$env:AI_API_KEY="你的 API Key"
$env:AI_MODEL="gpt-4o-mini"
python app.py
```

如使用其他兼容服务，可额外配置：

```powershell
$env:AI_BASE_URL="https://你的服务地址/v1/chat/completions"
```
