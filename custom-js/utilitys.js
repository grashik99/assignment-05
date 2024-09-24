function moneyAdd(inputMoney, mainMoney ,cardMoney) {
    const inputValue = document.getElementById(inputMoney).value;
    if (!isNaN(inputValue) && inputValue > 0){
        const inputValueNumber = parseFloat(inputValue);

        const mainValue = document.getElementById(mainMoney).innerText;
        const mainValueNumber = parseFloat(mainValue);

        const initialAmount = document.getElementById(cardMoney).innerText;
        const initialAmountNumber = parseFloat(initialAmount);

        // calculation
        const currentMainMoney = mainValueNumber - inputValueNumber;
        const currentCardMoney = initialAmountNumber + inputValueNumber;

        // set value
        document.getElementById(inputMoney).value = '';
        document.getElementById(mainMoney).innerText = currentMainMoney;
        document.getElementById(cardMoney).innerText = currentCardMoney;

        // modal show
        const confirmation = document.getElementById('confirmation-alert');
        confirmation.classList.remove('hidden');
    }
    else{
        const inputValue = document.getElementById(inputMoney).value;
        alert('Invalid input! '+inputValue);
        document.getElementById(inputMoney).value = '';
    }
}