/*

 out:

    alert()
    console.log()
    document.write()

 in 
   prompt()


자료형

  리터럴

  숫자 
  문자
  ''(백틱) 사이에 문자열 또는 변수 

  대소문자 구분
  식별자$

  []
  {}
  class 식별자명{}
  function 식별자명()

  undefined : 값이 할당되지 않은 자료헝
  null

  Symbol() [es6]
    Symbol은 고유한 데이터입니다.
    const a = Symbol("id");
    const b = Symbol("id");

    console.log(a == b); // false

    let obj = { 
  name: "cy"
};

let id = Symbol("id");

obj[id] = 1;

console.log( obj[id] )

onst ID = Symbol("id");

let user = {
  name: "John",
  [ID]: 123
};

for(key in user) console.log(key) // name
Object.getOwnPropertySymbols(obj).forEach(el=>console.log(el))

Symbol을 같은 description으로 어느 변수에 동일하게 할당하고 싶은경우 사용합니다.

const ID = Symbol.for("x1234"); 

const ID2 = Symbol.for("x1234");

console.log(ID === ID2) // true

const a = Symbol.for('안녕하세요')
console.log(Symbol.keyFor(a))//'안녕하세요'


===========================================
  jsbin.com

  repl.it
  codeandbox.com

  codeopen.io
  jsField.net


=============================================

문서서식프로그램
prettier code


// event

Document 객체

 document object model
 DOM


click mouseover dblclick

document.getElementById()

> document.querySelector()

constant
var
let

Array  
Collection : method 없음 유사 Array

*/

const opener = document.querySelector(".opener");
const closer = document.querySelector("#closer");

opener.addEventListener("click", function () {
  
    let menu = document.querySelector(".menu");
    menu.classList.remove('hide');
    menu.classList.add('opener-click'); 
    //menu.style.display = 'block'; /* 강제 !important */
    //menu.style.position = 'absolute !important';
});

closer.addEventListener("click", function () {
    let menu = document.querySelector(".menu");
    menu.classList.remove('opener-click'); 
    menu.classList.add('hide');
});

// removeEventListener
