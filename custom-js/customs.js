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


document.getElementById('barguna-btn').addEventListener('click', function (event) {
    event.preventDefault();
    moneyAdd('donation-Barguna', 'main-money', 'Barguna-money');
})

document.getElementById('cox-btn').addEventListener('click', function (event) {
    event.preventDefault();
    moneyAdd('donation-cox', 'main-money', 'cox-money');
})


// close confirmation 
document.getElementById('confirmation-close').addEventListener('click', function () {
    document.getElementById('confirmation-alert').classList.add('hidden');
});








