// 계산기 만들기
// console.log(6 + 1);
// console.log(6 * 1);
// console.log(6 / 1);

/* 변수를 통해 계산식을 편하게 만들 수 있다.*/
// 자바스크립트의 변수는  var,let,const(상수) 가 있다.
const a = 5;
const b = 2;

// 자바 스크립트에서는 카멜 표기식으로 변수이름을 정하는 것이 좋다.ㄴ
const myName = "nico";
const veryLongVariableName = 0;

// 변수 숫자 하나만 바뀌어도 모든 결과식이 바뀐다.
//  이전에는 위의 결과를 바꾸기 위해서 6번의 수정을 해야하지만 변수를 사용함으로써 2번으로 줄였다.
console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("Hello, " + myName);

// Const와 let의 차이
// Const는 상수로 변경이 불가능하다 자바의 final이라고 생각하면 편하다.

// let은 새로운 것을 생성할 때 사용하는 키워드이다.
// let은 const와는 다르게 새로운 값을 대입할 수 없다.(값의 변경이 가능하다.)
let a1 = 5;
let b1 = 2;
let myName1 = "nico";

myName1 = "Nicolas";
console.log("your name is " + myName1);

// 언어가 몇몇 업데이트를 거칠 수 있다.
// 자바스크립트의 옛날 변수에는 var라는 녀석이 있다.
// 초창기의 문법
// 만약 내가 같은이름의 변수를 업데이트해도 이것을 보호해주지 않는다.
// var는 어떠한 규칙도 가지고 있지 않다. 그래서 사용하는데 위험하다.

// boolean  - 참/거짓(true or false)
const amIFat = null;
console.log(amIFat);

// 자바스크립트의 데이터 타입 중에는 존재하지 않음 또는 '정의되지 않음'
// 또는 '아무것도 없음'을 나타내는 타입들이 있다. '비어있음'

// null은 아무것도 없음을 의미한다. false는 값이 존재하는 것이다.
// 아무것도 없는 것으로 변수를 채웠다라고 생각하면 된다.

//  변수를 만들었는데 초기화를 하지 않은 상태에서 출력을 하면
let something;
// undefined = 정의 되지 않음을 의미한다.
// 컴퓨토 메모리 안에 존재하고 공간은 있는데 값이 없는 경우이다.
console.log(amIFat, something);

// 자바스크립트는 null 대신에 none이라는 녀석이 있다.
// 파이썬은 True, False가 있다.

// === 자바스크립트의 배열 ===

// 컴퓨터 과학에 있어서 가장 중요한 데이터구조

// 우리가 배우는 가장 기본적인 데이터 구조는 바로 배열이다.
// 배열을 사용하지 않고 일주일의 요일을 만들고 싶다고 한다면
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// 무언가를 나열하기 위해서 더 좋은 것이 배열이다.
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

console.log(daysOfWeek, nonsense);

// 이 배열들에서 토요일만 받아오고 싶다면 / 혹은 하나를 더 추가하고 싶다면...?
// 다섯번째 요일을 알고 싶다면... 인덱스는  0부터 시작하기 때문이다.
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");

// added array
console.log(daysOfWeek);

// 상품을 주문하려고 담을 때 마다 계속해서 변수를 생성할 수는 없으니 배열을 사용하는 것이 좋다.
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(toBuy);

// ==== Object =====

// 어떨 때는 Object를 만들어야 할 때가 있다.
// 비디오 게임을 예로 들어서 설명

// 만약 obejct가 없다면

// 이러한 특성들
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// 한 Object에 대한 특성을
// 이런식으로 정리하는 것이 더 낫다.
// player.name
// player.points
// player.fat

// Object로 만들면 각각의 내부 요소를 설명할 수 있다.
// 요일의 경우에는 한가지이기 때문이다.

const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);

// 다른 접근 방법
console.log(player["name"]);

//  undefined
console.log(player.lastName);
player.lastName = "potato";
player.points = 15;
console.log(player);

//  ============= function ====================

// 함수
// 계속해서 반복해서 사용할 수 있는 코드 조각이다.
// 가능한 적은코드로 작성하기 위해 반복을 줄이기 위한 수단으로 사용하는 것이 함수이다.

// 자바스크립트 표준 함수
console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Shigatsu");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");

// 우리는 코드의 반복을 줄이고 싶다.
// function은 어떤 코드를 캢슐화해서 실행을 여러번하기 편하게 만들어준다.
// function을 만드는 여러가지 규칙이 있다.

function sayHello() {
    // 블록 영역 : 함수가 실행될 때 마다 이 내부 블럭 안의 코드들이 실행되는 것이다.
    console.log("Hello! my name is C");
}
alert();
console.log();
sayHello();
sayHello();
sayHello();
sayHello();

// Argument Function
// 여러개의 argument를 받을 수 있다.
function sayHello(nameOfPerson, age) {
    console.log("Hello, My name is " + nameOfPerson + "and i am " + age);
}

// argumemt는  function을 실핼하는 동안에 어떤 정보를 function.에 보낼 수 있는 방법이다.
// 우리는 alert함수를 쓸 때 필요한 메시지를 argument로 준다.
console.log("Hello");

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
// 지역변수이기 때문이다.
// console.log(firstNumber);

function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

// 객체의 변수로 함수를 저장할 수 있다.
const player = {
    name: "nico",
    sayHello: function (otherPersonssName) {
        console.log("hello! " + otherPersonssName);
    },
};

player.sayHello("lynn");
player.sayHello("nico");

// variable을 만드는 방법은 두 가지 (var은 안쓴다고 가정)

// const => 고정값 상수를 가지는 변수
const a = 5;
console.log(a);

// let => 언제든 변할 수 있는 변수 (update가 필요한 변수)
let b = 5;
console.log(b);

let isNicoFat = true;

// 불가능
// isNicoFat = false
isNicoFat = false;
console.log(isNicoFat);

// var은 과거의 것이고 let과 비슷하지만 규칙이 없기 때문에 이미 있는 변수를 덮어씌우는듯 문제가 발생할 가능성이 높아서 사용하지 않는다.

// 계산기

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

// return은 값을 반환하기 때문에 다른 어떠한 변수에 저장하거나 사용할 수 있다.
// 일회용으로 console.log로 띄우는 것이 아니라 계산된 값을 사용할 수 있게된다.

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 1);

console.log(plusResult);

// 만나이 게산하기
const age = 96;
function calculatorkrAge(ageOfForeigner) {
    return ageOfForeigner - 2;
}

const krAge = calculatorkrAge(age);

// 조건문

// function을 통해서

//  음주가 가능한 나이인지 확인해주는 계산기

// 먼저 유저의 나이를 물어본다.

// const age = prompt("How old are you");

// prompt는 다른 자바스크립트의 실행을 멈추게 한다.
// 그게 더 이상 prompt를 사용하지 않는 이유이다.
// 요즘에는 HTML,CSS로 만든 것들을 사용한다.

// 자바스크립트가 동작하기 전에 멈추는 것을 prompt가 해준다.
// ok를 누르면 값이 입력이 되고 이것을 변수에 담을 수 있다.

// console.log(age);

// 받은 값은 무조건 number로 바꿀것이다.
// console.log(typeof age);

// "15" => 15
// string을 number로 바꾸기 위해서는 parseInt를 사용하면 된다.
// console.log(typeof age, typeof parseInt(age));

// console.log(parseInt(age));
// age에 숫자로 변환할 수 없는 값을 넣으면 NaN(Not a Number)로 반환한다.

const age = parseInt(prompt("How old are you"));

console.log(age);

// 이제 if로 NaN일 경우를 조건문으로 처리할 것이다.

const age = parseInt(prompt("How old are you"));

// 먼저 age가 숫자가 아닌지확인한다.
if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    // 숫자가 맞다면 먼저 나이를 체크한다.
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    // 나이가 18세이상이면 술을 마실 수 있다고 판단한다.
    console.log("You can drink");
} else if (age >= 51 && age <= 80) {
    console.log("You can't drink");
} else {
    console.log("Your can do whatever you want.");
}

// document는  이미 정의되어있다.
// document를 입력하면 브라우저에 이미 존재하는 object이다.
// 우리가 접근할 수 있는 html을 가리키는 객체이다.

// console창에
// console.dir(document)라고 치면 정말 많은것들이 있는 object형태로 보여준다.

// 페이지의 제목을 가져오는 코드로
console.log(document.title);

// 페이지의 제목을 바꾸는 것도 가능하다;.
document.title = "HI";

// -----------------------------------------------------------------------------------

// 3.1
const title = document.getElementById("title");

title.innerText = "Got You";
console.log(title.id);
console.log(title.className);
console.log(title.classList);

//3.2,3.3,3.4
// 클래스 이름으로 가져오거나

const title = document.querySelector(".hello:first-child h1");

// element의 내부를 보고 싶으면 dir
console.dir(title);

// 내부의 속성중 style부분의 color변경하기
title.style.color = "blue";

// 클릭시 이벤트
function handleTitleClick() {
    console.log("title was Clicked!");
    if (title.style.color == "blue") {
        title.style.color = "red";
    } else {
        title.style.color = "blue";
    }
}

function handleMouseEnter() {
    title.innerText = "Mouse is Here";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

// 이벤트를 listen하는 방법
//  괄호를 넣지 않아야한다. click할 경우 자바스크립트가 대신 눌러주기 떄문이다.

title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);

// 3.5

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

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("All GOOD ~!!");
}

// 이벤트를 listen하는 방법
//  괄호를 넣지 않아야한다. click할 경우 자바스크립트가 대신 눌러주기 떄문이다.

h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

const h1 = document.querySelector("div.hello:first-child h1");

// 클래스리스트

// 클릭시 이벤트
// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }

// toggle 기능
// toggle 은 className이 존재하는 지 확인
// 존재하지 않으면 추가, 존재하면 삭제
// 클래스리스트에 clicked가 있는지 없는지 판단해서 추가혹은 삭제를 해주는 역할
function handleTitleClick() {
    h1.classList.toggle("clicked");
}

// 이벤트를 listen하는 방법
//  괄호를 넣지 않아야한다. click할 경우 자바스크립트가 대신 눌러주기 떄문이다.
h1.addEventListener("click", handleTitleClick);
