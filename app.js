cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:hud:setComponentVisible", "radar", true);
cef.emit("game:data:pollPlayerStats", true, 50);
cef.emit("data:try", true, 50);

cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    document.querySelector(".hprogress").style.width = hp + "%";
    document.querySelector(".ahprogress").style.width = arm + "%";
    document.getElementById(".gun span").textContent = `${weapon}`;
    document.getElementById(".ammo-counter span:nth-child(1)").innerText = `${ammo}`;
    document.getElementById(".ammo-counter span:nth-child(2)").innerText = `/${max_ammo}`;
});

cef.on("data:success", () => {
    document.querySelector('.success').style.animation = "slide-left 0.9s ease 1"
    setTimeout(() => {
        document.querySelector('.success').style.animation = ""
        document.querySelector('.success').style.opacity = 0
    }, 2000);
}) 

cef.on("data:fail", () => {
    document.querySelector('.fail').style.animation = "slide-left 0.9s ease 1"
    setTimeout(() => {
        document.querySelector('.fail').style.animation = ""
        document.querySelector('.fail').style.opacity = 0
    }, 2000);
}) 
