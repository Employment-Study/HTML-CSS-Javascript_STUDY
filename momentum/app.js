const h1 = document.querySelector(".hello:first-child h1");

// 내부의 속성중 style부분의 color변경하기
h1.style.color = "blue";

// 클릭시 이벤트
function handleTitleClick() {
    console.log("h1 was Clicked!");
    if (h1.style.color == "blue") {
        h1.style.color = "red";
    } else {
        h1.style.color = "blue";
    }
}

function handleMouseEnter() {
    h1.innerText = "Mouse is Here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

// 이벤트를 listen하는 방법
//  괄호를 넣지 않아야한다. click할 경우 자바스크립트가 대신 눌러주기 떄문이다.

h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
