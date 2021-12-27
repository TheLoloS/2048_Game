import Popup from "../scripts/popUp.js";
localStorage.getItem("registered") && new Popup("info", "Now login!");
localStorage.getItem("registered") && localStorage.removeItem("registered");
// new Popup("success", "zalogowano");
const form2 = document.getElementById("login");
form2.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  const username = event.target.children[0].value;
  const password = event.target.children[1].value;

  const result = await fetch("https://rest-api-thsx.herokuapp.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    // everythign went fine
    // console.log("Got the token: ", result.data);
    localStorage.setItem("token", result.data);
    localStorage.setItem(
      "login",
      document.querySelector("#login > input:nth-child(1)").value
    );
    // console.log(result);
    new Popup("success", "Logged in successfully");
    window.location.replace("/");
  } else {
    new Popup("error", result.error);
  }
}
