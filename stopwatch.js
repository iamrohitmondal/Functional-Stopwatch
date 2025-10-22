let hour1 = document.getElementById("hour1");
let hour2 = document.getElementById("hour2");
let minute1 = document.getElementById("minute1");
let minute2 = document.getElementById("minute2");
let second1 = document.getElementById("second1");
let second2 = document.getElementById("second2");
let tick = document.getElementById("tick-sound");
let beep = document.getElementById("beep-sound");
let box = document.getElementById("motivate")
function showMessages() {
    let messages = [
        "You can do it!",
        "You are the winner!",
        "Never give up.",
        "Believe in yourself.",
        "Keep pushing forward.",
        "Success starts with self-discipline.",
        "Dream big and work hard.",
        "Every step counts.",
        "Winners never quit.",
        "Stay strong, stay positive.",
        "Your time is coming.",
        "Make it happen."
    ]
    for (let index = 0; index < messages.length; index++) {
        motivationInt = setTimeout(() => {
            box.textContent = messages[index];
        }, index * 5000)
    }
};

let s1 = 0, s2 = 0;
let m1 = 0, m2 = 0;
let h1 = 0, h2 = 0;
let timer = null;

function Start() {
    showMessages()
    if (timer) return; // prevent multiple intervals
    beep.play();
    timer = setInterval(() => {
        tick.currentTime = 0;
        tick.play()
        // increment the smallest digit
        s2++;

        // Nested if logic for carryover
        if (s2 > 9) {
            s2 = 0;
            s1++;

            if (s1 > 5) {
                s1 = 0;
                m2++;

                if (m2 > 9) {
                    m2 = 0;
                    m1++;

                    if (m1 > 5) {
                        m1 = 0;
                        h2++;

                        if (h2 > 9) {
                            h2 = 0;
                            h1++;

                            if (h1 > 9) {
                                // 99:59:59 reached — reset to zero (or stop)
                                h1 = h2 = m1 = m2 = s1 = s2 = 0;
                            }
                        }
                    }
                }
            }
        }

        // update display digits
        hour1.textContent = `${h1}`;
        hour2.textContent = `${h2}`;
        minute1.textContent = `${m1}`;
        minute2.textContent = `${m2}`;
        second1.textContent = `${s1}`;
        second2.textContent = `${s2}`;
    }, 1000);
};

function Pause() {
    beep.play();
    clearInterval(timer);
    clearTimeout(motivationInt)
    timer = null;
}

function Reset() {
    beep.play();
    clearInterval(timer);
    timer = null;
    h1 = h2 = m1 = m2 = s1 = s2 = 0;
    hour1.textContent = hour2.textContent = 0;
    minute1.textContent = minute2.textContent = 0;
    second1.textContent = second2.textContent = 0;
}
