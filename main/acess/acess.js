const finalButton = document.getElementsByClassName('btnBack')[0];

finalButton.addEventListener('click', function (event) {
    event.preventDefault();

    window.location.href="/main/index.html";
})