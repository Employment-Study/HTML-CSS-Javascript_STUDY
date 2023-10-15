const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // event의 기본 행동이 발생하지 않도록 막는다. submit의 기본 이벤트를 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // localstorage는 브라우저 안에 무언가를 저장하게 해준다.
    // localstoage가 가장 다루기 쉽다.
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// submit
// ()를 붙이면 자동으로 functnion을 실행
function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the storedname
    paintGreetings(savedUsername);
}
