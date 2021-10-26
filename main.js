//show current time
function updateTime() {
    const currentTimeToday = new Date();
    const currentTime = `${currentTimeToday.getHours()} : ${currentTimeToday.getMinutes()} : ${currentTimeToday.getSeconds()}`
    const showCurrentTime = document.getElementById("currentTime")
    showCurrentTime.innerText = currentTime
}
setInterval(updateTime, 1000);

// calculator
const inputText = document.getElementById('result')
const button = document.querySelectorAll('input[type=button]')

const getResult = () => {
    if(inputText.value != '')
        inputText.value = eval(inputText.value);
};
const emptyInputText = () => {
    inputText.value = '';
};




button.forEach((el) => {
        el.addEventListener('click', (e) => {
            if(el.value == '='){
                getResult();  
            }
            else if(el.value == 'C'){
                emptyInputText();
            }
            else{
                inputText.value += el.value
            }
        })
})

