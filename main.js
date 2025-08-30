// ########## menu ##############
const menu = document.querySelector(".menu");
const action = document.querySelector("header .contener nav ul");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
});

/* ########### dark mode & light mode ######### */
const dark = document.querySelector("#dark");
const light = document.querySelector("#light");
const mode = document.querySelector(".mode");

mode.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (!document.body.classList.contains("light")) {
        dark.style.display = "none";
        light.style.display = "inline";
    }
    if (document.body.classList.contains("light")) {
        dark.style.display = "inline";
        light.style.display = "none";
    }
});

// ######### typeWriter ##########
const text = "Front-End Developer";
let i = 0;
let isDeleting = false;
const speed = 100;
const delay = 1000;

function typeWriter() {
    const element = document.querySelector("main .contener p:nth-child(3)");

    if (!isDeleting && i < text.length) {
        element.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if (isDeleting && i > 0) {
        element.innerHTML = text.substring(0, i - 1);
        i--;
        setTimeout(typeWriter, speed / 2);
    }
    else if (i === text.length) {
        isDeleting = true;
        setTimeout(typeWriter, delay);
    }
    else if (i === 0) {
        isDeleting = false;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// ########### Skills #############

const skills = document.querySelector("#skills");
const skill = document.querySelectorAll(".skill");

// ######## Rune once ###############
// window.onscroll = function () {
//     if (window.scrollY >= skills.offsetTop-window.innerHeight/2) {
//         skill.forEach(function (e) {
//             let rate = e.querySelector(".data span:nth-child(2)");
//             let level = e.querySelector(".level span");
//             level.style.width = `${rate.textContent}`;
//         })
//     }
// }



window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - window.innerHeight / 2) {
        skill.forEach(function (e) {
            let rate = e.querySelector(".data span:nth-child(2)");
            let level = e.querySelector(".level span");
            
            if (level.style.width !== `${rate.textContent}`) {
                level.style.width = `${rate.textContent}`;
            }
        });
    } else {
        skill.forEach(function (e) {
            let level = e.querySelector(".level span");
            level.style.width = "0";
});
}
};
