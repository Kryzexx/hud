/*cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:hud:setComponentVisible", "radar", true);
cef.emit("game:data:pollPlayerStats", true, 50);

cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    document.querySelector(".hprogress").style.width = hp + "%";
    document.querySelector(".ahprogress").style.width = arm + "%";
    document.getElementById(".gun span").textContent = `${weapon}`;
    document.getElementById(".ammo-counter span:nth-child(1)").innerText = `${ammo}`;
    document.getElementById(".ammo-counter span:nth-child(2)").innerText = `/${max_ammo}`;
});


cef.on("data:pool:success", () => {
    document.querySelector('.success').classList.add('anim')
    document.querySelector('.success').style.opacity = 1
    setTimeout(() => {
        document.querySelector('.success').classList.remove('anim')
        document.querySelector('.success').style.opacity = 0
    }, 2000);
}) 

cef.on("data:pool:fail", () => {
    document.querySelector('.fail').classList.add('anim')
    document.querySelector('.fail').style.opacity = 1
    setTimeout(() => {
        document.querySelector('.fail').classList.remove('anim')
        document.querySelector('.fail').style.opacity = 0
    }, 2000);
}) */
