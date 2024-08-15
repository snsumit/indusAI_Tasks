const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active");
navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
hamburger.classList.remove("active");
navmenu.classList.remove("active");
}))

const soundMap = {
        w: "sounds/crash.mp3",
        a: 'sounds/kick-bass.mp3',
        s: 'sounds/snare.mp3',
        d: 'sounds/tom-1.mp3',
        j: 'sounds/tom-2.mp3',
        k: 'sounds/tom-3.mp3',
        l: 'sounds/tom-4.mp3'
    };

    const keys = document.querySelectorAll('.drum-key');
    
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyLetter = key.getAttribute('data-key');
            playSound(keyLetter);
            key.classList.add('playing');

            setTimeout(() => key.classList.remove('playing'), 100);
        });
    });

    document.addEventListener('keydown', (event) => {
        const keyLetter = event.key.toLowerCase();
        if (soundMap[keyLetter]) {
            playSound(keyLetter);
            const keyElement = document.querySelector(`.drum-key[data-key="${keyLetter}"]`);
            keyElement.classList.add('playing');

            setTimeout(() => keyElement.classList.remove('playing'), 100);
        }
    });

    function playSound(key) {
        console.log("hello")
        const audio = new Audio(soundMap[key]);
        audio.currentTime = 0;
        audio.play();
    }

