const words = document.getElementById("typed");

let text = ["taufiqu","reza","yoga","pratama"];
let j = 0;
let i = 0;

function autoWrite() {
    words.innerHTML = text[j].slice(0, i);
    i++;
    if (i > text[j].length) {
        i = 0;
        if (++j === text.length) {
            i = j = 0;
        }
    }
}

setInterval(() => {
    autoWrite();
}, 350);