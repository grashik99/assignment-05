// scroll function
window.addEventListener('scroll', function () {
    let scrollPoint = window.scrollY;
    const navBg = document.getElementById('nav-bg');
    const buttonBg = document.getElementById('button-bg');
    console.log(scrollPoint);
    if (scrollPoint == 0) {
        navBg.style.backgroundColor = '';
        buttonBg.style.backgroundColor = '';
    }
    else {
        navBg.style.backgroundColor = '#2ecc70e6';
        buttonBg.style.backgroundColor = '#2ecc70e6';
    }
})
// history button
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donate-sec').classList.add('hidden');
    document.getElementById('history-sec').classList.remove('hidden');
    document.getElementById('history-btn').classList.add('btn-color');
    document.getElementById('donation-btn').classList.remove('btn-color');
});
// donation button
document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.remove('btn-color');
    document.getElementById('history-sec').classList.add('hidden');
    document.getElementById('donation-btn').classList.add('btn-color');
    document.getElementById('donate-sec').classList.remove('hidden');
});
// blog button
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html"
});
// inputs money;
// donation-Barguna
document.getElementById('barguna-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const getMoney = document.getElementById('donation-Barguna').value;
    if (!isNaN(getMoney) && getMoney > 0) {
        const getMoneyNumber = parseFloat(getMoney);
        const mainMoney = document.getElementById('main-money');
        const bargunaMoney = document.getElementById('Barguna-money');
        const mainMoneyNumber = parseFloat(mainMoney.innerText);
        const bargunaMoneyNumber = parseFloat(bargunaMoney.innerText);
        const upMainMoney = mainMoneyNumber - getMoneyNumber;
        const upBargunaMoney = bargunaMoneyNumber + getMoneyNumber;
        mainMoney.innerText = upMainMoney;
        bargunaMoney.innerText = upBargunaMoney;

        const confirmation = document.getElementById('confirmation-alert');
        confirmation.classList.remove('hidden');  
        
        // for history.
        const historyContainer = document.getElementById('history-container');

        const createHeading = document.createElement('h1');
        createHeading.innerText = (getMoneyNumber +' Taka is Donated for famine-2024 at Barguna, Bangladesh');
        historyContainer.appendChild(createHeading );

        const currentDate = new Date();
        const formattedDate = `Date : ${currentDate.toString()}`;

        const createTime = document.createElement('h2');
        createTime.innerText = formattedDate;
        historyContainer.appendChild(createTime);
    }
    else {
        alert('Invalid Input!')
        document.getElementById('donation-Barguna').value = '';
    }
});
document.getElementById('confirmation-close').addEventListener('click', function () {
    document.getElementById('confirmation-alert').classList.add('hidden');
    document.getElementById('donation-Barguna').value = '';
});








