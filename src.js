let timer;

function startCountdown() {
    clearInterval(timer);

    let h = document.getElementById("hours").value;
    let m = document.getElementById("minutes").value;
    let s = document.getElementById("seconds").value;

    h = h ? parseInt(h) : 0;
    m = m ? parseInt(m) : 0;
    s = s ? parseInt(s) : 0;

    let total = h * 3600 + m * 60 + s;

    function showTime() {
        let hrs = Math.floor(total / 3600);
        let mins = Math.floor((total % 3600) / 60);
        let secs = total % 60;

        let hh = hrs < 10 ? "0" + hrs : hrs;
        let mm = mins < 10 ? "0" + mins : mins;
        let ss = secs < 10 ? "0" + secs : secs;

        document.getElementById("display").innerHTML = hh + ":" + mm + ":" + ss;

        if (total <= 0) {
            clearInterval(timer);
            document.getElementById("display").innerHTML = "TIME'S UP!";
            document.getElementById("hours").value = 0;
            document.getElementById("minutes").value = 0;
            document.getElementById("seconds").value = 0;
        } else {
            total = total - 1;
        }
    }

    showTime();
    timer = setInterval(showTime, 1000);
}

document.getElementById("startBtn").addEventListener("click", startCountdown);

