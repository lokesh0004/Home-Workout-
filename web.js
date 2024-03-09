var loginBtns = document.getElementsByClassName("loginBtn");
for (var i = 0; i < loginBtns.length; i++) {
    loginBtns[i].addEventListener('click', function() {
        location.reload();
        window.location.href = "login.html";
    });
}
