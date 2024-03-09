const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container")
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

// Chuẩn bị sẵn tài khoản và mật khẩu
function auth() {
    var usr = document.getElementById("usr").value;
    var pwd = document.getElementById("pwd").value;
    if (usr == "admin@gmail.com" && pwd == "admin123") {
        window.location.assign("../Home/home.html");
        alert("Login Successfully");
    } else {
        alert("Invalid Information");
        return;
    }
}