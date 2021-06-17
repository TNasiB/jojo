const jostar = document.getElementById('cact'),
      gender = document.getElementById('dino');

document.addEventListener('keydown', () => {
    jump();
});

function jump() {
    if (gender.classList != "jump") {
        gender.classList.add("jump");
    }
    setTimeout( () => {
        gender.classList.remove("jump");
    }, 1500);
}

let isAlive = setInterval( ()=> {
    let dinoTop = parseInt(window.getComputedStyle(gender).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(jostar).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("U're gay");
    }
}, 10);