function moneyAdd(inputMoney, mainMoney ,cardMoney, placeNameInput) {
    const inputValue = document.getElementById(inputMoney).value;
    const placeName = document.getElementById(placeNameInput).innerText;
    console.log(placeName);
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

        // history
        const currentDate = new Date();
        const formattedDate = `Date : ${currentDate.toString()}`;
        const div = document.createElement('div');
        div.innerHTML = `
    <div class="rounded-3xl border-2 p-4 md:p-12 w-11/12 mx-auto mb-4">
    <h1 class="text-xl font-medium mb-2">${inputValueNumber} Taka is Donated for Flood Relief in ${placeName}, Bangladesh.</h1>
    <p>${formattedDate}</p>
    </div>
    `;
        const container = document.getElementById('history-container');
        container.appendChild(div);
    }
    else{
        const inputValue = document.getElementById(inputMoney).value;
        alert('Invalid input! '+inputValue);
        document.getElementById(inputMoney).value = '';
    }
}