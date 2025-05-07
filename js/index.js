// 情感故事时间轴数据
const timelineData = [
    {
        date: "初中时期",
        title: "懵懂的青春",
        description: "从小就被父母教育要好好学习，不知道喜欢是什么，不知道什么是爱。父母喜欢拿我们做对比，渐渐与他们渐行渐远。"
    },
    {
        date: "高一时期",
        title: "第一次心动",
        description: "遇到了一个女孩，她打乱了我的生活和思绪。当我和她被分到一组时，既高兴又害怕。她让我明白了喜欢是什么，分享欲是什么。<span class='emoji'>😊</span>"
    },
    {
        date: "高一时期",
        title: "心碎的发现",
        description: "开学时得知她有一个不负责任的父亲，一个将近破碎的家，故而辍学了。我不知道她有没有喜欢过我，只知道自己喜欢上了她。<span class='emoji'>😢</span>"
    },
    {
        date: "高三时期",
        title: "新的开始",
        description: "距离高考还有365天，进入了一个新的班级，结识了许多朋友。其中有两位从高一至高三的久时朋友，他们人很好。<span class='emoji'>✌️</span>"
    },
    {
        date: "高三时期",
        title: "意外的喜欢",
        description: "从女生闲言碎语中得知有人喜欢我。她喜欢给我捎零食，我拒绝不过别人的盛情。心里明白，可做朋友，但其他的就算了。<span class='emoji'>🤔</span>"
    },
    {
        date: "高三时期",
        title: "面熟的朋友",
        description: "认识了一位面熟的朋友，气质和性格都像高一时的那个女孩。我们成为了同桌，她喜欢听歌，又时而小打小闹。<span class='emoji'>🌸</span>"
    },
    {
        date: "高考后",
        title: "复杂的情感",
        description: "高考结束，该决裂的人早已决裂！而她闯入了我的世界，让我再次体会到了那种感觉。她喜欢找我打游戏、聊天，但我们保持着安全距离。<span class='emoji'>💕</span>"
    },
    {
        date: "最近",
        title: "勇敢的表达",
        description: "既高兴又害怕，不知道怎么回消息。刷抖音看到你在线，悬着的心放下了，但也不敢打招呼。所以勇敢地写下这些心里话。<span class='emoji'>💌</span>"
    }
];

// 其他主题数据
const themeData = {
    emotion: timelineData, // 默认情感主题
    friendship: [
        {
            date: "初中时期",
            title: "最初的友谊",
            description: "那时候我们还不懂得什么是真正的友谊，只是单纯地一起玩耍、学习。记得每天放学后和小伙伴们一起踢足球的快乐时光。<span class='emoji'>⚽</span>"
        },
        {
            date: "高一时期",
            title: "形影不离",
            description: "遇到了志同道合的朋友，我们一起学习、一起吃饭、一起参加社团活动。那段时光因为有他们的陪伴而变得特别美好。<span class='emoji'>👬</span>"
        },
        {
            date: "高二时期",
            title: "友谊的考验",
            description: "因为一次误会，和最好的朋友产生了隔阂。经过长时间的冷战，最终我们敞开心扉，友谊变得更加坚固。<span class='emoji'>🤝</span>"
        },
        {
            date: "高三时期",
            title: "并肩作战",
            description: "备战高考的日子里，我们互相鼓励、互相帮助。那些一起熬夜复习、互相提问的日子，成为了最珍贵的回忆。<span class='emoji'>📚</span>"
        },
        {
            date: "大学时期",
            title: "各奔东西",
            description: "毕业后大家去了不同的城市，但我们的友谊并没有因为距离而变淡。每次假期相聚都格外珍惜。<span class='emoji'>✈️</span>"
        },
        {
            date: "工作初期",
            title: "职场友谊",
            description: "进入职场后认识了新的朋友，他们不仅在工作上给予我帮助，也在生活中成为了重要的伙伴。<span class='emoji'>💼</span>"
        },
        {
            date: "现在",
            title: "一生的朋友",
            description: "有些人来了又走，但有几位朋友始终陪伴在身边。感谢他们在我生命中的每一个重要时刻都与我同在。<span class='emoji'>❤️</span>"
        }
    ],
    career: [
        {
            date: "学生时代",
            title: "职业梦想",
            description: "小时候对未来的职业充满幻想，从科学家到老师，从医生到宇航员，每个梦想都那么美好而遥远。<span class='emoji'>🚀</span>"
        },
        {
            date: "高中时期",
            title: "职业规划",
            description: "开始认真思考未来的职业方向，参加了各种职业体验活动，逐渐明确了自己的兴趣所在。<span class='emoji'>🔍</span>"
        },
        {
            date: "大学时期",
            title: "专业选择",
            description: "选择了自己感兴趣的专业，虽然学习过程充满挑战，但每次克服困难都让我更加坚定。<span class='emoji'>🎓</span>"
        },
        {
            date: "实习阶段",
            title: "初入职场",
            description: "第一次真正体验职场生活，学到了许多书本上没有的知识，也认识到了自己的不足。<span class='emoji'>👔</span>"
        },
        {
            date: "第一份工作",
            title: "职场新人",
            description: "正式踏入职场，面对全新的环境和挑战。从最初的不知所措到逐渐适应，这个过程让我成长了许多。<span class='emoji'>💪</span>"
        },
        {
            date: "职业发展",
            title: "能力提升",
            description: "在工作中不断学习新技能，参加专业培训，努力提升自己的专业能力。<span class='emoji'>📈</span>"
        },
        {
            date: "现在",
            title: "职业目标",
            description: "对自己的职业发展有了更清晰的规划，正在朝着既定的目标稳步前进。<span class='emoji'>🎯</span>"
        }
    ],
    family: [
        {
            date: "童年时期",
            title: "温暖的家",
            description: "在父母的呵护下长大，虽然家庭条件一般，但充满了爱与温暖。记得妈妈做的饭菜总是特别香。<span class='emoji'>🏠</span>"
        },
        {
            date: "初中时期",
            title: "叛逆期",
            description: "开始有了自己的想法，常常和父母产生矛盾。现在回想起来，那时的自己太不懂事了。<span class='emoji'>😠</span>"
        },
        {
            date: "高中时期",
            title: "理解父母",
            description: "渐渐理解了父母的辛苦和不易，开始主动分担家务，努力学习不让父母操心。<span class='emoji'>💕</span>"
        },
        {
            date: "大学时期",
            title: "离家求学",
            description: "第一次长时间离开家，才真正体会到家的温暖。每周和父母的视频通话成了最期待的时刻。<span class='emoji'>📱</span>"
        },
        {
            date: "工作初期",
            title: "回报父母",
            description: "拿到第一份工资后，给父母买了礼物。看到他们开心的笑容，我感到无比幸福。<span class='emoji'>🎁</span>"
        },
        {
            date: "现在",
            title: "家的意义",
            description: "越来越理解家的意义，无论遇到什么困难，家人永远是最坚强的后盾。<span class='emoji'>👨‍👩‍👧‍👦</span>"
        }
    ]
};

// DOM元素
const timelineContainer = document.getElementById('timelineContainer');
const toggleAllBtn = document.getElementById('toggleAll');
const changeThemeBtn = document.getElementById('changeTheme');
const launchFireworksBtn = document.getElementById('launchFireworks');
const titleElement = document.getElementById('head');
const seasonEffectsContainer = document.getElementById('seasonEffectsContainer');
const musicPlayer = document.getElementById('musicPlayer');
const fireworksContainer = document.getElementById('fireworksContainer');
const settingsPanel = document.getElementById('settingsPanel');
const settingsButton = document.getElementById('settingsButton');
const closeSettings = document.getElementById('closeSettings');
const loadingOverlay = document.getElementById('loadingOverlay');
const bodyElement = document.body;

// 设置控件
const seasonParticleSize = document.getElementById('seasonParticleSize');
const seasonParticleDensity = document.getElementById('seasonParticleDensity');
const seasonParticleSpeed = document.getElementById('seasonParticleSpeed');
const fireworkSize = document.getElementById('fireworkSize');
const fireworkCount = document.getElementById('fireworkCount');
const fireworkParticles = document.getElementById('fireworkParticles');
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const toggleSeasonBtn = document.getElementById('toggleSeason');

// 主题按钮
const themeEmotionBtn = document.getElementById('themeEmotion');
const themeFriendshipBtn = document.getElementById('themeFriendship');
const themeCareerBtn = document.getElementById('themeCareer');
const themeFamilyBtn = document.getElementById('themeFamily');

// 季节配置
const seasons = [
    {
        name: "winter",
        displayName: "冬季",
        particle: "❄",
        className: "snowflake",
        color: "#b3e0ff",
        interval: 80,
        speed: 8,
        animation: "fall",
        bgColor: "#e6f2ff",
        themeColor: "#4d79ff",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        maxParticles: 150
    },
    {
        name: "spring",
        displayName: "春季",
        particle: "🌸",
        className: "petal",
        color: "#ff66b2",
        interval: 150,
        speed: 8,
        animation: "fallWithTwist",
        bgColor: "#fff5f7",
        themeColor: "#ff66b2",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        maxParticles: 100
    },
    {
        name: "summer",
        displayName: "夏季",
        particle: "💧",
        className: "raindrop",
        color: "#00a8ff",
        interval: 50,
        speed: 3,
        animation: "fallFast",
        bgColor: "#f0fff0",
        themeColor: "#00a8ff",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        maxParticles: 200
    },
    {
        name: "autumn",
        displayName: "秋季",
        particle: "🍂",
        className: "leaf",
        color: "#ff9900",
        interval: 200,
        speed: 6,
        animation: "fallWithDrift",
        bgColor: "#fff8f0",
        themeColor: "#ff9900",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        maxParticles: 80
    }
];

// 状态变量
let currentSeasonIndex = 1;
let seasonInterval = null;
let isDarkMode = false;
let isMusicPlaying = false;
let audio = new Audio(seasons[currentSeasonIndex].music);
let fireworksInterval = null;
let isFireworksActive = false;
let currentTheme = 'emotion';
let lastAnimationTime = 0;
let activeParticles = 0;
let animationFrameId = null;
let activeFireworks = 0;
const maxActiveFireworks = 5; // 同时最多5个烟花

// 效果参数
let currentSeasonParams = {
    size: 15,
    density: 150,
    speed: 5
};

let currentFireworkParams = {
    size: 100,
    count: 20,
    particles: 30
};

// 烟花声音效果
const fireworkSounds = [
    "https://assets.mixkit.co/sfx/preview/mixkit-firework-explosion-1681.mp3",
    "https://assets.mixkit.co/sfx/preview/mixkit-firework-explosion-1682.mp3",
    "https://assets.mixkit.co/sfx/preview/mixkit-firework-explosion-1683.mp3"
];

// 显示加载动画
function showLoading() {
    loadingOverlay.classList.add('active');
    bodyElement.style.opacity = '0.5';
    bodyElement.style.pointerEvents = 'none';
}

// 隐藏加载动画
function hideLoading() {
    setTimeout(() => {
        loadingOverlay.classList.remove('active');
        bodyElement.style.opacity = '1';
        bodyElement.style.pointerEvents = 'auto';
    }, 500);
}

// 渲染时间轴
function renderTimeline(data) {
    showLoading();
    
    setTimeout(() => {
        timelineContainer.innerHTML = '';
        data.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content collapsed">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-description">${item.description}</div>
                </div>
            `;
            timelineContainer.appendChild(timelineItem);
        });

        toggleAllBtn.textContent = "全部展开";

        document.querySelectorAll('.timeline-content').forEach(content => {
            content.addEventListener('click', function() {
                this.classList.toggle('collapsed');
            });
        });

        // 添加动画效果
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        });

        hideLoading();
    }, 300);
}

// 切换主题
function switchTheme(theme) {
    showLoading();
    
    setTimeout(() => {
        currentTheme = theme;
        
        // 更新按钮状态
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`).classList.add('active');
        
        // 根据选择的主题渲染时间轴
        renderTimeline(themeData[theme]);
        
        hideLoading();
    }, 300);
}

// 创建季节效果
function createSeasonEffect(season) {
    clearSeasonEffect();
    stopFireworks();
    
    bodyElement.className = season.name;
    titleElement.style.color = season.themeColor;
    
    document.querySelectorAll('.timeline-dot').forEach(dot => {
        dot.style.backgroundColor = season.themeColor;
    });
    
    document.querySelectorAll('.timeline-item::before').forEach(line => {
        line.style.backgroundColor = season.themeColor;
    });
    
    // 更换季节音乐
    if (isMusicPlaying) {
        audio.pause();
        audio = new Audio(season.music);
        audio.play();
    } else {
        audio = new Audio(season.music);
    }
    
    // 计算粒子间隔时间（基于密度）
    const interval = Math.max(10, 300 - currentSeasonParams.density);
    const maxParticles = season.maxParticles || 100;
    
    let lastParticleTime = 0;
    
    function animateParticles(timestamp) {
        if (!lastParticleTime) lastParticleTime = timestamp;
        const elapsed = timestamp - lastParticleTime;
        
        // 控制粒子生成频率
        if (elapsed > interval && activeParticles < maxParticles) {
            lastParticleTime = timestamp;
            
            const particle = document.createElement('div');
            particle.className = `season-particle ${season.className}`;
            particle.innerHTML = season.particle;
            particle.style.color = season.color;
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = '-20px';
            
            // 应用大小设置
            const size = currentSeasonParams.size * (0.8 + Math.random() * 0.4);
            particle.style.fontSize = size + 'px';
            
            // 应用速度设置
            const speed = currentSeasonParams.speed * (0.8 + Math.random() * 0.4);
            
            if(season.name === "winter") {
                particle.style.opacity = Math.random() * 0.7 + 0.3;
                particle.style.transform = `rotate(${Math.random() * 360}deg)`;
            } else {
                particle.style.opacity = Math.random() * 0.5 + 0.5;
            }
            
            particle.style.animation = `${season.animation} ${speed}s linear forwards`;
            seasonEffectsContainer.appendChild(particle);
            activeParticles++;
            
            setTimeout(() => {
                particle.remove();
                activeParticles--;
            }, speed * 1000 + 1000);
        }
        
        animationFrameId = requestAnimationFrame(animateParticles);
    }
    
    animationFrameId = requestAnimationFrame(animateParticles);
}

// 清除季节效果
function clearSeasonEffect() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    seasonEffectsContainer.innerHTML = '';
    activeParticles = 0;
}

// 创建单个烟花效果
function createSingleFirework() {
    if (activeFireworks >= maxActiveFireworks) return;
    
    activeFireworks++;
    
    // 随机选择底部位置
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;
    
    // 创建烟花主体
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = startX + 'px';
    firework.style.top = startY + 'px';
    firework.style.width = currentFireworkParams.size / 20 + 'px';
    firework.style.height = currentFireworkParams.size / 20 + 'px';
    firework.style.backgroundColor = getRandomColor();
    fireworksContainer.appendChild(firework);
    
    // 创建拖尾效果
    const trailInterval = setInterval(() => {
        if (parseInt(firework.style.top) < window.innerHeight * 0.3) {
            clearInterval(trailInterval);
            return;
        }
        
        const trail = document.createElement('div');
        trail.className = 'firework-trail';
        trail.style.left = firework.style.left;
        trail.style.top = firework.style.top;
        trail.style.backgroundColor = firework.style.backgroundColor;
        fireworksContainer.appendChild(trail);
        
        // 拖尾淡出效果
        setTimeout(() => {
            trail.style.transition = 'opacity 0.5s ease-out';
            trail.style.opacity = '0';
            setTimeout(() => trail.remove(), 500);
        }, 100);
    }, 50);
    
    // 烟花上升动画
    const riseDuration = 1 + Math.random() * 0.5;
    firework.style.transition = `top ${riseDuration}s ease-out`;
    
    setTimeout(() => {
        firework.style.top = (window.innerHeight * 0.3) + 'px';
    }, 10);
    
    // 爆炸效果
    setTimeout(() => {
        // 移除烟花主体
        firework.style.transition = 'opacity 0.2s ease-out';
        firework.style.opacity = '0';
        setTimeout(() => firework.remove(), 200);
        
        // 播放爆炸声音
        playFireworkSound();
        
        // 创建爆炸粒子
        const particleCount = currentFireworkParams.particles;
        const explosionCenterX = parseInt(firework.style.left);
        const explosionCenterY = parseInt(firework.style.top);
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            particle.style.left = explosionCenterX + 'px';
            particle.style.top = explosionCenterY + 'px';
            
            // 随机颜色
            particle.style.backgroundColor = getRandomColor();
            
            // 随机大小
            const size = Math.random() * 6 + 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // 随机方向
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * currentFireworkParams.size + currentFireworkParams.size/2;
            const duration = Math.random() * 1 + 0.5;
            
            // 使用CSS变量传递随机值
            particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
            particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
            
            particle.style.opacity = '1';
            particle.style.animation = `fireworkParticle ${duration}s ease-out forwards`;
            fireworksContainer.appendChild(particle);
            
            // 移除粒子
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }
        
        activeFireworks--;
    }, riseDuration * 1000);
}

// 播放烟花声音
function playFireworkSound() {
    if (!isMusicPlaying) return;
    
    const soundIndex = Math.floor(Math.random() * fireworkSounds.length);
    const sound = new Audio(fireworkSounds[soundIndex]);
    sound.volume = 0.3; // 降低音量避免太吵
    sound.play().catch(e => console.log("无法播放声音:", e));
}

// 获取随机颜色
function getRandomColor() {
    const colors = [
        '#ff0000', '#ff6600', '#ffcc00', 
        '#00ff00', '#00ccff', '#0066ff', 
        '#cc00ff', '#ff00cc', '#ffffff'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 开始烟花表演
function startFireworks() {
    if (isFireworksActive) return;
    
    showLoading();
    
    setTimeout(() => {
        isFireworksActive = true;
        const interval = Math.max(100, 1500 - currentFireworkParams.count * 20);
        
        // 初始烟花
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createSingleFirework(), i * 300);
        }
        
        // 持续发射烟花
        fireworksInterval = setInterval(() => {
            if (isFireworksActive) {
                createSingleFirework();
            }
        }, interval);
        
        hideLoading();
    }, 300);
}

// 停止烟花
function stopFireworks() {
    if (fireworksInterval) {
        clearInterval(fireworksInterval);
        fireworksInterval = null;
    }
    isFireworksActive = false;
    fireworksContainer.innerHTML = '';
    activeFireworks = 0;
}

// 切换季节
function toggleSeason() {
    showLoading();
    
    setTimeout(() => {
        currentSeasonIndex = (currentSeasonIndex + 1) % seasons.length;
        const season = seasons[currentSeasonIndex];
        titleElement.textContent = `心路历程 - ${season.displayName}`;
        createSeasonEffect(season);
        
        hideLoading();
    }, 300);
}

// 切换暗色/亮色模式
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    bodyElement.classList.toggle('dark-mode');
    toggleDarkModeBtn.textContent = isDarkMode ? "切换亮色模式" : "切换暗色模式";
}

// 切换音乐播放状态
function toggleMusic() {
    if (isMusicPlaying) {
        audio.pause();
        musicPlayer.textContent = "🎵";
    } else {
        audio.play().catch(e => console.log("无法播放音乐:", e));
        musicPlayer.textContent = "🔊";
    }
    isMusicPlaying = !isMusicPlaying;
}

// 切换主题效果
function toggleThemeEffect() {
    showLoading();
    
    setTimeout(() => {
        // 切换暗色模式
        toggleDarkMode();
        
        hideLoading();
    }, 300);
}

// 更新季节参数
function updateSeasonParams() {
    currentSeasonParams = {
        size: parseInt(seasonParticleSize.value),
        density: parseInt(seasonParticleDensity.value),
        speed: parseInt(seasonParticleSpeed.value)
    };
    
    if (!isFireworksActive) {
        createSeasonEffect(seasons[currentSeasonIndex]);
    }
}

// 更新烟花参数
function updateFireworkParams() {
    currentFireworkParams = {
        size: parseInt(fireworkSize.value),
        count: parseInt(fireworkCount.value),
        particles: parseInt(fireworkParticles.value)
    };
}

// 事件监听
titleElement.addEventListener('click', toggleSeason);
changeThemeBtn.addEventListener('click', toggleThemeEffect);
launchFireworksBtn.addEventListener('click', startFireworks);
musicPlayer.addEventListener('click', toggleMusic);
settingsButton.addEventListener('click', () => {
    settingsPanel.classList.toggle('show');
});
closeSettings.addEventListener('click', () => {
    settingsPanel.classList.remove('show');
});
toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
toggleSeasonBtn.addEventListener('click', toggleSeason);

// 主题按钮事件
themeEmotionBtn.addEventListener('click', () => switchTheme('emotion'));
themeFriendshipBtn.addEventListener('click', () => switchTheme('friendship'));
themeCareerBtn.addEventListener('click', () => switchTheme('career'));
themeFamilyBtn.addEventListener('click', () => switchTheme('family'));

// 设置控件事件
seasonParticleSize.addEventListener('input', updateSeasonParams);
seasonParticleDensity.addEventListener('input', updateSeasonParams);
seasonParticleSpeed.addEventListener('input', updateSeasonParams);
fireworkSize.addEventListener('input', updateFireworkParams);
fireworkCount.addEventListener('input', updateFireworkParams);
fireworkParticles.addEventListener('input', updateFireworkParams);

toggleAllBtn.addEventListener('click', function() {
    const allContents = document.querySelectorAll('.timeline-content');
    const isAnyCollapsed = Array.from(allContents).some(content => content.classList.contains('collapsed'));
    
    allContents.forEach(content => {
        if (isAnyCollapsed) {
            content.classList.remove('collapsed');
        } else {
            content.classList.add('collapsed');
        }
    });
    
    toggleAllBtn.textContent = isAnyCollapsed ? "全部折叠" : "全部展开";
});

// 初始渲染
renderTimeline(themeData[currentTheme]);
createSeasonEffect(seasons[currentSeasonIndex]);
