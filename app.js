cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:hud:setComponentVisible", "radar", true);
cef.emit("game:data:pollPlayerStats", true, 50);
cef.emit("pwd:try", true, 50);

cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    document.querySelector(".aprogress").style.width = hp;
    document.querySelector(".hprogress").innerText = arm;
    document.getElementById(".gun span").innerText = `${weapon}`;
    document.getElementById(".ammo-counter span:nth-child(1)").innerText = `${ammo}`;
    document.getElementById(".ammo-counter span:nth-child(2)").innerText = `/${max_ammo}`;
});

cef.on("pwd:success", () => {
    document.querySelector('.success').style.animation = "slide-left 0.9s ease 1"
    setTimeout(() => {
        document.querySelector('.success').style.animation = ""
        document.querySelector('.success').style.opacity = 0
    }, 2000);
}) 

cef.on("pwd:fail", () => {
    document.querySelector('.fail').style.animation = "slide-left 0.9s ease 1"
    setTimeout(() => {
        document.querySelector('.fail').style.animation = ""
        document.querySelector('.fail').style.opacity = 0
    }, 2000);
}) 
