cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:hud:setComponentVisible", "radar", true);
cef.emit("game:data:pollPlayerStats", true, 50);

cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    document.getElementById("hprogress").style.width = hp + "%";
    document.getElementById("aprogress").style.width = arm + "%";
    if(weapon == 31) {
        document.getElementById("gun").textContent = `M4`;
    }
    else if(weapon == 24) {
        document.getElementById("gun").textContent = `Deagle`;
    }
    else if(weapon == 30) {
        document.getElementById("gun").textContent = `AK-47`;
    }
    else if(weapon == 25) {
        document.getElementById("gun").textContent = `Shotgun`;
    }
    else if(weapon == 28) {
        document.getElementById('gun').textContent = `Uzi`
    }
    else if(weapon == 32) {
        document.getElementById('gun').textContent = `Tec-9`
    }
    else if(weapon == 33) {
        document.getElementById('gun').textContent = `Rifle`
    }
    else if(weapon == 38) {
        document.getElementById('gun').textContent = `Minigun`
    }
    for(i = 0; i <= 15; i++) {
        if(weapon == i) {
            document.getElementById('gun').textContent = 'Fist'
        }
    }
    document.getElementById("ammo").innerText = `${ammo}`;
    document.getElementById("max-ammo").innerText = `/${max_ammo}`;
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
}) 
