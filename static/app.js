const sceneCategories = [
  { id: "dorm", name: "宿舍矛盾", icon: "🏠", color: "#3d8b72" },
  { id: "borrow", name: "被借钱", icon: "💰", color: "#d19b31" },
  { id: "relationship", name: "被催恋爱", icon: "💕", color: "#d36b55" },
  { id: "group", name: "小组作业冲突", icon: "👥", color: "#5276a6" },
  { id: "interview", name: "面试紧张", icon: "💼", color: "#7b68ee" },
  { id: "firstMeet", name: "初次见面", icon: "👋", color: "#00ced1" },
  { id: "icebreak", name: "社团破冰", icon: "🧊", color: "#ff69b4" },
  { id: "sarcasm", name: "被阴阳怪气", icon: "😏", color: "#9370db" },
  { id: "refuse", name: "不会拒绝别人", icon: "🚫", color: "#3cb371" },
  { id: "dinner", name: "聚餐冷场", icon: "🍽️", color: "#f39c12" },
  { id: "crush", name: "喜欢的人聊天", icon: "💘", color: "#ff6b6b" },
  { id: "teacher", name: "老师提问", icon: "👨‍🏫", color: "#4682b4" },
  { id: "elevator", name: "电梯偶遇", icon: "🛗", color: "#98fb98" },
];

const difficultyMap = {
  firstMeet: 1,
  icebreak: 1,
  elevator: 1,
  dinner: 2,
  crush: 2,
  teacher: 2,
  dorm: 3,
  group: 3,
  sarcasm: 3,
  borrow: 4,
  refuse: 4,
  relationship: 4,
  interview: 4,
};

const scenes = [
  {
    id: "dorm1",
    category: "dorm",
    difficulty: 3,
    tag: "边界练习",
    title: "室友作息冲突",
    prompt: "室友晚上12点还在打游戏开语音，你明天有早课想早点睡。",
    description: "请写一句既表达需求，又不指责对方的话。",
    skill: "把感受说清楚，不是攻击人",
    character: "室友",
    characterAvatar: "👨‍🎓",
    options: [
      {
        text: "你能不能小声点？我明天有早课要早点睡。",
        feedback: "直接表达了需求，但语气有点硬，容易引起对方反感。",
        level: "直接但生硬",
        stress: -5,
        overthink: 10,
        courage: 12,
        exp: 8,
      },
      {
        text: "我明天早上8点有课，现在有点困了，你方便戴耳机吗？谢谢啦！",
        feedback: "温和表达需求，给对方台阶，同时保持礼貌。",
        level: "温和沟通",
        stress: -18,
        overthink: -20,
        courage: 16,
        exp: 20,
      },
      {
        text: "算了，忍忍吧，别吵架。",
        feedback: "压抑自己的需求，容易积累负面情绪，长期不利于宿舍关系。",
        level: "默默忍受",
        stress: 8,
        overthink: 15,
        courage: -5,
        exp: 2,
      },
    ],
  },
  {
    id: "dorm2",
    category: "dorm",
    tag: "边界练习",
    title: "借用物品不打招呼",
    prompt: "室友又没打招呼就用了你的洗发水，这已经是第三次了。",
    description: "请写一句提醒对方尊重边界的话。",
    skill: "温和设立边界",
    character: "室友",
    characterAvatar: "👩‍🎓",
    options: [
      {
        text: "以后用我东西能不能先说一声？",
        feedback: "直接表达了不满，但可能让对方觉得被指责。",
        level: "直接提醒",
        stress: -3,
        overthink: 8,
        courage: 10,
        exp: 8,
      },
      {
        text: "我的洗发水好像快用完了，是不是大家一起用的比较快呀？以后用之前跟我说一声可以吗？",
        feedback: "用轻松的方式提醒，既表达了边界，又不让对方尴尬。",
        level: "委婉提醒",
        stress: -15,
        overthink: -18,
        courage: 14,
        exp: 18,
      },
      {
        text: "没事，随便用吧。",
        feedback: "压抑自己的感受，可能让对方觉得你的东西可以随意使用。",
        level: "压抑需求",
        stress: 5,
        overthink: 12,
        courage: -3,
        exp: 3,
      },
    ],
  },
  {
    id: "borrow1",
    category: "borrow",
    tag: "边界练习",
    title: "同学借钱不还再借",
    prompt: "同学上次借的钱还没还，今天又来找你借200块。",
    description: "请写一句既不伤害关系，又能明确表达立场的话。",
    skill: "不尴尬地拒绝借钱",
    character: "同学",
    characterAvatar: "👨‍🎒",
    options: [
      {
        text: "你上次借我的钱还没还呢，这次不借了。",
        feedback: "直接但有点生硬，可能让对方没面子。",
        level: "直接拒绝",
        stress: -5,
        overthink: 10,
        courage: 12,
        exp: 10,
      },
      {
        text: "我最近手头也有点紧，上次借你的钱方便先还我吗？",
        feedback: "既表达了困难，又委婉提醒对方还钱。",
        level: "委婉拒绝",
        stress: -15,
        overthink: -15,
        courage: 15,
        exp: 18,
      },
      {
        text: "好的，这就转给你。",
        feedback: "继续借钱可能会让对方养成习惯，不利于建立健康的边界。",
        level: "习惯性答应",
        stress: 5,
        overthink: 18,
        courage: -5,
        exp: 5,
      },
    ],
  },
  {
    id: "borrow2",
    category: "borrow",
    tag: "边界练习",
    title: "不想借钱给不熟的人",
    prompt: "不太熟的同学突然找你借500块应急。",
    description: "请写一句礼貌但明确的拒绝。",
    skill: "不熟也能礼貌拒绝",
    character: "不熟的同学",
    characterAvatar: "🧑‍🎓",
    options: [
      {
        text: "我没钱。",
        feedback: "简单直接，但可能显得不太友好。",
        level: "简单拒绝",
        stress: -5,
        overthink: 8,
        courage: 10,
        exp: 8,
      },
      {
        text: "不好意思，我最近也在攒钱买东西，实在帮不上忙，抱歉啊！",
        feedback: "礼貌拒绝并说明原因，不让对方觉得被针对。",
        level: "礼貌拒绝",
        stress: -12,
        overthink: -10,
        courage: 12,
        exp: 15,
      },
      {
        text: "好吧，那我转给你。",
        feedback: "勉强答应可能会让自己不舒服，也可能有收不回钱的风险。",
        level: "勉强答应",
        stress: 8,
        overthink: 15,
        courage: -3,
        exp: 5,
      },
    ],
  },
  {
    id: "relationship1",
    category: "relationship",
    tag: "沟通练习",
    title: "亲戚催谈恋爱",
    prompt: "过年回家，亲戚又开始催：\"都这么大了怎么还不谈恋爱？\"",
    description: "请写一句既能回应关心，又不让话题继续的话。",
    skill: "温柔化解催婚",
    character: "亲戚",
    characterAvatar: "👵",
    options: [
      {
        text: "我的事不用你管！",
        feedback: "态度太冲，容易引发争吵，伤了和气。",
        level: "直接顶撞",
        stress: 15,
        overthink: 20,
        courage: 8,
        exp: 5,
      },
      {
        text: "谢谢关心！我现在过得挺开心的，缘分到了自然会有的。",
        feedback: "感谢对方的关心，同时表达自己的节奏，让话题自然结束。",
        level: "温柔化解",
        stress: -18,
        overthink: -22,
        courage: 16,
        exp: 22,
      },
      {
        text: "嗯...还没遇到合适的。",
        feedback: "回答太简短，可能让对方继续追问。",
        level: "简短回应",
        stress: 5,
        overthink: 12,
        courage: 5,
        exp: 8,
      },
    ],
  },
  {
    id: "relationship2",
    category: "relationship",
    tag: "沟通练习",
    title: "父母催相亲",
    prompt: "爸妈说：\"隔壁阿姨给你介绍了个对象，周末去见见吧。\"",
    description: "请写一句表达自己想法，又不惹父母生气的话。",
    skill: "表达自己的节奏",
    character: "父母",
    characterAvatar: "👨👩",
    options: [
      {
        text: "我不去！你们别管我！",
        feedback: "态度强硬，容易引发争吵，伤害家人感情。",
        level: "激烈反抗",
        stress: 20,
        overthink: 25,
        courage: 6,
        exp: 3,
      },
      {
        text: "谢谢爸妈关心！我现在更想专注于工作/学习，等我准备好了会考虑的。",
        feedback: "感谢父母的关心，表达自己的节奏，让父母理解你的想法。",
        level: "理性沟通",
        stress: -15,
        overthink: -18,
        courage: 14,
        exp: 20,
      },
      {
        text: "好吧，我去。",
        feedback: "勉强答应可能让自己不开心，也不是真心想去。",
        level: "勉强接受",
        stress: 10,
        overthink: 20,
        courage: -5,
        exp: 5,
      },
    ],
  },
  {
    id: "group1",
    category: "group",
    tag: "观点练习",
    title: "小组分工不均",
    prompt: "小组作业中，有同学几乎不干活，你承担了大部分工作。",
    description: "请写一句在群里温和提醒的话。",
    skill: "不指责地提出问题",
    character: "小组群",
    characterAvatar: "👥",
    options: [
      {
        text: "有些人也太懒了吧，什么都不做！",
        feedback: "指责式表达容易引发冲突，破坏团队氛围。",
        level: "指责抱怨",
        stress: 12,
        overthink: 18,
        courage: 8,
        exp: 5,
      },
      {
        text: "大家好，我整理了一下目前的进度，有些部分还需要大家一起完成，我们今晚可以一起讨论一下分工吗？",
        feedback: "用事实说话，邀请大家一起解决问题，维护团队和谐。",
        level: "建设性沟通",
        stress: -15,
        overthink: -18,
        courage: 16,
        exp: 22,
      },
      {
        text: "算了，我自己做完算了。",
        feedback: "独自承担容易积累不满，也不利于团队合作。",
        level: "独自承担",
        stress: 8,
        overthink: 20,
        courage: -3,
        exp: 5,
      },
    ],
  },
  {
    id: "group2",
    category: "group",
    tag: "观点练习",
    title: "方案意见不合",
    prompt: "小组讨论方案时，你和另一位同学意见完全相反。",
    description: "请写一句先肯定对方，再表达自己观点的话。",
    skill: "不同意也能友好讨论",
    character: "同学",
    characterAvatar: "👨‍💼",
    options: [
      {
        text: "你这个想法根本行不通！",
        feedback: "直接否定对方，容易引发对立，不利于讨论。",
        level: "直接否定",
        stress: 15,
        overthink: 20,
        courage: 8,
        exp: 3,
      },
      {
        text: "我觉得你的想法有道理，从这个角度看确实不错。不过我有个不同的思路，我们可以一起看看哪种更合适。",
        feedback: "先肯定对方，再表达自己的观点，营造友好的讨论氛围。",
        level: "建设性讨论",
        stress: -18,
        overthink: -22,
        courage: 18,
        exp: 25,
      },
      {
        text: "好吧，就按你说的来吧。",
        feedback: "放弃自己的观点，可能导致方案不够完善。",
        level: "妥协放弃",
        stress: 5,
        overthink: 15,
        courage: -5,
        exp: 5,
      },
    ],
  },
  {
    id: "interview1",
    category: "interview",
    tag: "表达练习",
    title: "面试官问缺点",
    prompt: "面试官问：\"请说说你的缺点是什么？\"",
    description: "请写一句既诚实又不会减分的回答。",
    skill: "巧妙回答缺点",
    character: "面试官",
    characterAvatar: "👔",
    options: [
      {
        text: "我没什么缺点。",
        feedback: "显得不够真诚，面试官可能觉得你缺乏自我认知。",
        level: "回避问题",
        stress: 5,
        overthink: 15,
        courage: -3,
        exp: 3,
      },
      {
        text: "我有时候会对自己要求太高，追求完美，后来我学会了合理分配时间，先完成再完美。",
        feedback: "诚实说出缺点，并说明自己正在改进，展示成长潜力。",
        level: "坦诚成长",
        stress: -15,
        overthink: -18,
        courage: 18,
        exp: 22,
      },
      {
        text: "我有点内向，不太擅长说话。",
        feedback: "只说缺点不说改进，可能让面试官担心你的沟通能力。",
        level: "只说缺点",
        stress: 8,
        overthink: 15,
        courage: 8,
        exp: 8,
      },
    ],
  },
  {
    id: "interview2",
    category: "interview",
    tag: "表达练习",
    title: "被问到不会的问题",
    prompt: "面试官问了一个你不太了解的技术问题。",
    description: "请写一句诚实但不显得无能的回答。",
    skill: "诚实应对不会的问题",
    character: "面试官",
    characterAvatar: "👔",
    options: [
      {
        text: "这个问题我不会。",
        feedback: "太直接，可能让面试官觉得你不够专业。",
        level: "直接承认",
        stress: 10,
        overthink: 18,
        courage: 8,
        exp: 5,
      },
      {
        text: "这个领域我接触得不多，但我了解相关的XX技术，我可以快速学习。对于这个问题，我的理解是...",
        feedback: "诚实承认不足，同时展示相关能力和学习态度。",
        level: "诚实+展示",
        stress: -12,
        overthink: -15,
        courage: 16,
        exp: 20,
      },
      {
        text: "这个问题很简单，就是...",
        feedback: "不懂装懂可能会被追问，暴露真实水平。",
        level: "不懂装懂",
        stress: 15,
        overthink: 25,
        courage: 5,
        exp: 3,
      },
    ],
  },
  {
    id: "firstMeet1",
    category: "firstMeet",
    tag: "开场练习",
    title: "社团招新初次见面",
    prompt: "社团招新会上，你和一位看起来很投缘的同学初次见面。",
    description: "请写一句自然开启对话的开场白。",
    skill: "轻松开启对话",
    character: "陌生同学",
    characterAvatar: "👩‍🎤",
    options: [
      {
        text: "你好漂亮啊！",
        feedback: "直接夸外貌可能让对方觉得唐突，不太自然。",
        level: "唐突夸奖",
        stress: 5,
        overthink: 12,
        courage: 8,
        exp: 5,
      },
      {
        text: "嗨！你也是来参加XX社团的吗？我是XX学院的，你呢？",
        feedback: "从共同场景切入，自然开启对话，给对方回应空间。",
        level: "自然开场",
        stress: -15,
        overthink: -18,
        courage: 15,
        exp: 20,
      },
      {
        text: "你好。",
        feedback: "太简短，可能让对话无法继续。",
        level: "简单问候",
        stress: 5,
        overthink: 10,
        courage: 6,
        exp: 5,
      },
    ],
  },
  {
    id: "firstMeet2",
    category: "firstMeet",
    tag: "开场练习",
    title: "朋友介绍新朋友",
    prompt: "朋友带你认识一位新朋友，三个人站在一起有点尴尬。",
    description: "请写一句自我介绍并拉近距离的话。",
    skill: "轻松自我介绍",
    character: "新朋友",
    characterAvatar: "🧑‍🦰",
    options: [
      {
        text: "你好，我是XX。",
        feedback: "太简短，可能让对方不知道怎么接话。",
        level: "简短介绍",
        stress: 5,
        overthink: 10,
        courage: 8,
        exp: 5,
      },
      {
        text: "你好！我是XX，和XX是同学。听XX说你也喜欢XX，太好了！",
        feedback: "介绍自己的同时，找到共同话题，拉近距离。",
        level: "亲切介绍",
        stress: -18,
        overthink: -20,
        courage: 16,
        exp: 22,
      },
      {
        text: "嗨...",
        feedback: "过于紧张，可能让对方也感到尴尬。",
        level: "紧张问候",
        stress: 10,
        overthink: 18,
        courage: 3,
        exp: 3,
      },
    ],
  },
  {
    id: "icebreak1",
    category: "icebreak",
    tag: "破冰练习",
    title: "社团第一次见面会",
    prompt: "社团第一次见面会，大家轮流自我介绍，轮到你了。",
    description: "请写一句有趣又不尴尬的自我介绍。",
    skill: "让别人记住你",
    character: "社团成员",
    characterAvatar: "👨👩👧👦",
    options: [
      {
        text: "大家好，我是XX，来自XX学院。",
        feedback: "中规中矩，但不够有趣，可能让人记不住。",
        level: "常规介绍",
        stress: -5,
        overthink: 5,
        courage: 10,
        exp: 10,
      },
      {
        text: "大家好！我是XX，人称'XX小王子/小公主'，因为我特别喜欢XX。希望以后能和大家一起玩得开心！",
        feedback: "加入有趣的标签或爱好，让别人更容易记住你。",
        level: "有趣介绍",
        stress: -20,
        overthink: -22,
        courage: 18,
        exp: 25,
      },
      {
        text: "大家好...我是XX...",
        feedback: "过于紧张，可能让自我介绍效果大打折扣。",
        level: "紧张介绍",
        stress: 10,
        overthink: 20,
        courage: 5,
        exp: 5,
      },
    ],
  },
  {
    id: "icebreak2",
    category: "icebreak",
    tag: "破冰练习",
    title: "主动搭话陌生人",
    prompt: "社团活动中，你注意到一位独自坐着的同学。",
    description: "请写一句主动搭话的开场白。",
    skill: "主动不尴尬",
    character: "独自的同学",
    characterAvatar: "👨‍🎨",
    options: [
      {
        text: "你怎么一个人坐着？",
        feedback: "有点像审问，可能让对方感到不舒服。",
        level: "审问式开场",
        stress: 5,
        overthink: 12,
        courage: 8,
        exp: 5,
      },
      {
        text: "嗨！我注意到你也在看XX，你对这个也感兴趣吗？",
        feedback: "从观察到的细节切入，自然开启对话。",
        level: "自然搭话",
        stress: -15,
        overthink: -18,
        courage: 15,
        exp: 20,
      },
      {
        text: "坐这儿没人吧？",
        feedback: "虽然开启了对话，但话题不够深入。",
        level: "简单搭话",
        stress: -5,
        overthink: 5,
        courage: 10,
        exp: 8,
      },
    ],
  },
  {
    id: "sarcasm1",
    category: "sarcasm",
    tag: "应对练习",
    title: "同学酸你成绩好",
    prompt: "你考了高分，同学说：\"哎呀，学霸就是不一样，我们这种学渣比不了。\"",
    description: "请写一句既不激化矛盾，又能表达态度的回应。",
    skill: "优雅应对酸言酸语",
    character: "同学",
    characterAvatar: "😏",
    options: [
      {
        text: "你酸什么酸？我也是努力学习的！",
        feedback: "被激怒后反击，容易引发争吵。",
        level: "直接反击",
        stress: 20,
        overthink: 25,
        courage: 8,
        exp: 5,
      },
      {
        text: "哈哈，运气好而已。你上次XX考得也很棒呀！",
        feedback: "谦虚回应，同时夸奖对方，化解尴尬。",
        level: "幽默化解",
        stress: -15,
        overthink: -20,
        courage: 16,
        exp: 22,
      },
      {
        text: "哦...",
        feedback: "沉默回应可能让对方觉得你默认了他的说法。",
        level: "沉默回应",
        stress: 8,
        overthink: 15,
        courage: -3,
        exp: 3,
      },
    ],
  },
  {
    id: "sarcasm2",
    category: "sarcasm",
    tag: "应对练习",
    title: "同事暗示你偷懒",
    prompt: "同事当着大家的面说：\"有些人就是运气好，活儿少还轻松。\"",
    description: "请写一句既澄清事实，又不失风度的回应。",
    skill: "澄清不争吵",
    character: "同事",
    characterAvatar: "👩‍💼",
    options: [
      {
        text: "你说谁呢？我哪里偷懒了？",
        feedback: "直接质问，容易引发公开冲突。",
        level: "公开质问",
        stress: 20,
        overthink: 25,
        courage: 10,
        exp: 5,
      },
      {
        text: "可能我效率比较高吧，你要是有什么问题可以随时找我帮忙。",
        feedback: "平静回应，既澄清又保持风度，让对方无话可说。",
        level: "优雅回应",
        stress: -12,
        overthink: -18,
        courage: 15,
        exp: 20,
      },
      {
        text: "我没有...",
        feedback: "显得底气不足，可能让对方更得寸进尺。",
        level: "无力辩解",
        stress: 10,
        overthink: 20,
        courage: -3,
        exp: 5,
      },
    ],
  },
  {
    id: "refuse1",
    category: "refuse",
    tag: "边界练习",
    title: "同事推活给你",
    prompt: "同事说：\"你反正没事，帮我把这份报表做了吧。\"",
    description: "请写一句礼貌但坚定的拒绝。",
    skill: "温柔而坚定地拒绝",
    character: "同事",
    characterAvatar: "👨‍💻",
    options: [
      {
        text: "我凭什么帮你做？你自己不会做吗？",
        feedback: "语气太冲，容易破坏同事关系。",
        level: "强硬拒绝",
        stress: 15,
        overthink: 20,
        courage: 10,
        exp: 5,
      },
      {
        text: "不好意思，我手头也有很多事情要做，可能帮不上忙，你可以问问其他人。",
        feedback: "礼貌说明原因，坚定拒绝，同时提供建议。",
        level: "礼貌拒绝",
        stress: -12,
        overthink: -15,
        courage: 14,
        exp: 18,
      },
      {
        text: "好吧，我帮你做。",
        feedback: "习惯性答应，可能让对方觉得你好欺负。",
        level: "习惯性答应",
        stress: 8,
        overthink: 18,
        courage: -5,
        exp: 5,
      },
    ],
  },
  {
    id: "refuse2",
    category: "refuse",
    tag: "边界练习",
    title: "朋友借你作业抄",
    prompt: "朋友说：\"把你作业借我抄一下，就这一次。\"",
    description: "请写一句既坚持原则，又不伤害友情的话。",
    skill: "坚持原则不伤害关系",
    character: "朋友",
    characterAvatar: "👬",
    options: [
      {
        text: "不行，你自己不会做吗？",
        feedback: "语气生硬，可能伤害友情。",
        level: "生硬拒绝",
        stress: 8,
        overthink: 12,
        courage: 10,
        exp: 8,
      },
      {
        text: "抄作业不太好，不过我可以帮你讲一下思路，你自己做怎么样？",
        feedback: "坚持原则，同时提供帮助，维护友情。",
        level: "原则+帮助",
        stress: -18,
        overthink: -20,
        courage: 16,
        exp: 22,
      },
      {
        text: "好吧，给你。",
        feedback: "违背原则，可能害了朋友。",
        level: "违背原则",
        stress: 10,
        overthink: 18,
        courage: -5,
        exp: 5,
      },
    ],
  },
  {
    id: "dinner1",
    category: "dinner",
    tag: "暖场练习",
    title: "聚餐突然冷场",
    prompt: "部门聚餐时，大家都低头玩手机，场面有点尴尬。",
    description: "请写一句能活跃气氛的话。",
    skill: "化解冷场",
    character: "同事们",
    characterAvatar: "🍽️",
    options: [
      {
        text: "大家别玩手机了，聊聊天吧！",
        feedback: "有点像命令，可能让人觉得不舒服。",
        level: "命令式提醒",
        stress: 8,
        overthink: 12,
        courage: 10,
        exp: 8,
      },
      {
        text: "我最近发现一家超好吃的XX店，大家有没有什么推荐的美食？",
        feedback: "抛出一个轻松的话题，自然带动大家聊天。",
        level: "轻松暖场",
        stress: -18,
        overthink: -22,
        courage: 18,
        exp: 25,
      },
      {
        text: "...",
        feedback: "沉默只会让冷场更尴尬。",
        level: "沉默应对",
        stress: 12,
        overthink: 20,
        courage: -5,
        exp: 2,
      },
    ],
  },
  {
    id: "dinner2",
    category: "dinner",
    tag: "暖场练习",
    title: "和不熟的人吃饭",
    prompt: "你和不太熟的同事一起吃饭，不知道聊什么。",
    description: "请写一句开启话题的话。",
    skill: "开启轻松话题",
    character: "不熟的同事",
    characterAvatar: "👨‍💼",
    options: [
      {
        text: "你结婚了吗？有孩子吗？",
        feedback: "太私人的问题可能让对方不舒服。",
        level: "隐私提问",
        stress: 8,
        overthink: 15,
        courage: 8,
        exp: 5,
      },
      {
        text: "这家店的XX菜挺好吃的，你平时喜欢吃什么口味的菜？",
        feedback: "从当前场景切入，问轻松的话题。",
        level: "轻松话题",
        stress: -15,
        overthink: -18,
        courage: 14,
        exp: 18,
      },
      {
        text: "嗯...",
        feedback: "沉默会让双方都感到尴尬。",
        level: "沉默",
        stress: 10,
        overthink: 18,
        courage: -3,
        exp: 3,
      },
    ],
  },
  {
    id: "crush1",
    category: "crush",
    tag: "表达练习",
    title: "约喜欢的人出来",
    prompt: "你想约喜欢的人周末一起看电影。",
    description: "请写一句自然不尴尬的邀约。",
    skill: "自然表达好感",
    character: "喜欢的人",
    characterAvatar: "💘",
    options: [
      {
        text: "我喜欢你，周末和我去看电影吧！",
        feedback: "太直接，可能让对方感到压力。",
        level: "直接表白",
        stress: 15,
        overthink: 25,
        courage: 12,
        exp: 10,
      },
      {
        text: "周末有个电影挺好看的，我本来想自己去，你要是有空要不要一起？",
        feedback: "轻松邀约，给对方选择空间，不会太有压力。",
        level: "轻松邀约",
        stress: -15,
        overthink: -20,
        courage: 16,
        exp: 22,
      },
      {
        text: "周末有空吗？",
        feedback: "太模糊，对方可能不知道你想做什么。",
        level: "模糊邀约",
        stress: 10,
        overthink: 18,
        courage: 10,
        exp: 8,
      },
    ],
  },
  {
    id: "crush2",
    category: "crush",
    tag: "表达练习",
    title: "收到喜欢的人消息",
    prompt: "喜欢的人发来消息：\"周末有空吗？\"",
    description: "请写一句既表达开心，又不显得太激动的回复。",
    skill: "保持平常心",
    character: "喜欢的人",
    characterAvatar: "💘",
    options: [
      {
        text: "有空有空！你想干嘛我都有空！",
        feedback: "过于激动，可能让对方感到压力。",
        level: "过于激动",
        stress: 12,
        overthink: 20,
        courage: 10,
        exp: 8,
      },
      {
        text: "周末有空呀，有什么事吗？",
        feedback: "保持平静，给对方表达的空间。",
        level: "平静回应",
        stress: -15,
        overthink: -18,
        courage: 14,
        exp: 20,
      },
      {
        text: "嗯。",
        feedback: "太冷淡，可能让对方失去兴趣。",
        level: "过于冷淡",
        stress: 8,
        overthink: 15,
        courage: -3,
        exp: 5,
      },
    ],
  },
  {
    id: "teacher1",
    category: "teacher",
    tag: "提问练习",
    title: "课上被老师点名",
    prompt: "老师突然点名让你回答问题，你还没理清思路。",
    description: "请写一句既诚实，又能争取时间的回答。",
    skill: "优雅应对突发提问",
    character: "老师",
    characterAvatar: "👨‍🏫",
    options: [
      {
        text: "我不知道。",
        feedback: "太直接，可能让老师觉得你没认真听讲。",
        level: "直接承认",
        stress: 10,
        overthink: 18,
        courage: 8,
        exp: 5,
      },
      {
        text: "老师，我还在整理思路，能不能给我一点时间？我觉得这个问题可以从XX角度来分析...",
        feedback: "诚实说明状态，同时展示思考方向。",
        level: "诚实+思考",
        stress: -12,
        overthink: -15,
        courage: 15,
        exp: 18,
      },
      {
        text: "...",
        feedback: "沉默会让场面更尴尬。",
        level: "沉默",
        stress: 15,
        overthink: 25,
        courage: -5,
        exp: 2,
      },
    ],
  },
  {
    id: "teacher2",
    category: "teacher",
    tag: "提问练习",
    title: "课后追着老师问",
    prompt: "你有个问题没懂，想课后追着老师问。",
    description: "请写一句礼貌打扰的话。",
    skill: "礼貌请教",
    character: "老师",
    characterAvatar: "👩‍🏫",
    options: [
      {
        text: "老师，等一下，我有个问题。",
        feedback: "有点着急，可能让老师觉得你很冒失。",
        level: "着急提问",
        stress: 8,
        overthink: 12,
        courage: 10,
        exp: 8,
      },
      {
        text: "老师您好，不好意思打扰您，我刚才有个地方没听懂，想请教您一下可以吗？",
        feedback: "礼貌打招呼，说明来意，给老师拒绝的空间。",
        level: "礼貌请教",
        stress: -15,
        overthink: -18,
        courage: 14,
        exp: 20,
      },
      {
        text: "老师，那个...",
        feedback: "支支吾吾，可能让老师觉得你没有准备好。",
        level: "犹豫不决",
        stress: 10,
        overthink: 18,
        courage: 5,
        exp: 5,
      },
    ],
  },
  {
    id: "elevator1",
    category: "elevator",
    tag: "开场练习",
    title: "电梯偶遇领导",
    prompt: "电梯门打开，里面只有你的直属领导。",
    description: "请写一句自然不尴尬的寒暄。",
    skill: "短时间建立好感",
    character: "领导",
    characterAvatar: "👔",
    options: [
      {
        text: "领导好！最近工作怎么样？我最近工作很努力！",
        feedback: "过于热情，可能让领导感到不自在。",
        level: "过于热情",
        stress: 12,
        overthink: 20,
        courage: 10,
        exp: 8,
      },
      {
        text: "领导好！今天天气挺好的。",
        feedback: "轻松寒暄，不过于打扰，保持礼貌距离。",
        level: "轻松寒暄",
        stress: -12,
        overthink: -15,
        courage: 12,
        exp: 15,
      },
      {
        text: "...",
        feedback: "全程沉默会让双方都感到尴尬。",
        level: "沉默",
        stress: 15,
        overthink: 22,
        courage: -5,
        exp: 2,
      },
    ],
  },
  {
    id: "elevator2",
    category: "elevator",
    tag: "开场练习",
    title: "电梯偶遇暗恋对象",
    prompt: "电梯里只有你和暗恋对象两人。",
    description: "请写一句轻松自然的聊天开场。",
    skill: "轻松应对近距离",
    character: "暗恋对象",
    characterAvatar: "💝",
    options: [
      {
        text: "我喜欢你很久了！",
        feedback: "太突然，可能让对方感到压力。",
        level: "突然表白",
        stress: 20,
        overthink: 30,
        courage: 10,
        exp: 8,
      },
      {
        text: "嗨！真巧啊，你也去XX楼吗？",
        feedback: "轻松打招呼，从共同场景切入。",
        level: "轻松开场",
        stress: -15,
        overthink: -18,
        courage: 15,
        exp: 20,
      },
      {
        text: "...",
        feedback: "沉默会让电梯里的气氛非常尴尬。",
        level: "沉默",
        stress: 18,
        overthink: 25,
        courage: -5,
        exp: 2,
      },
    ],
  },
];

const GROWTH_LEVELS = [
  { name: "社恐小白", expRequired: 0 },
  { name: "尴尬逃跑者", expRequired: 500 },
  { name: "普通聊天员", expRequired: 1200 },
  { name: "自然社交者", expRequired: 2500 },
  { name: "气场稳定者", expRequired: 4500 },
  { name: "社交松弛大神", expRequired: 8000 },
];

const PERSONALITY_TAGS = [
  "慢热观察者",
  "高敏感共情型",
  "温柔讨好型",
  "安静治愈系",
  "理性分析者",
  "真诚倾听者",
];

const MOOD_STATES = [
  { icon: "😊", text: "元气满满" },
  { icon: "🙂", text: "状态不错" },
  { icon: "😐", text: "平平淡淡" },
  { icon: "😌", text: "有点疲惫" },
];

const COMPANIONS = {
  gentle_senior: {
    id: "gentle_senior",
    name: "温柔学姐",
    role: "温暖鼓励型",
    avatar: "👩‍🎓",
    encouragement: [
      "别紧张，慢慢来~ 你已经做得很好了！",
      "无论结果如何，你愿意尝试就已经很棒了！",
      "深呼吸，相信自己的能力，你可以的！",
      "每一步都是进步，不要着急哦~",
      "你的努力大家都看在眼里，继续加油！",
    ],
    moodAnalysis: [
      "我感觉你今天有点紧张呢，是遇到什么困难了吗？",
      "你的情绪很正常，很多人都会有这样的感受。",
      "试着放松一下，给自己一些时间调整。",
      "情绪就像天气，总会有阴晴，接纳它就好。",
    ],
    chatAdvice: [
      "聊天时可以多听对方说，适时给予回应就好。",
      "试着从对方感兴趣的话题入手，会更轻松。",
      "不用刻意找话题，自然一点就很舒服。",
      "保持眼神交流，但不用一直盯着哦~",
    ],
    dailyTasks: [
      "今天试着和一个陌生人打个招呼吧~",
      "尝试在群里发一条消息，不用太复杂。",
      "给朋友发一句关心的话，练习表达温暖。",
      "试着赞美别人一次，感受一下对方的反应。",
    ],
    bedtime: "晚安啦~ 今天辛苦了，明天继续加油！🌙",
  },
  calm_mentor: {
    id: "calm_mentor",
    name: "冷静导师",
    role: "理性分析型",
    avatar: "🧑‍🏫",
    encouragement: [
      "根据数据分析，你的进步速度高于平均水平。",
      "从概率角度看，每一次尝试都在提高成功几率。",
      "焦虑是正常的生理反应，深呼吸可以有效缓解。",
      "你的表现符合预期，继续保持这个趋势。",
    ],
    moodAnalysis: [
      "让我们分析一下：你现在的压力指数大概是多少？",
      "情绪波动是正常现象，关键在于如何管理。",
      "根据你的状态，建议先做3分钟深呼吸练习。",
      "我们可以把问题拆解成更小的部分来处理。",
    ],
    chatAdvice: [
      "建议使用开放式问题引导对话，比如'你觉得呢？'",
      "保持适当的语速，给对方思考的时间。",
      "注意观察对方的肢体语言，调整沟通策略。",
      "倾听时可以适当点头，表示你在关注。",
    ],
    dailyTasks: [
      "今天的任务：分析一个社交场景的潜在结果。",
      "尝试用结构化的方式准备一次对话。",
      "记录一次成功的社交互动，分析成功因素。",
      "制定一个简单的社交目标，并执行它。",
    ],
    bedtime: "今日数据分析完成，祝你有个理性的睡眠。🌙",
  },
  sarcastic_friend: {
    id: "sarcastic_friend",
    name: "毒舌好友",
    role: "直言不讳型",
    avatar: "😎",
    encouragement: [
      "怕什么？冲就完事了！谁还没尴尬过？",
      "别磨磨唧唧的，直接上！大不了社死一次。",
      "怂什么？你又不是人民币，不用人人都喜欢。",
      "人生短短几十年，尴尬就尴尬呗，反正没人记得。",
    ],
    moodAnalysis: [
      "又开始内耗了？醒醒，没人在乎那么多！",
      "你这焦虑纯属自己给自己加戏，停！",
      "别想了，越想越烦，直接行动比啥都强。",
      "多大点事儿，天塌不下来，放轻松！",
    ],
    chatAdvice: [
      "聊天而已，别搞得跟面试似的，自然点！",
      "想说啥说啥，没人会因为一句话把你怎么样。",
      "别在意细节，差不多就行，没人那么较真。",
      "实在不行就发个表情包，万能解药！",
    ],
    dailyTasks: [
      "今天必须主动跟三个人说话，少一个都不行！",
      "去！现在就去跟陌生人搭话，别找借口！",
      "今天的任务：把社恐丢一边，任性一次！",
      "立刻！马上！现在！发起一次聊天！",
    ],
    bedtime: "赶紧睡！明天还要继续战斗呢！🌙",
  },
  shy_friend: {
    id: "shy_friend",
    name: "社恐同类",
    role: "感同身受型",
    avatar: "🥺",
    encouragement: [
      "我...我也很紧张...但我们一起加油吧！",
      "其实我也不敢...不过，我们可以一点点来。",
      "没关系的，我懂你的感受，慢慢来就好。",
      "我们都是一样的，不用觉得孤单~",
    ],
    moodAnalysis: [
      "我也经常这样...感觉心跳好快...",
      "紧张是正常的，我每次也会手心冒汗...",
      "我们可以一起想办法克服它...",
      "其实很多人都和我们一样，只是不说而已...",
    ],
    chatAdvice: [
      "我一般会先打草稿...虽然还是会忘...",
      "可以从简单的话题开始，比如天气...",
      "如果实在不知道说什么，微笑就好了...",
      "我发现提前准备几个话题会好很多...",
    ],
    dailyTasks: [
      "今天我们试着说一句话就好，很短的那种...",
      "可以先在心里练习一下，没关系的...",
      "哪怕只是打个招呼，也是进步呀...",
      "我们一起加油，不着急...",
    ],
    bedtime: "晚安...明天也要一起加油哦...🌙",
  },
  charismatic_guy: {
    id: "charismatic_guy",
    name: "高情商男神",
    role: "体贴周到型",
    avatar: "✨",
    encouragement: [
      "我懂你的感受，这种紧张很正常，但你比想象中更优秀。",
      "你的优点很多，只是你自己还没完全发现。",
      "相信我，你身上有很多吸引人的特质。",
      "无论何时，我都会在这里支持你。",
    ],
    moodAnalysis: [
      "你看起来有些疲惫，要不要聊聊是什么让你感到压力？",
      "我注意到你今天情绪有些低落，发生什么事了吗？",
      "你的感受很重要，不要把它藏在心里。",
      "让我陪你一起分析，找到解决的办法。",
    ],
    chatAdvice: [
      "与人交流时，真诚是最有力的武器。",
      "试着站在对方的角度思考，会让对话更顺畅。",
      "适当的幽默可以缓解紧张气氛。",
      "记住对方说过的话，会让对方感到被重视。",
    ],
    dailyTasks: [
      "今天试着用真诚的赞美让别人开心。",
      "主动关心一下身边的人，传递温暖。",
      "练习倾听，并给出恰当的回应。",
      "今天的目标：让至少一个人感到被重视。",
    ],
    bedtime: "晚安，好好休息，明天又是新的开始。🌙",
  },
  energetic_girl: {
    id: "energetic_girl",
    name: "元气少女",
    role: "活力满满型",
    avatar: "🌟",
    encouragement: [
      "加油加油！你最棒！我相信你可以的！",
      "冲冲冲！没有什么能难倒你！",
      "你超级厉害的！不要小看自己！",
      "今天也是充满活力的一天！Go go go！",
    ],
    moodAnalysis: [
      "怎么啦怎么啦？有什么不开心的都告诉我！",
      "别担心！一切都会好起来的！",
      "来！跟我一起深呼吸！呼~吸~",
      "不管发生什么，我都会陪在你身边！",
    ],
    chatAdvice: [
      "聊天要开心一点！多笑一笑！",
      "可以分享一些有趣的事情呀！",
      "保持热情，对方会被你感染的！",
      "用你的活力带动整个氛围！",
    ],
    dailyTasks: [
      "今天要元气满满地度过！多笑哦！",
      "主动跟别人分享一件开心的事！",
      "今天的任务：传递正能量！",
      "用你的笑容感染身边的人！",
    ],
    bedtime: "晚安晚安！明天也要元气满满哦！🌙",
  },
};

const ACHIEVEMENTS = [
  { id: "first_practice", icon: "🎯", name: "初次练习", description: "完成第一次社交练习", progress: 0, target: 1, rewards: { exp: 50, coins: 100 } },
  { id: "refuse_master", icon: "🚫", name: "拒绝大师", description: "成功拒绝5次别人", progress: 0, target: 5, rewards: { exp: 100, stars: 5 } },
  { id: "teacher_question", icon: "❓", name: "勇敢提问", description: "向老师提问3次", progress: 0, target: 3, rewards: { exp: 80, coins: 80 } },
  { id: "group_talk", icon: "💬", name: "群聊达人", description: "在群里发言10次", progress: 0, target: 10, rewards: { exp: 150, stars: 8 } },
  { id: "streak_7", icon: "🔥", name: "连续七天", description: "连续打卡7天", progress: 0, target: 7, rewards: { exp: 200, coins: 200, stars: 10 } },
  { id: "perfect_score", icon: "🏆", name: "完美表达", description: "获得一次满分评价", progress: 0, target: 1, rewards: { exp: 300, stars: 15 } },
  { id: "total_practices", icon: "📚", name: "练习达人", description: "完成50次练习", progress: 0, target: 50, rewards: { exp: 500, coins: 500, stars: 20 } },
  { id: "courage_boost", icon: "💪", name: "勇气倍增", description: "勇气值达到100", progress: 0, target: 1, rewards: { exp: 150, coins: 150 } },
];

const MEDALS = [
  { id: "newbie", icon: "🎖️", name: "新手勋章", unlocked: true },
  { id: "week1", icon: "🥈", name: "第一周", unlocked: false },
  { id: "week2", icon: "🥉", name: "第二周", unlocked: false },
  { id: "month1", icon: "🏅", name: "月度坚持", unlocked: false },
  { id: "social_star", icon: "⭐", name: "社交之星", unlocked: false },
  { id: "confidence", icon: "💎", name: "自信宝石", unlocked: false },
  { id: "heart", icon: "❤️", name: "暖心勋章", unlocked: false },
  { id: "legend", icon: "👑", name: "社交传奇", unlocked: false },
];

const SHOP_ITEMS = [
  { id: "avatar_flower", icon: "🌸", name: "樱花头像", description: "换上可爱的樱花头像", price: { coins: 300 }, type: "avatar" },
  { id: "avatar_star", icon: "⭐", name: "星星头像", description: "闪耀的星星头像", price: { coins: 500 }, type: "avatar" },
  { id: "avatar_heart", icon: "❤️", name: "爱心头像", description: "温暖的爱心头像", price: { coins: 400 }, type: "avatar" },
  { id: "theme_pink", icon: "🎀", name: "粉色主题", description: "温馨的粉色界面", price: { coins: 800 }, type: "theme" },
  { id: "theme_blue", icon: "💎", name: "蓝色主题", description: "宁静的蓝色界面", price: { coins: 800 }, type: "theme" },
  { id: "partner_cute", icon: "🦋", name: "蝴蝶伙伴", description: "可爱的蝴蝶伙伴皮肤", price: { coins: 600 }, type: "partner" },
];

const PARTNER_DIALOGS = [
  "今天也要加油哦！✨",
  "你做得很棒呢！💪",
  "慢慢来，不着急~",
  "我相信你可以的！",
  "社交也是一种练习呢~",
  "每次进步一点点就好！",
  "你比想象中更勇敢！",
];

const RANDOM_EVENTS = [
  {
    id: "cat_encounter",
    title: "偶遇小猫",
    description: "你在路上遇到了一只迷路的小猫，它看起来很可爱...",
    acceptReward: { coins: 50, exp: 20 },
    message: "你蹲下来温柔地抚摸小猫，它发出了舒服的呼噜声！+50 金币 +20 EXP",
  },
  {
    id: "kind_stranger",
    title: "陌生人的微笑",
    description: "一位陌生人对你露出了友好的微笑...",
    acceptReward: { stars: 3, exp: 15 },
    message: "你也回以微笑，心情变好了！+3 星星 +15 EXP",
  },
  {
    id: "found_money",
    title: "捡到钱包",
    description: "你发现地上有一个钱包，里面有一些零钱...",
    acceptReward: { coins: 100 },
    message: "你把钱包交给了失主，获得了感谢！+100 金币",
  },
];

const STORAGE_KEY = "social-anxiety-practice-data-v2";
const FIRST_LAUNCH_KEY = "social-anxiety-first-launch";

let isFirstTimeUser = false;

const userData = loadUserData();

function createCleanUserData() {
  const today = new Date().toDateString();
  return {
    version: 2,
    isNewUser: true,
    createdAt: today,
    level: 1,
    exp: 0,
    coins: 0,
    stars: 0,
    streakDays: 0,
    socialValue: 0,
    personalityTag: "",
    moodIndex: 50,
    lastDate: today,
    streakDate: "",
    todayPracticeCount: 0,
    todayExpGained: 0,
    todayAvoidCount: 0,
    dailyMissions: [false, false, false],
    dailyStats: [],
    lastAnxiety: 75,
    lastOverthink: 65,
    lastCourage: 35,
    lastConfidence: 50,
    lastExpression: 60,
    achievements: ACHIEVEMENTS.map(a => ({ ...a, unlocked: false, progress: 0 })),
    medals: MEDALS.map(m => ({ ...m, unlocked: false })),
    ownedItems: [],
    partner: null,
    companion: null,
    history: [],
    chatHistory: [],
    voiceHistory: [],
    welcomeCompleted: false,
  };
}

function loadUserData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      
      if (data.version !== 2) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(FIRST_LAUNCH_KEY);
        isFirstTimeUser = true;
        return createCleanUserData();
      }
      
      const today = new Date().toDateString();
      if (data.lastDate !== today) {
        if (!data.dailyStats) data.dailyStats = [];
        data.dailyStats.push({
          date: data.lastDate,
          anxiety: data.lastAnxiety || 75,
          overthink: data.lastOverthink || 65,
          courage: data.lastCourage || 35,
          practiceCount: data.todayPracticeCount || 0,
          expGained: data.todayExpGained || 0,
          avoidCount: data.todayAvoidCount || 0,
          confidenceScore: data.lastConfidence || 50,
          expressionScore: data.lastExpression || 60,
        });
        
        if (data.dailyStats.length > 30) {
          data.dailyStats = data.dailyStats.slice(-30);
        }
        
        data.todayPracticeCount = 0;
        data.todayExpGained = 0;
        data.todayAvoidCount = 0;
        data.dailyMissions = [false, false, false];
        data.lastDate = today;
        if (data.streakDate !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          if (data.streakDate === yesterday.toDateString()) {
            data.streakDays++;
          } else {
            data.streakDays = 1;
          }
          data.streakDate = today;
        }
      }
      return data;
    }
  } catch (e) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(FIRST_LAUNCH_KEY);
  }
  
  isFirstTimeUser = true;
  localStorage.setItem(FIRST_LAUNCH_KEY, "true");
  return createCleanUserData();
}

function completeWelcome() {
  userData.isNewUser = false;
  userData.welcomeCompleted = true;
  userData.personalityTag = PERSONALITY_TAGS[0];
  saveUserData();
}

function saveUserData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (e) {
  }
}

function clearAllUserData() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(FIRST_LAUNCH_KEY);
  sessionStorage.clear();
  location.reload();
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">🎉</span>
    <span class="toast-message">${message}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function calculateLevel(exp) {
  for (let i = GROWTH_LEVELS.length - 1; i >= 0; i--) {
    if (exp >= GROWTH_LEVELS[i].expRequired) {
      return i;
    }
  }
  return 0;
}

function addExp(amount) {
  const oldLevel = calculateLevel(userData.exp);
  userData.exp += amount;
  userData.todayExpGained = (userData.todayExpGained || 0) + amount;
  const newLevel = calculateLevel(userData.exp);
  userData.socialValue += Math.floor(amount * 0.5);

  if (newLevel > oldLevel) {
    showToast(`恭喜升级！你现在是「${GROWTH_LEVELS[newLevel].name}」`);
    unlockMedal(`week${Math.floor(newLevel / 2) + 1}`);
  }

  checkAchievements();
  saveUserData();
  updateHomeStats();
}

function addCoins(amount) {
  userData.coins += amount;
  saveUserData();
  updateHomeStats();
}

function addStars(amount) {
  userData.stars += amount;
  saveUserData();
  updateHomeStats();
}

function checkAchievements() {
  userData.achievements.forEach((achievement) => {
    if (achievement.progress >= achievement.target) return;

    if (achievement.id === "first_practice" && userData.todayPracticeCount >= 1) {
      achievement.progress = 1;
      grantAchievementReward(achievement);
    } else if (achievement.id === "streak_7" && userData.streakDays >= 7) {
      achievement.progress = 7;
      grantAchievementReward(achievement);
    } else if (achievement.id === "total_practices") {
      const totalPractices = userData.todayPracticeCount + (userData.streakDays * 3);
      achievement.progress = Math.min(totalPractices, achievement.target);
      if (achievement.progress >= achievement.target) {
        grantAchievementReward(achievement);
      }
    }
  });
}

function grantAchievementReward(achievement) {
  if (achievement.rewards.exp) addExp(achievement.rewards.exp);
  if (achievement.rewards.coins) addCoins(achievement.rewards.coins);
  if (achievement.rewards.stars) addStars(achievement.rewards.stars);
  showToast(`🎊 成就达成：${achievement.name}！`);
}

function unlockMedal(medalId) {
  const medal = userData.medals.find(m => m.id === medalId);
  if (medal && !medal.unlocked) {
    medal.unlocked = true;
    showToast(`🏅 解锁勋章：${medal.name}！`);
    saveUserData();
    renderMedals();
  }
}

function updateHomeStats() {
  const level = calculateLevel(userData.exp);
  const currentLevelExp = GROWTH_LEVELS[level].expRequired;
  const nextLevelExp = level < GROWTH_LEVELS.length - 1 ? GROWTH_LEVELS[level + 1].expRequired : userData.exp;
  const progress = ((userData.exp - currentLevelExp) / (nextLevelExp - currentLevelExp)) * 100;

  document.getElementById("levelBadge").textContent = `Lv.${level + 1}`;
  document.getElementById("socialValue").textContent = userData.socialValue.toLocaleString();
  document.getElementById("streakDays").textContent = userData.streakDays;
  document.getElementById("moodIcon").textContent = MOOD_STATES[userData.moodIndex]?.icon || "😊";
  document.getElementById("moodStatus").textContent = MOOD_STATES[userData.moodIndex]?.text || "准备开始";
  document.getElementById("personalityTag").textContent = userData.personalityTag || "新用户";
  document.getElementById("progressLevel").textContent = GROWTH_LEVELS[level].name;
  document.getElementById("progressFill").style.width = `${Math.min(100, progress)}%`;
  document.getElementById("expCurrent").textContent = userData.exp;
  document.getElementById("expNext").textContent = nextLevelExp;
  document.getElementById("coinCount").textContent = userData.coins.toLocaleString();
  document.getElementById("starCount").textContent = userData.stars;
  
  if (userData.partner) {
    document.getElementById("partnerAffection").textContent = `${userData.partner.affection}%`;
    document.getElementById("partnerIcon").textContent = userData.partner.icon;
    document.getElementById("affectionFill").style.width = `${userData.partner.affection}%`;
  } else {
    document.getElementById("partnerAffection").textContent = "0%";
    document.getElementById("partnerIcon").textContent = "🌱";
    document.getElementById("affectionFill").style.width = "0%";
  }

  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker, index) => {
    marker.classList.toggle("active", index <= level);
  });
}

function claimDailyReward() {
  const claimBtn = document.getElementById("claimBtn");
  if (claimBtn.disabled) return;

  addExp(20);
  addCoins(50);
  claimBtn.disabled = true;
  claimBtn.textContent = "已领取";
  showToast("领取成功！+20 EXP +50 金币");
}

function feedPartner() {
  if (userData.coins < 10) {
    showToast("金币不足！", "warning");
    return;
  }
  userData.coins -= 10;
  userData.partner.affection = Math.min(100, userData.partner.affection + 5);
  updatePartnerDialog("谢谢你的投喂！🍪");
  saveUserData();
  updateHomeStats();
  showToast("投喂成功！伙伴好感度 +5");
}

function talkPartner() {
  userData.partner.affection = Math.min(100, userData.partner.affection + 2);
  const randomDialog = PARTNER_DIALOGS[Math.floor(Math.random() * PARTNER_DIALOGS.length)];
  updatePartnerDialog(randomDialog);
  saveUserData();
  updateHomeStats();
}

function playPartner() {
  if (userData.coins < 20) {
    showToast("金币不足！", "warning");
    return;
  }
  userData.coins -= 20;
  userData.partner.affection = Math.min(100, userData.partner.affection + 8);
  updatePartnerDialog("一起玩耍真开心！🎮");
  saveUserData();
  updateHomeStats();
  showToast("玩耍成功！伙伴好感度 +8");
}

function updatePartnerDialog(message) {
  document.getElementById("partnerDialog").textContent = message;
}

function buyShopItem(itemId) {
  const item = SHOP_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (userData.ownedItems.includes(itemId)) {
    showToast("你已经拥有这个物品了！", "warning");
    return;
  }

  if (item.price.coins && userData.coins < item.price.coins) {
    showToast("金币不足！", "warning");
    return;
  }

  userData.coins -= item.price.coins || 0;
  userData.ownedItems.push(itemId);
  
  if (item.type === "avatar") {
    document.getElementById("avatarIcon").textContent = item.icon;
  }

  saveUserData();
  updateHomeStats();
  renderShop();
  showToast(`购买成功！获得 ${item.name}`);
}

function showRandomEvent() {
  if (Math.random() > 0.3) return;

  const event = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
  const eventElement = document.getElementById("randomEvent");
  const eventContent = document.getElementById("eventContent");
  
  eventContent.innerHTML = `<p>${event.description}</p>`;
  eventElement.style.display = "block";

  document.getElementById("eventAccept").onclick = () => {
    if (event.acceptReward.coins) addCoins(event.acceptReward.coins);
    if (event.acceptReward.exp) addExp(event.acceptReward.exp);
    if (event.acceptReward.stars) addStars(event.acceptReward.stars);
    showToast(event.message);
    eventElement.style.display = "none";
  };

  document.getElementById("eventDecline").onclick = () => {
    eventElement.style.display = "none";
  };
}

function renderAchievements() {
  const grid = document.getElementById("achievementsGrid");
  grid.innerHTML = userData.achievements.map(achievement => {
    const completed = achievement.progress >= achievement.target;
    const progressPercent = Math.min(100, (achievement.progress / achievement.target) * 100);
    return `
      <div class="achievement-card ${completed ? 'completed' : 'locked'}">
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-name">${achievement.name}</div>
        <div class="achievement-desc">${achievement.description}</div>
        <div class="achievement-progress">${achievement.progress}/${achievement.target}</div>
      </div>
    `;
  }).join("");
}

function renderMedals() {
  const grid = document.getElementById("medalsGrid");
  grid.innerHTML = userData.medals.map(medal => `
    <div class="medal-item ${medal.unlocked ? '' : 'locked'}">
      <div class="medal-icon">${medal.icon}</div>
      <div class="medal-name">${medal.name}</div>
    </div>
  `).join("");
}

function renderShop() {
  const grid = document.getElementById("shopGrid");
  grid.innerHTML = SHOP_ITEMS.map(item => {
    const owned = userData.ownedItems.includes(item.id);
    return `
      <div class="shop-item ${owned ? 'purchased' : ''}" onclick="buyShopItem('${item.id}')">
        <div class="shop-icon">${item.icon}</div>
        <div class="shop-name">${item.name}</div>
        <div class="shop-desc">${item.description}</div>
        <div class="shop-price">${owned ? '已拥有' : `🪙 ${item.price.coins}`}</div>
      </div>
    `;
  }).join("");
}

function renderPartner() {
  const partner = userData.partner;
  if (partner) {
    document.getElementById("partnerAvatar").textContent = partner.icon;
    document.getElementById("partnerName").textContent = partner.name;
    document.getElementById("partnerLevel").textContent = `Lv.${partner.level} 鼓励精灵`;
    document.getElementById("affectionFill").style.width = `${partner.affection}%`;
    updatePartnerDialog(PARTNER_DIALOGS[0]);
  } else {
    document.getElementById("partnerAvatar").textContent = "🌱";
    document.getElementById("partnerName").textContent = "等待相遇";
    document.getElementById("partnerLevel").textContent = "Lv.1 练习伙伴";
    document.getElementById("affectionFill").style.width = "0%";
    updatePartnerDialog("开始你的第一次练习吧！🌱");
  }
}

function renderDailyMissions() {
  const list = document.getElementById("missionList");
  const missions = [
    { id: 0, text: "完成1次选择题练习", reward: "+15 EXP", completed: userData.dailyMissions[0] },
    { id: 1, text: "完成1次AI自由作答", reward: "+25 EXP", completed: userData.dailyMissions[1] },
    { id: 2, text: "分享今日练习到社交平台", reward: "+30 EXP", completed: userData.dailyMissions[2] },
  ];

  list.innerHTML = missions.map(mission => `
    <div class="mission-item ${mission.completed ? 'completed' : ''}" onclick="completeMission(${mission.id})">
      <span class="mission-check">${mission.completed ? '✓' : '○'}</span>
      <span class="mission-text">${mission.text}</span>
      <span class="mission-reward">${mission.reward}</span>
    </div>
  `).join("");

  const completedCount = userData.dailyMissions.filter(Boolean).length;
  document.getElementById("missionProgress").textContent = `${completedCount}/3`;
}

function completeMission(missionId) {
  if (userData.dailyMissions[missionId]) return;

  userData.dailyMissions[missionId] = true;
  
  const rewards = [15, 25, 30];
  addExp(rewards[missionId]);
  
  saveUserData();
  renderDailyMissions();
  showToast(`任务完成！+${rewards[missionId]} EXP`);
}

const state = {
  mode: "start",
  activeScene: scenes[0],
  activeCategory: null,
  aiScene: null,
  anxiety: 75,
  overthink: 65,
  courage: 35,
  history: [],
  totalPracticeCount: 0,
  retryCount: 0,
  initialized: false,
};

const clamp = (value) => Math.max(0, Math.min(100, value));
const $ = (selector) => document.querySelector(selector);

const startScreen = $("#startScreen");
const practiceShell = $("#practiceShell");
const reportPanel = $("#reportPanel");
const fixedSection = $("#fixedSection");
const aiSection = $("#aiSection");
const sceneList = $("#sceneList");
const promptText = $("#promptText");
const sceneTag = $("#sceneTag");
const sceneTitle = $("#sceneTitle");
const sceneDescription = $("#sceneDescription");
const options = $("#options");
const feedbackBox = $("#feedbackBox");
const historyList = $("#historyList");
const reportScore = $("#reportScore");
const generateBtn = $("#generateBtn");
const scoreBtn = $("#scoreBtn");
const topicSelect = $("#topicSelect");
const answerInput = $("#answerInput");
const aiQuestion = $("#aiQuestion");
const aiStatus = $("#aiStatus");
const scoreHint = $("#scoreHint");

const meters = {
  anxiety: [$("#anxietyValue"), $("#anxietyBar")],
  overthink: [$("#overthinkValue"), $("#overthinkBar")],
  courage: [$("#courageValue"), $("#courageBar")],
};

function showMode(mode) {
  state.mode = mode;
  const landingPage = document.getElementById("landingPage");
  if (landingPage) {
    landingPage.style.display = mode === "landing" ? "block" : "none";
  }
  document.getElementById("welcomeScreen")?.classList.toggle("hidden", mode !== "welcome");
  startScreen.classList.toggle("hidden", mode !== "start");
  practiceShell.classList.toggle("hidden", mode === "start");
  reportPanel.classList.toggle("hidden", mode === "start");
  fixedSection.classList.toggle("hidden", mode !== "fixed");
  aiSection.classList.toggle("hidden", mode !== "ai");
  $("#modeTitle").textContent = mode === "ai" ? "AI 生成问题" : "固定问题";
  render();

  if (mode === "start") {
    updateHomeStats();
    renderAchievements();
    renderMedals();
    renderPartner();
    renderShop();
    renderDailyMissions();
    setTimeout(showRandomEvent, 2000);
  }
  
  if (mode === "start" && !state.initialized) {
    state.initialized = true;
    loadStatus();
    createParticles();
  }
}

function renderScenes() {
  sceneList.innerHTML = "";
  
  const categoryButtons = document.createElement("div");
  categoryButtons.className = "category-tabs";
  
  const difficultyLabels = { 1: "⭐", 2: "⭐⭐", 3: "⭐⭐⭐", 4: "⭐⭐⭐⭐" };
  const difficultyColors = { 1: "#27ae60", 2: "#f39c12", 3: "#e67e22", 4: "#e74c3c" };
  
  if (!state.activeCategory) {
    const recommendedSection = document.createElement("div");
    recommendedSection.className = "recommended-section";
    
    const userLevel = state.totalPracticeCount < 3 ? "新手" : state.totalPracticeCount < 10 ? "进阶" : "达人";
    const recommendedDifficulty = state.totalPracticeCount < 3 ? 1 : state.totalPracticeCount < 10 ? 2 : 3;
    
    recommendedSection.innerHTML = `
      <div class="recommended-header">
        <span class="recommended-icon">🎯</span>
        <span>推荐场景 - ${userLevel}模式</span>
      </div>
      <p class="recommended-hint">根据你的练习进度，为你推荐适合的场景难度</p>
    `;
    
    const recommendedGrid = document.createElement("div");
    recommendedGrid.className = "scene-grid recommended-grid";
    
    const recommendedScenes = scenes.filter(s => (s.difficulty || 2) <= recommendedDifficulty).slice(0, 4);
    recommendedScenes.forEach((scene) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `scene-card recommended-card${scene.id === state.activeScene.id ? " active" : ""}`;
      card.innerHTML = `
        <div class="scene-tag" style="background: ${sceneCategories.find(c => c.id === scene.category)?.color || "#666"}30; color: ${sceneCategories.find(c => c.id === scene.category)?.color || "#666"};">
          ${scene.tag}
        </div>
        <h3>${scene.title}</h3>
        <p class="scene-desc">${scene.description}</p>
        <div class="scene-meta">
          <span class="difficulty-badge" style="color: ${difficultyColors[scene.difficulty] || "#666"};">
            ${difficultyLabels[scene.difficulty] || "⭐"}
          </span>
          <span class="character-avatar-small">${scene.characterAvatar || "👤"}</span>
        </div>
      `;
      card.addEventListener("click", () => {
        state.activeScene = scene;
        renderStage();
        renderScenes();
      });
      recommendedGrid.appendChild(card);
    });
    
    recommendedSection.appendChild(recommendedGrid);
    sceneList.appendChild(recommendedSection);
  }
  
  sceneCategories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `category-tab${state.activeCategory === cat.id ? " active" : ""}`;
    btn.style.setProperty("--category-color", cat.color);
    btn.innerHTML = `<span>${cat.icon}</span><span>${cat.name}</span>`;
    btn.addEventListener("click", () => {
      state.activeCategory = cat.id;
      renderScenes();
    });
    categoryButtons.appendChild(btn);
  });
  
  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = `category-tab${!state.activeCategory ? " active" : ""}`;
  allBtn.innerHTML = "<span>🎯</span><span>全部场景</span>";
  allBtn.addEventListener("click", () => {
    state.activeCategory = null;
    renderScenes();
  });
  categoryButtons.insertBefore(allBtn, categoryButtons.firstChild);
  
  sceneList.appendChild(categoryButtons);
  
  const filteredScenes = state.activeCategory 
    ? scenes.filter(s => s.category === state.activeCategory)
    : scenes;
  
  const sceneGrid = document.createElement("div");
  sceneGrid.className = "scene-grid";
  
  filteredScenes.forEach((scene) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `scene-card${scene.id === state.activeScene.id ? " active" : ""}`;
    card.innerHTML = `
      <div class="scene-tag" style="background: ${sceneCategories.find(c => c.id === scene.category)?.color || "#666"}30; color: ${sceneCategories.find(c => c.id === scene.category)?.color || "#666"};">
        ${scene.tag}
      </div>
      <h3>${scene.title}</h3>
      <p class="scene-desc">${scene.description}</p>
      <div class="scene-meta">
        <span class="difficulty-badge" style="color: ${difficultyColors[scene.difficulty] || "#666"};">
          ${difficultyLabels[scene.difficulty] || "⭐"}
        </span>
        <span class="character-avatar-small">${scene.characterAvatar || "👤"}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      state.activeScene = scene;
      renderStage();
      renderScenes();
    });
    sceneGrid.appendChild(card);
  });
  
  sceneList.appendChild(sceneGrid);
}

function renderMeters() {
  Object.entries(meters).forEach(([key, [valueNode, barNode]]) => {
    valueNode.textContent = state[key];
    barNode.style.width = `${state[key]}%`;
  });
  
  const anxietyIndicator = document.getElementById('anxietyIndicator');
  if (anxietyIndicator) {
    const anxiety = state.anxiety;
    let label, className;
    if (anxiety <= 30) {
      label = '很放松';
      className = 'indicator-low';
    } else if (anxiety <= 50) {
      label = '轻松';
      className = 'indicator-low';
    } else if (anxiety <= 70) {
      label = '较紧张';
      className = 'indicator-medium';
    } else {
      label = '很紧张';
      className = 'indicator-high';
    }
    anxietyIndicator.querySelector('.indicator-label').textContent = label;
    anxietyIndicator.className = `anxiety-indicator show ${className}`;
  }
}

function renderStage() {
  const scene = state.activeScene;
  promptText.textContent = scene.prompt;
  sceneTag.textContent = scene.tag;
  sceneTitle.textContent = scene.title;
  sceneDescription.textContent = scene.description;
  options.innerHTML = "";

  scene.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option.text}`;
    button.addEventListener("click", () => chooseOption(scene, option));
    options.appendChild(button);
  });
}

function chooseOption(scene, option) {
  state.anxiety = clamp(state.anxiety + option.stress);
  state.overthink = clamp(state.overthink + option.overthink);
  state.courage = clamp(state.courage + option.courage);
  state.totalPracticeCount++;
  userData.todayPracticeCount++;
  
  if (option.level.includes("忍受") || option.level.includes("压抑") || option.level.includes("算了") || option.level.includes("妥协")) {
    userData.todayAvoidCount = (userData.todayAvoidCount || 0) + 1;
  }
  
  userData.lastAnxiety = state.anxiety;
  userData.lastOverthink = state.overthink;
  userData.lastCourage = state.courage;
  userData.lastConfidence = Math.round((state.courage * 0.6 + (100 - state.anxiety) * 0.4));
  userData.lastExpression = Math.round((state.courage * 0.5 + (100 - state.overthink) * 0.5));

  addExp(option.exp);
  animateAnxietyChange(option.stress);
  animateCourageChange(option.courage);

  if (!userData.dailyMissions[0]) {
    completeMission(0);
  }

  const isGoodResponse = option.exp >= 15;
  showEncouragementAnimation(isGoodResponse);

  addHistory({
    scene: scene.title,
    level: option.level,
    skill: scene.skill,
    feedback: option.feedback,
    score: null,
    anxiety: option.stress,
    overthink: option.overthink,
    courage: option.courage,
    exp: option.exp,
  });
}

function signed(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function addHistory(item) {
  state.history.unshift(item);
  state.history = state.history.slice(0, 8);
  renderReport();
  renderMeters();
}

function animateAnxietyChange(delta) {
  const [valueNode, barNode] = meters.anxiety;
  const currentValue = state.anxiety;
  const targetValue = clamp(currentValue - delta);
  
  valueNode.classList.add('animating');
  barNode.classList.add('animating');
  
  if (delta < 0) {
    valueNode.classList.add('decrease');
    valueNode.classList.remove('increase');
    barNode.style.background = 'linear-gradient(90deg, #3d8b72, #2ecc71)';
  } else {
    valueNode.classList.add('increase');
    valueNode.classList.remove('decrease');
    barNode.style.background = 'linear-gradient(90deg, #e74c3c, #f39c12)';
  }
  
  let current = currentValue;
  const step = delta < 0 ? -2 : 2;
  const interval = setInterval(() => {
    current += step;
    if ((delta < 0 && current <= targetValue) || (delta > 0 && current >= targetValue)) {
      current = targetValue;
      clearInterval(interval);
      valueNode.classList.remove('animating', 'increase', 'decrease');
      barNode.classList.remove('animating');
    }
    valueNode.textContent = current;
    barNode.style.width = `${current}%`;
    updateAnxietyColor(current);
  }, 30);
}

function updateAnxietyColor(value) {
  const [, barNode] = meters.anxiety;
  let color;
  if (value <= 30) {
    color = '#27ae60';
  } else if (value <= 50) {
    color = '#3d8b72';
  } else if (value <= 70) {
    color = '#f39c12';
  } else {
    color = '#e74c3c';
  }
  barNode.style.background = color;
}

function animateCourageChange(delta) {
  const [valueNode, barNode] = meters.courage;
  const currentValue = state.courage;
  const targetValue = clamp(currentValue + delta);
  
  valueNode.classList.add('animating');
  barNode.classList.add('animating');
  
  if (delta > 0) {
    valueNode.classList.add('increase');
    valueNode.classList.remove('decrease');
  } else {
    valueNode.classList.add('decrease');
    valueNode.classList.remove('increase');
  }
  
  let current = currentValue;
  const step = delta > 0 ? 2 : -2;
  const interval = setInterval(() => {
    current += step;
    if ((delta > 0 && current >= targetValue) || (delta < 0 && current <= targetValue)) {
      current = targetValue;
      clearInterval(interval);
      valueNode.classList.remove('animating', 'increase', 'decrease');
      barNode.classList.remove('animating');
    }
    valueNode.textContent = current;
    barNode.style.width = `${current}%`;
  }, 30);
}

function showEncouragementAnimation(isGood) {
  const feedbackArea = document.querySelector('.feedback-section');
  if (!feedbackArea) return;
  
  feedbackArea.classList.remove('encouragement-pop');
  void feedbackArea.offsetWidth;
  feedbackArea.classList.add('encouragement-pop');
  
  if (isGood) {
    const container = document.createElement('div');
    container.className = 'particle-container';
    container.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; overflow: hidden;';
    document.body.appendChild(container);
    
    const emojis = ['✨', '🌟', '💪', '👍', '🎉', '💖'];
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      particle.style.cssText = `
        position: absolute;
        font-size: ${16 + Math.random() * 16}px;
        left: ${20 + Math.random() * 60}%;
        top: 50%;
        animation: particleFloat ${1 + Math.random()}s ease-out forwards;
        animation-delay: ${Math.random() * 0.3}s;
      `;
      container.appendChild(particle);
    }
    
    setTimeout(() => container.remove(), 2000);
  }
}

function renderReport() {
  const latest = state.history[0];
  if (!latest) return;

  $("#reportPractice").textContent = latest.scene;
  $("#reportLevel").textContent = latest.level;
  $("#reportSkill").textContent = latest.skill;
  reportScore.textContent = latest.score ? `${latest.score} 分` : "选择题练习";
  
  let scoreHtmlContent = "";
  if (latest.scoreHtml) {
    scoreHtmlContent = latest.scoreHtml;
  }
  
  feedbackBox.innerHTML = `
    <strong>${latest.level}</strong>
    <p>${latest.feedback}</p>
    ${scoreHtmlContent}
    <p>社交焦虑 ${signed(latest.anxiety)}，内耗 ${signed(latest.overthink)}，勇气值 ${signed(latest.courage)}。</p>
    ${latest.exp ? `<p>获得 EXP：+${latest.exp}</p>` : ""}
    ${latest.betterAnswer ? `<p><b>参考表达：</b>${latest.betterAnswer}</p>` : ""}
  `;

  historyList.innerHTML = "";
  state.history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.scene}：${item.level}${item.score ? `，${item.score} 分` : ""}${item.exp ? `，+${item.exp} EXP` : ""}`;
    historyList.appendChild(li);
  });
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "请求失败");
  }
  return data;
}

async function loadStatus() {
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    aiStatus.textContent = data.aiEnabled ? `在线 AI：${data.model}` : "本地 AI 模拟";
  } catch {
    aiStatus.textContent = "本地 AI 模拟";
  }
}

async function generateAiScene() {
  generateBtn.disabled = true;
  scoreBtn.disabled = true;
  scoreHint.textContent = "正在生成新问题...";
  aiQuestion.innerHTML = "<strong>生成中</strong><p>练习室正在布置一个新场景。</p>";

  try {
    const data = await postJson("/api/generate-scene", {
      topic: topicSelect.value,
      avoidTitle: state.aiScene?.title || "",
    });
    state.aiScene = data.scene;
    answerInput.value = "";
    aiQuestion.innerHTML = `
      <strong>${state.aiScene.title}</strong>
      <p>${state.aiScene.prompt}</p>
      <p>${state.aiScene.description}</p>
    `;
    scoreBtn.disabled = false;
    generateBtn.textContent = "再生成一题";
    scoreHint.textContent = state.aiScene.source === "ai" ? "由在线 AI 生成" : "由本地模拟 AI 生成";
  } catch (error) {
    aiQuestion.innerHTML = `<strong>生成失败</strong><p>${error.message}</p>`;
    scoreHint.textContent = "请稍后重试";
  } finally {
    generateBtn.disabled = false;
  }
}

function renderScoreDimensions(scores) {
  const dimensionMap = {
    boundary: { name: "边界感", icon: "🛡️", color: "#3d8b72" },
    emotional_stability: { name: "情绪稳定", icon: "🧘", color: "#5276a6" },
    relaxation: { name: "松弛感", icon: "😌", color: "#d19b31" },
    sincerity: { name: "真诚度", icon: "💎", color: "#d36b55" },
    pleasing: { name: "讨好程度", icon: "🤝", color: "#7b68ee" },
    pressure: { name: "社交压迫感", icon: "😰", color: "#ff6b6b" },
    confidence: { name: "自信度", icon: "💪", color: "#00ced1" },
  };
  
  let html = '<div class="score-dimensions">';
  Object.entries(scores).forEach(([key, value]) => {
    const dim = dimensionMap[key];
    if (dim) {
      const isInverse = key === "pleasing" || key === "pressure";
      const displayValue = isInverse ? 100 - value : value;
      const bgColor = isInverse && value > 60 ? "#ffe5e5" : "#e8f2ee";
      const textColor = isInverse && value > 60 ? "#d36b55" : dim.color;
      html += `
        <div class="dimension-item">
          <span class="dimension-icon">${dim.icon}</span>
          <span class="dimension-name">${dim.name}</span>
          <div class="dimension-bar-container">
            <div class="dimension-bar-bg" style="background: ${bgColor};">
              <div class="dimension-bar-fill" style="width: ${displayValue}%; background: ${textColor};"></div>
            </div>
          </div>
          <span class="dimension-value" style="color: ${textColor};">${displayValue}</span>
        </div>
      `;
    }
  });
  html += '</div>';
  return html;
}

async function scoreAiAnswer() {
  const answer = answerInput.value.trim();
  if (!state.aiScene || !answer) {
    scoreHint.textContent = "先生成题目，并写下你的回复";
    return;
  }

  scoreBtn.disabled = true;
  scoreHint.textContent = "正在评分...";
  try {
    const data = await postJson("/api/score-answer", { scene: state.aiScene, answer });
    const result = data.result;
    state.anxiety = clamp(state.anxiety + result.stress);
    state.overthink = clamp(state.overthink + result.overthink);
    state.courage = clamp(state.courage + result.courage);
    state.totalPracticeCount++;
    userData.todayPracticeCount++;
    
    userData.lastAnxiety = state.anxiety;
    userData.lastOverthink = state.overthink;
    userData.lastCourage = state.courage;
    userData.lastConfidence = Math.round((state.courage * 0.6 + (100 - state.anxiety) * 0.4));
    userData.lastExpression = Math.round((state.courage * 0.5 + (100 - state.overthink) * 0.5));

    const expGained = Math.floor(result.total / 5);
    addExp(expGained);
    
    animateAnxietyChange(result.stress);
    animateCourageChange(result.courage);
    
    const isGoodResponse = result.total >= 70;
    showEncouragementAnimation(isGoodResponse);

    if (!userData.dailyMissions[1]) {
      completeMission(1);
    }

    const scoreHtml = renderScoreDimensions(result.scores);

    addHistory({
      scene: state.aiScene.title,
      level: result.level,
      skill: state.aiScene.skill,
      feedback: `${result.feedback}`,
      scoreHtml: scoreHtml,
      betterAnswer: result.betterAnswer,
      score: result.total,
      anxiety: result.stress,
      overthink: result.overthink,
      courage: result.courage,
      exp: expGained,
    });
    scoreHint.textContent = result.source === "ai" ? "在线 AI 已评分" : "本地模拟 AI 已评分";
  } catch (error) {
    scoreHint.textContent = error.message;
  } finally {
    scoreBtn.disabled = false;
  }
}

function resetPractice() {
  state.activeScene = scenes[0];
  state.aiScene = null;
  state.anxiety = 75;
  state.overthink = 65;
  state.courage = 35;
  state.history = [];
  state.retryCount = 0;
  $("#reportPractice").textContent = "还没开始";
  $("#reportLevel").textContent = "待生成";
  $("#reportSkill").textContent = "选择一个场景开始";
  reportScore.textContent = "暂无";
  feedbackBox.innerHTML = "<strong>💡 这里不是考试</strong><p>你只是在练习把想法说得更清楚一点。说错了没关系，尴尬是允许的！</p><p>练习次数越多，焦虑值越低~</p>";
  historyList.innerHTML = "";
  aiQuestion.innerHTML = "<strong>等待生成</strong><p>选择一个主题，让 AI 给你一个新的社交小场景。</p>";
  answerInput.value = "";
  generateBtn.textContent = "生成问题";
  scoreBtn.disabled = true;
  scoreHint.textContent = "生成题目后即可作答";
  render();
}

function render() {
  renderMeters();
  if (state.mode === "fixed") {
    renderScenes();
    renderStage();
  }
}

function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      document.querySelectorAll(".tab-panel").forEach(panel => {
        panel.classList.add("hidden");
      });
      document.getElementById(`${targetTab}-panel`).classList.remove("hidden");
    });
  });
}

$("#fixedModeBtn").addEventListener("click", () => showMode("fixed"));
$("#aiModeBtn").addEventListener("click", () => showMode("ai"));
$("#homeBtn").addEventListener("click", () => showMode("start"));
$("#resetBtn").addEventListener("click", resetPractice);

const retryBtn = document.getElementById("retryBtn");
if (retryBtn) {
  retryBtn.addEventListener("click", () => {
    state.retryCount++;
    renderStage();
    const feedbackArea = document.querySelector('.feedback-section');
    if (feedbackArea) {
      feedbackArea.innerHTML = `
        <div class="retry-encouragement">
          <span class="retry-icon">💪</span>
          <p>重新开始！</p>
          <p class="retry-count">这是你第 ${state.retryCount} 次尝试</p>
        </div>
      `;
    }
    showToast("重新开始！继续加油 💪");
  });
}

generateBtn.addEventListener("click", generateAiScene);
scoreBtn.addEventListener("click", scoreAiAnswer);
document.getElementById("claimBtn").addEventListener("click", claimDailyReward);
document.getElementById("feedBtn").addEventListener("click", feedPartner);
document.getElementById("talkBtn").addEventListener("click", talkPartner);
document.getElementById("playBtn").addEventListener("click", playPartner);

let currentCompanion = COMPANIONS.gentle_senior;

function createParticles() {
  const container = document.getElementById("particleContainer");
  if (!container) return;
  
  const particleCount = 20;
  const colors = ['#667eea', '#764ba2', '#f093fb', '#c471ed', '#8b5cf6', '#4facfe', '#00f2fe'];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 6 + Math.random() * 8;
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = 15 + Math.random() * 15;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, ${color}, transparent);
      left: ${left}%;
      animation-delay: -${delay}s;
      animation-duration: ${duration}s;
    `;
    
    container.appendChild(particle);
  }
}

function initTypingAnimation(element, text, speed = 50) {
  if (!element) return;
  
  element.innerHTML = "";
  let index = 0;
  
  const typingDiv = document.createElement("div");
  typingDiv.className = "typing-indicator";
  typingDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
  element.appendChild(typingDiv);
  
  function typeWriter() {
    if (index < text.length) {
      typingDiv.remove();
      element.innerHTML = text.substring(0, index + 1);
      element.appendChild(typingDiv);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      element.textContent = text;
    }
  }
  
  typeWriter();
}

function addMessage(text, isUser = false) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${isUser ? '🌸' : currentCompanion.avatar}</div>
    <div class="message-bubble">
      <p>${text}</p>
    </div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const chatInput = document.getElementById("chatInput");
  const text = chatInput.value.trim();
  
  if (!text) return;
  
  addMessage(text, true);
  chatInput.value = "";
  
  setTimeout(() => {
    const responses = [
      "我理解你的想法~",
      "继续说，我在听呢！",
      "嗯嗯，我明白啦~",
      "有意思，继续分享吧！",
      "谢谢你愿意跟我分享！",
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    addMessage(response);
  }, 800);
}

function getEncouragement() {
  const messages = currentCompanion.encouragement;
  const message = messages[Math.floor(Math.random() * messages.length)];
  addMessage(message);
}

function getMoodAnalysis() {
  const messages = currentCompanion.moodAnalysis;
  const message = messages[Math.floor(Math.random() * messages.length)];
  addMessage(message);
}

function getChatAdvice() {
  const messages = currentCompanion.chatAdvice;
  const message = messages[Math.floor(Math.random() * messages.length)];
  addMessage(message);
}

function getDailyTask() {
  const messages = currentCompanion.dailyTasks;
  const message = messages[Math.floor(Math.random() * messages.length)];
  addMessage(message);
}

function selectCompanion(companionId) {
  currentCompanion = COMPANIONS[companionId];
  updateCompanionDisplay();
  closeCharacterModal();
  
  addMessage(`嗨！我是${currentCompanion.name}，以后由我来陪伴你吧！`);
}

function updateCompanionDisplay() {
  document.getElementById("companionAvatar").textContent = currentCompanion.avatar;
  document.getElementById("companionName").textContent = currentCompanion.name;
  document.getElementById("companionRole").textContent = currentCompanion.role;
  
  document.querySelectorAll(".message-avatar").forEach(avatar => {
    if (!avatar.parentElement.classList.contains("user-message")) {
      avatar.textContent = currentCompanion.avatar;
    }
  });
}

function openCharacterModal() {
  document.getElementById("characterModal").classList.remove("hidden");
}

function closeCharacterModal() {
  document.getElementById("characterModal").classList.add("hidden");
}

function initCompanionEvents() {
  document.getElementById("changeCompanionBtn").addEventListener("click", openCharacterModal);
  document.getElementById("closeModalBtn").addEventListener("click", closeCharacterModal);
  document.getElementById("sendBtn").addEventListener("click", sendMessage);
  
  document.getElementById("chatInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
  
  document.getElementById("encourageBtn").addEventListener("click", getEncouragement);
  document.getElementById("moodBtn").addEventListener("click", getMoodAnalysis);
  document.getElementById("adviceBtn").addEventListener("click", getChatAdvice);
  document.getElementById("taskBtn").addEventListener("click", getDailyTask);
  
  document.querySelectorAll(".character-card").forEach(card => {
    card.addEventListener("click", () => {
      const companionId = card.dataset.character;
      selectCompanion(companionId);
    });
  });
  
  document.getElementById("characterModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("characterModal")) {
      closeCharacterModal();
    }
  });
}

const voiceState = {
  isRecording: false,
  nervousness: 60,
  fluency: 75,
  speechRate: 120,
  history: [],
  conversationCount: 0,
  totalAnalysis: {
    nervousness: [],
    fluency: [],
    speechRate: [],
    pauseCount: [],
    fillerWords: [],
  },
};

const voicePrompts = [
  "跟我说说今天发生了什么有趣的事情吧~",
  "你最近有什么想分享的吗？",
  "如果遇到一个新朋友，你会怎么介绍自己？",
  "试着描述一下你最喜欢的一本书或电影。",
  "如果你要拒绝别人的请求，你会怎么说？",
  "跟我讲讲你最难忘的一次社交经历。",
];

const habitPatterns = {
  apology: { keywords: ["对不起", "抱歉", "不好意思", "打扰了"], name: "容易道歉", icon: "🙇" },
  conflictAvoid: { keywords: ["算了", "没关系", "随便", "都行"], name: "太怕冲突", icon: "🚫" },
  fastSpeech: { name: "语速快", icon: "⚡" },
  needHiding: { keywords: ["不用了", "没关系", "我自己来"], name: "不敢表达需求", icon: "🤫" },
  selfDeprecation: { keywords: ["我不行", "我不会", "我做不好", "我很差"], name: "经常自我否定", icon: "😔" },
  fillerWords: { keywords: ["那个", "嗯", "呃", "然后", "就是说"], name: "常用填充词", icon: "💬" },
};

function updateVoiceMeters() {
  document.getElementById("nervousnessValue").textContent = voiceState.nervousness;
  document.getElementById("nervousnessBar").style.width = `${voiceState.nervousness}%`;
  document.getElementById("fluencyValue").textContent = voiceState.fluency;
  document.getElementById("fluencyBar").style.width = `${voiceState.fluency}%`;
  document.getElementById("speechRateValue").textContent = voiceState.speechRate;
  document.getElementById("speechRateBar").style.width = `${Math.min(100, voiceState.speechRate / 2)}%`;
}

function showWaveform(active = false) {
  const waveform = document.getElementById("voiceWaveform");
  if (active) {
    waveform.innerHTML = "";
    for (let i = 0; i < 12; i++) {
      const bar = document.createElement("div");
      bar.className = "wave-bar";
      bar.style.height = `${20 + Math.random() * 30}px`;
      bar.style.animationDelay = `${i * 0.08}s`;
      waveform.appendChild(bar);
    }
    waveform.style.display = "flex";
  } else {
    waveform.innerHTML = "";
    waveform.style.display = "none";
  }
}

function updateTimer(displayTime) {
  document.getElementById("recordTimer").textContent = displayTime;
}

function analyzeSpeech(text, duration) {
  const analysis = {
    nervousness: 50,
    fluency: 80,
    speechRate: 120,
    pauseCount: 0,
    fillerWords: 0,
    habits: [],
  };

  const textLength = text.length;
  const wordCount = text.split(/[\s，。！？、]+/).filter(w => w.length > 0).length;
  
  if (duration > 0) {
    analysis.speechRate = Math.round((wordCount / duration) * 60);
  }

  const avgPauseDuration = 0.8;
  const pauseThreshold = 0.5;
  analysis.pauseCount = Math.floor(wordCount * avgPauseDuration / pauseThreshold);

  const fillerCount = habitPatterns.fillerWords.keywords.filter(k => text.includes(k)).length;
  analysis.fillerWords = fillerCount;

  let nervousScore = 50;
  if (analysis.speechRate > 150) nervousScore += 20;
  if (analysis.speechRate < 80) nervousScore += 10;
  if (analysis.pauseCount > wordCount * 0.3) nervousScore += 15;
  if (analysis.fillerWords > 3) nervousScore += 10;
  analysis.nervousness = Math.min(100, nervousScore);

  let fluencyScore = 80;
  if (analysis.pauseCount < wordCount * 0.15) fluencyScore += 15;
  if (analysis.fillerWords === 0) fluencyScore += 10;
  if (analysis.speechRate >= 100 && analysis.speechRate <= 140) fluencyScore += 5;
  analysis.fluency = Math.min(100, fluencyScore);

  for (const [key, pattern] of Object.entries(habitPatterns)) {
    if (key === "fastSpeech") {
      if (analysis.speechRate > 140) {
        analysis.habits.push({ ...pattern, score: Math.min(100, (analysis.speechRate - 140) * 2) });
      }
    } else if (pattern.keywords) {
      const matches = pattern.keywords.filter(k => text.includes(k)).length;
      if (matches > 0) {
        analysis.habits.push({ ...pattern, score: Math.min(100, matches * 30) });
      }
    }
  }

  return analysis;
}

function speak(text) {
  return new Promise((resolve) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.9;
      utterance.onend = resolve;
      utterance.onerror = resolve;
      speechSynthesis.speak(utterance);
    } else {
      setTimeout(resolve, 1000);
    }
  });
}

function addVoiceHistory(text, isUser = false, analysis = null) {
  const historyList = document.getElementById("voiceHistoryList");
  const item = document.createElement("div");
  item.className = `history-item ${isUser ? 'user' : 'bot'}`;
  
  let meta = "";
  if (isUser && analysis) {
    meta = `紧张: ${analysis.nervousness}% | 流畅度: ${analysis.fluency}% | 语速: ${analysis.speechRate}字/分`;
  }
  
  item.innerHTML = `
    <div class="history-text">${text}</div>
    ${meta ? `<div class="history-meta">${meta}</div>` : ''}
  `;
  
  historyList.appendChild(item);
  historyList.scrollTop = historyList.scrollHeight;
}

function generateChatReport() {
  const analysis = voiceState.totalAnalysis;
  
  if (analysis.nervousness.length === 0) {
    showToast("请先进行语音练习！", "warning");
    return;
  }

  const avgNervousness = Math.round(analysis.nervousness.reduce((a, b) => a + b, 0) / analysis.nervousness.length);
  const avgFluency = Math.round(analysis.fluency.reduce((a, b) => a + b, 0) / analysis.fluency.length);
  const avgSpeechRate = Math.round(analysis.speechRate.reduce((a, b) => a + b, 0) / analysis.speechRate.length);
  const avgPauseCount = Math.round(analysis.pauseCount.reduce((a, b) => a + b, 0) / analysis.pauseCount.length);

  let detectedHabits = [];
  
  const allTexts = voiceState.history.map(h => h.text).join("");
  
  for (const [key, pattern] of Object.entries(habitPatterns)) {
    if (key === "fastSpeech") {
      if (avgSpeechRate > 140) {
        detectedHabits.push({ ...pattern, score: Math.min(100, (avgSpeechRate - 140) * 2) });
      }
    } else if (pattern.keywords) {
      const matches = pattern.keywords.filter(k => allTexts.includes(k)).length;
      if (matches > 0) {
        detectedHabits.push({ ...pattern, score: Math.min(100, matches * 30) });
      }
    }
  }

  let summaryText = "";
  let tips = [];
  
  if (avgNervousness > 70) {
    summaryText = "你在交流时可能感到比较紧张。多加练习会帮助你变得更放松！";
    tips.push("练习深呼吸，说话前先停顿一秒");
    tips.push("试着放慢语速，给自己思考的时间");
    tips.push("可以先在心里打个草稿再开口");
  } else if (avgNervousness > 50) {
    summaryText = "你的紧张程度适中，继续练习会更加自然！";
    tips.push("注意保持平稳的语调");
    tips.push("多做眼神交流（即使是对着空气练习）");
  } else {
    summaryText = "你看起来很放松，继续保持！";
    tips.push("尝试更丰富的表达方式");
    tips.push("可以加入一些肢体语言");
  }

  if (avgFluency < 70) {
    tips.push("减少使用填充词，如'那个'、'嗯'");
    tips.push("练习连贯表达，避免过多停顿");
  }

  if (avgSpeechRate > 150) {
    tips.push("试着放慢语速，让对方更好理解");
  } else if (avgSpeechRate < 90) {
    tips.push("可以适当加快语速，显得更自信");
  }

  const reportHtml = `
    <div class="report-section">
      <h3>📊 综合评分</h3>
      <div class="report-score-grid">
        <div class="report-score-item">
          <span class="score-value">${avgNervousness}%</span>
          <span class="score-label">紧张程度</span>
        </div>
        <div class="report-score-item">
          <span class="score-value">${avgFluency}%</span>
          <span class="score-label">表达流畅度</span>
        </div>
        <div class="report-score-item">
          <span class="score-value">${avgSpeechRate}</span>
          <span class="score-label">平均语速</span>
        </div>
        <div class="report-score-item">
          <span class="score-value">${avgPauseCount}</span>
          <span class="score-label">平均停顿次数</span>
        </div>
      </div>
    </div>
    
    <div class="report-section">
      <h3>🔍 你的聊天习惯</h3>
      ${detectedHabits.length > 0 ? detectedHabits.map(h => `
        <div class="report-habit-item">
          <span class="habit-icon">${h.icon}</span>
          <span class="habit-text">${h.name}</span>
          <span class="habit-score">${h.score}%</span>
        </div>
      `).join("") : `<p style="color: var(--green);">暂未检测到明显的聊天习惯模式，继续练习吧！</p>`}
    </div>
    
    <div class="report-summary">
      <p>${summaryText}</p>
    </div>
    
    <div class="report-tips">
      <h4>💡 改进建议</h4>
      <ul>
        ${tips.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </div>
  `;

  document.getElementById("reportContent").innerHTML = reportHtml;
  document.getElementById("reportModal").classList.remove("hidden");
}

async function startVoiceRecording() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    showToast("您的浏览器不支持语音识别功能", "warning");
    return;
  }

  const recordBtn = document.getElementById("recordBtn");
  const recordStatus = document.getElementById("recordStatus");
  const transcriptContent = document.getElementById("transcriptContent");
  const analysisContent = document.getElementById("analysisContent");

  if (voiceState.isRecording) {
    voiceState.isRecording = false;
    recordBtn.classList.remove("recording");
    recordBtn.innerHTML = `<span class="record-icon">🎤</span><span class="record-text">开始录音</span>`;
    recordStatus.textContent = "录音结束，正在分析...";
    showWaveform(false);
    window.recognition?.stop();
    return;
  }

  voiceState.isRecording = true;
  recordBtn.classList.add("recording");
  recordBtn.innerHTML = `<span class="record-icon">⏹️</span><span class="record-text">停止录音</span>`;
  recordStatus.textContent = "正在录音，说话吧~";
  showWaveform(true);
  transcriptContent.textContent = "正在识别...";
  analysisContent.textContent = "等待录音完成";

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new Recognition();
  window.recognition = recognition;
  
  recognition.lang = 'zh-CN';
  recognition.interimResults = true;
  recognition.continuous = true;

  let startTime = Date.now();
  let finalTranscript = "";
  let timerInterval;
  let elapsedTime = 0;

  timerInterval = setInterval(() => {
    elapsedTime++;
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    updateTimer(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
  }, 1000);

  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    transcriptContent.textContent = finalTranscript + interimTranscript;
  };

  recognition.onend = async () => {
    clearInterval(timerInterval);
    voiceState.isRecording = false;
    
    if (finalTranscript.trim()) {
      const duration = (Date.now() - startTime) / 1000;
      const analysis = analyzeSpeech(finalTranscript, duration);

      voiceState.nervousness = analysis.nervousness;
      voiceState.fluency = analysis.fluency;
      voiceState.speechRate = analysis.speechRate;
      
      voiceState.totalAnalysis.nervousness.push(analysis.nervousness);
      voiceState.totalAnalysis.fluency.push(analysis.fluency);
      voiceState.totalAnalysis.speechRate.push(analysis.speechRate);
      voiceState.totalAnalysis.pauseCount.push(analysis.pauseCount);
      voiceState.totalAnalysis.fillerWords.push(analysis.fillerWords);

      updateVoiceMeters();
      addVoiceHistory(finalTranscript, true, analysis);

      let analysisText = `
        <strong>紧张程度：</strong>${analysis.nervousness}%<br>
        <strong>表达流畅度：</strong>${analysis.fluency}%<br>
        <strong>语速：</strong>${analysis.speechRate} 字/分钟<br>
        <strong>检测到的习惯：</strong>${analysis.habits.length > 0 ? analysis.habits.map(h => h.name).join('、') : '无'}
      `;
      analysisContent.innerHTML = analysisText;

      document.getElementById("generateReportBtn").disabled = false;

      const randomPrompt = voicePrompts[Math.floor(Math.random() * voicePrompts.length)];
      document.getElementById("voicePromptText").textContent = randomPrompt;
      
      addVoiceHistory(randomPrompt, false);
      await speak(randomPrompt);
    } else {
      recordStatus.textContent = "没有检测到语音，请重试";
    }

    recordBtn.classList.remove("recording");
    recordBtn.innerHTML = `<span class="record-icon">🎤</span><span class="record-text">开始录音</span>`;
    showWaveform(false);
    updateTimer("00:00");
  };

  recognition.onerror = () => {
    clearInterval(timerInterval);
    voiceState.isRecording = false;
    recordStatus.textContent = "录音出错，请重试";
    recordBtn.classList.remove("recording");
    recordBtn.innerHTML = `<span class="record-icon">🎤</span><span class="record-text">开始录音</span>`;
    showWaveform(false);
    updateTimer("00:00");
  };

  recognition.start();
}

function showVoiceMode() {
  startScreen.classList.add("hidden");
  practiceShell.classList.add("hidden");
  reportPanel.classList.add("hidden");
  document.getElementById("voiceShell").classList.remove("hidden");
  
  voiceState.history = [];
  voiceState.conversationCount = 0;
  document.getElementById("voiceHistoryList").innerHTML = "";
  document.getElementById("generateReportBtn").disabled = true;
  
  const randomPrompt = voicePrompts[Math.floor(Math.random() * voicePrompts.length)];
  document.getElementById("voicePromptText").textContent = randomPrompt;
  
  speak(randomPrompt);
  addVoiceHistory(randomPrompt, false);
  
  updateVoiceMeters();
}

function resetVoiceMode() {
  voiceState.nervousness = 60;
  voiceState.fluency = 75;
  voiceState.speechRate = 120;
  voiceState.history = [];
  voiceState.conversationCount = 0;
  voiceState.totalAnalysis = {
    nervousness: [],
    fluency: [],
    speechRate: [],
    pauseCount: [],
    fillerWords: [],
  };
  
  document.getElementById("voiceHistoryList").innerHTML = "";
  document.getElementById("transcriptContent").textContent = "等待录音...";
  document.getElementById("analysisContent").textContent = "完成录音后显示分析结果";
  document.getElementById("generateReportBtn").disabled = true;
  updateVoiceMeters();
  
  const randomPrompt = voicePrompts[Math.floor(Math.random() * voicePrompts.length)];
  document.getElementById("voicePromptText").textContent = randomPrompt;
  
  speak(randomPrompt);
  addVoiceHistory(randomPrompt, false);
}

function closeReportModal() {
  document.getElementById("reportModal").classList.add("hidden");
}

function renderDailyReport() {
  const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
  document.getElementById("reportDate").textContent = today;
  
  const anxiety = userData.lastAnxiety || 75;
  const overthink = userData.lastOverthink || 65;
  const courage = userData.lastCourage || 35;
  const confidence = userData.lastConfidence || 50;
  const expression = userData.lastExpression || 60;
  const avoidCount = userData.todayAvoidCount || 0;
  
  document.getElementById("todayAnxiety").textContent = anxiety;
  document.getElementById("todayOverthink").textContent = overthink;
  document.getElementById("todayCourage").textContent = courage;
  document.getElementById("todayConfidence").textContent = confidence;
  document.getElementById("todayExpression").textContent = expression;
  document.getElementById("todayAvoid").textContent = avoidCount;
  
  const lastStats = userData.dailyStats[userData.dailyStats.length - 1];
  if (lastStats) {
    document.getElementById("anxietyTrend").textContent = anxiety < lastStats.anxiety ? `${lastStats.anxiety - anxiety}` : `+${anxiety - lastStats.anxiety}`;
    document.getElementById("anxietyTrend").className = anxiety < lastStats.anxiety ? 'metric-trend positive' : 'metric-trend';
    
    document.getElementById("overthinkTrend").textContent = overthink < lastStats.overthink ? `${lastStats.overthink - overthink}` : `+${overthink - lastStats.overthink}`;
    document.getElementById("overthinkTrend").className = overthink < lastStats.overthink ? 'metric-trend positive' : 'metric-trend';
    
    document.getElementById("courageTrend").textContent = `+${courage - lastStats.courage}`;
    document.getElementById("courageTrend").className = 'metric-trend positive';
  }
  
  renderBehaviorAnalysis();
  renderGrowthTips();
}

function renderBehaviorAnalysis() {
  const behaviorDiv = document.getElementById("behaviorAnalysis");
  const patterns = [];
  
  if (userData.todayAvoidCount > 2) {
    patterns.push({ icon: "🚫", text: "今天有较多回避行为，尝试更勇敢地表达自己吧！" });
  }
  
  if (userData.todayPracticeCount >= 5) {
    patterns.push({ icon: "⭐", text: "练习很积极！继续保持这个节奏~" });
  }
  
  if (userData.lastAnxiety > 70) {
    patterns.push({ icon: "😰", text: "焦虑值偏高，建议尝试一些轻松的场景练习" });
  }
  
  if (userData.lastConfidence > 70) {
    patterns.push({ icon: "💪", text: "自信指数很不错！可以尝试更有挑战的场景" });
  }
  
  if (patterns.length === 0) {
    patterns.push({ icon: "🌱", text: "刚开始练习，继续加油！每一步都是成长" });
  }
  
  behaviorDiv.innerHTML = patterns.map(p => `<p>${p.icon} ${p.text}</p>`).join("");
}

function renderGrowthTips() {
  const tipsDiv = document.getElementById("growthTips");
  const tips = [];
  
  if (userData.todayPracticeCount < 3) {
    tips.push("今天练习次数较少，建议完成3次以上效果更佳");
  }
  
  if (userData.todayAvoidCount > 0) {
    tips.push("尝试在下一次练习中选择更直接的表达方式");
  }
  
  if (userData.streakDays > 0) {
    tips.push(`连续打卡${userData.streakDays}天！坚持就是胜利 💪`);
  }
  
  tips.push("语音练习可以帮助你更好地发现自己的表达习惯");
  
  tipsDiv.innerHTML = `<ul>${tips.map(t => `<li>${t}</li>`).join("")}</ul>`;
}

function renderWeeklyReport() {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const weekAgoStr = weekAgo.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
  const todayStr = now.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
  
  document.getElementById("weekDateRange").textContent = `${weekAgoStr} - ${todayStr}`;
  
  const weekStats = userData.dailyStats.slice(-7);
  
  let totalPractice = 0;
  let totalExp = 0;
  weekStats.forEach(day => {
    totalPractice += day.practiceCount || 0;
    totalExp += day.expGained || 0;
  });
  totalPractice += userData.todayPracticeCount;
  totalExp += userData.todayExpGained || 0;
  
  document.getElementById("weekPracticeCount").textContent = totalPractice;
  document.getElementById("weekExpGained").textContent = totalExp;
  document.getElementById("weekStreak").textContent = userData.streakDays;
  
  renderChart("anxietyChart", weekStats, "anxiety", "焦虑");
  renderChart("courageChart", weekStats, "courage", "勇气");
  renderChart("expressionChart", weekStats, "expressionScore", "表达");
  
  renderWeeklyInsights(weekStats);
}

function renderChart(containerId, stats, key, label) {
  const container = document.getElementById(containerId);
  if (!container || stats.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #999;">暂无数据</p>';
    return;
  }
  
  const values = stats.map(s => s[key] || 50);
  const maxVal = 100;
  
  container.innerHTML = stats.map((s, i) => {
    const value = values[i];
    const height = (value / maxVal) * 80;
    const date = new Date(s.date);
    const dayLabel = date.toLocaleDateString('zh-CN', { weekday: 'short' }).replace('周', '');
    return `
      <div class="chart-bar">
        <div class="bar-fill" style="height: ${height}px;" data-value="${value}"></div>
        <span class="bar-label">${dayLabel}</span>
      </div>
    `;
  }).join('');
}

function renderWeeklyInsights(stats) {
  const insightsDiv = document.getElementById("weeklyInsights");
  const insights = [];
  
  if (stats.length >= 5) {
    const firstHalf = stats.slice(0, Math.floor(stats.length / 2));
    const secondHalf = stats.slice(Math.floor(stats.length / 2));
    
    const avgFirstAnxiety = firstHalf.reduce((a, b) => a + (b.anxiety || 75), 0) / firstHalf.length;
    const avgSecondAnxiety = secondHalf.reduce((a, b) => a + (b.anxiety || 75), 0) / secondHalf.length;
    
    if (avgSecondAnxiety < avgFirstAnxiety) {
      insights.push({ icon: "📉", text: `本周焦虑指数下降了${Math.round(avgFirstAnxiety - avgSecondAnxiety)}点，继续保持！` });
    } else {
      insights.push({ icon: "💪", text: "本周焦虑略有波动，这是正常的，继续练习会越来越好" });
    }
    
    const avgFirstCourage = firstHalf.reduce((a, b) => a + (b.courage || 35), 0) / firstHalf.length;
    const avgSecondCourage = secondHalf.reduce((a, b) => a + (b.courage || 35), 0) / secondHalf.length;
    
    if (avgSecondCourage > avgFirstCourage) {
      insights.push({ icon: "🚀", text: `本周勇气值提升了${Math.round(avgSecondCourage - avgFirstCourage)}点，你正在变得更强！` });
    }
  }
  
  const totalPractice = stats.reduce((a, b) => a + (b.practiceCount || 0), 0) + userData.todayPracticeCount;
  if (totalPractice >= 20) {
    insights.push({ icon: "🏆", text: `本周练习了${totalPractice}次，已经很努力了！` });
  } else if (totalPractice >= 10) {
    insights.push({ icon: "👍", text: `本周练习了${totalPractice}次，再接再厉！` });
  }
  
  if (insights.length === 0) {
    insights.push({ icon: "🌱", text: "开始记录你的成长轨迹吧！坚持练习解锁更多洞察" });
  }
  
  insightsDiv.innerHTML = insights.map(i => `<p>${i.icon} ${i.text}</p>`).join('');
}

function initReportEvents() {
  const reportTabs = document.querySelectorAll(".report-tab");
  
  reportTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      reportTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const reportType = tab.dataset.report;
      
      if (reportType === "daily") {
        document.getElementById("dailyReportContent").classList.remove("hidden");
        document.getElementById("weeklyReportContent").classList.add("hidden");
        renderDailyReport();
      } else {
        document.getElementById("dailyReportContent").classList.add("hidden");
        document.getElementById("weeklyReportContent").classList.remove("hidden");
        renderWeeklyReport();
      }
    });
  });
  
  document.querySelector('[data-tab="report"]').addEventListener("click", () => {
    setTimeout(() => {
      renderDailyReport();
    }, 100);
  });
}

function initVoiceEvents() {
  document.getElementById("voiceModeBtn").addEventListener("click", showVoiceMode);
  document.getElementById("voiceHomeBtn").addEventListener("click", () => showMode("start"));
  document.getElementById("voiceResetBtn").addEventListener("click", resetVoiceMode);
  document.getElementById("recordBtn").addEventListener("click", startVoiceRecording);
  document.getElementById("generateReportBtn").addEventListener("click", generateChatReport);
  document.getElementById("closeReportModalBtn").addEventListener("click", closeReportModal);
  
  document.getElementById("reportModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("reportModal")) {
      closeReportModal();
    }
  });
}

initTabs();
initCompanionEvents();
initVoiceEvents();
initReportEvents();

function initLandingPage() {
  document.body.classList.add("landing-mode");
  
  const enterBtn = document.getElementById("enterAppBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      enterBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        enterBtn.style.transform = "";
        completeWelcome();
        showMode("start");
        document.body.classList.remove("landing-mode");
      }, 200);
    });
  }
  
  const aiMessages = [
    "今天也不用强迫自己变外向。",
    "你已经比昨天更勇敢一点了。",
    "表达真实的自己，就已经很好了。",
    "慢一点也没关系，社交不需要速度。",
    "你的感受很重要，不需要压抑。",
    "今天也在认真练习呢。",
    "每个人都有属于自己的节奏。",
    "你已经比想象中更棒了。",
    "不必讨好所有人，做好自己就够了。",
    "今天的你，比昨天更接纳自己了。",
  ];
  
  const chatText = document.getElementById("aiChatText");
  const typingIndicator = document.querySelector(".chat-typing-indicator");
  
  if (chatText && typingIndicator) {
    let messageIndex = 0;
    
    function typeMessage() {
      const message = aiMessages[messageIndex];
      chatText.innerHTML = '<span class="chat-cursor"></span>';
      typingIndicator.style.display = "none";
      
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < message.length) {
          chatText.innerHTML = message.substring(0, charIndex + 1) + '<span class="chat-cursor"></span>';
          charIndex++;
        } else {
          clearInterval(typeInterval);
          chatText.innerHTML = message;
          
          setTimeout(() => {
            messageIndex = (messageIndex + 1) % aiMessages.length;
            typingIndicator.style.display = "inline-flex";
            chatText.innerHTML = '<span class="chat-cursor"></span>';
            setTimeout(typeMessage, 1000);
          }, 4000);
        }
      }, 80);
    }
    
    setTimeout(typeMessage, 2000);
  }
  
  const energyValue = document.getElementById("landingEnergy");
  if (energyValue) {
    const baseEnergy = 60 + Math.floor(Math.random() * 20);
    energyValue.textContent = baseEnergy;
    
    const cardDescriptions = [
      "适合低压力社交，慢慢来",
      "状态不错，可以尝试新场景",
      "今天适合轻度练习",
      "社交能量充沛的一天",
      "给自己一些耐心和空间",
    ];
    
    const energyCard = energyValue.closest(".ai-card");
    if (energyCard) {
      const descriptionEl = energyCard.querySelector(".card-description");
      if (descriptionEl) {
        descriptionEl.textContent = cardDescriptions[Math.floor(Math.random() * cardDescriptions.length)];
      }
    }
  }
  
  const aiInsights = [
    { trait: "习惯性共情", desc: "你总是先考虑别人的感受" },
    { trait: "内向敏感型", desc: "你对细节有很强的感知力" },
    { trait: "深度思考者", desc: "你在开口前会仔细考虑" },
    { trait: "真诚表达者", desc: "你重视真实和有意义的交流" },
  ];
  
  const insightCard = document.querySelector(".ai-card:nth-child(2) .card-value");
  if (insightCard) {
    const randomInsight = aiInsights[Math.floor(Math.random() * aiInsights.length)];
    insightCard.textContent = randomInsight.trait;
    
    const insightCardEl = insightCard.closest(".ai-card");
    if (insightCardEl) {
      const descriptionEl = insightCardEl.querySelector(".card-description");
      if (descriptionEl) {
        descriptionEl.textContent = randomInsight.desc;
      }
    }
  }
  
  const growthCard = document.querySelector(".ai-card:nth-child(3) .card-value");
  if (growthCard) {
    const growthPercent = 5 + Math.floor(Math.random() * 15);
    growthCard.textContent = `+${growthPercent}%`;
    
    const growthMessages = [
      "今天比昨天更敢表达了一点",
      "你在慢慢建立社交自信",
      "每一次练习都是进步",
      "你的成长速度很稳定",
      "继续保持这个节奏",
    ];
    
    const growthCardEl = growthCard.closest(".ai-card");
    if (growthCardEl) {
      const descriptionEl = growthCardEl.querySelector(".card-description");
      if (descriptionEl) {
        descriptionEl.textContent = growthMessages[Math.floor(Math.random() * growthMessages.length)];
      }
    }
  }
}

if (isFirstTimeUser || userData.isNewUser) {
  initLandingPage();
  showMode("landing");
} else {
  showMode("start");
}