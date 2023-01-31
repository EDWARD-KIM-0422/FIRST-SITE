const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//문서.찾는함수(#은 아이디 이름)

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoningSumbit(event) {
  event.preventDefault(); //기본적으로 실행하는것을 막아주는 역활 예를 들면 새로고침 같은것
  loginForm.classList.add(HIDDEN_CLASSNAME); //class에 hidden이라는 클래스를 추가해줌
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //localStorage는 입력받은 값을 저장해줌 key-value 한쌍으로
  paintGreetiongs(username); //함수 실행하는 것
}

function paintGreetiongs(username) {
  greeting.innerText = `hello ${username}`; //`"text" ${변수} ` = "text + 변수" 와 같다
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoningSumbit); //submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
} else {
  paintGreetiongs(savedUsername);
}
