function calc(x) {
    const result = document.getElementById("result").value+=x;
}
function clearCalc() {
    result.value = "";
}
function runResult() {
    result.value = eval(result.value)
}

//show current time
function updateTime() {


    const currentTimeToday = new Date();
    const currentTime = `${currentTimeToday.getHours()} : ${currentTimeToday.getMinutes()} : ${currentTimeToday.getSeconds()}`
    const showCurrentTime = document.getElementById("currentTime")
    showCurrentTime.innerText = currentTime
}
setInterval(updateTime, 1000);