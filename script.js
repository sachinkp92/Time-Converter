let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");

function convertToSeconds() {
    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours";
        timeInSecondsEl.textContent = "";
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
        timeInSecondsEl.textContent = "";
    } else {
        errorMsgEl.textContent = "";
        let hoursInputValue = parseInt(hoursInputEl.value);
        let minutesInputValue = parseInt(minutesInputEl.value);
        let timeConverter = hoursInputValue * 3600 + minutesInputValue * 60;
        timeInSecondsEl.textContent = timeConverter;
    }

}
convertBtnEl.addEventListener("click", convertToSeconds);