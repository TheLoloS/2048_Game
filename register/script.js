import Popup from "../scripts/popUp.js";
const form1 = document.getElementById("reg-form");
form1.addEventListener("submit", registerUser);

async function registerUser(event) {
  event.preventDefault();
  const username = event.target.children[0].value;
  const password = event.target.children[1].value;

  const result = await fetch(
    "https://rest-api-thsx.herokuapp.com/api/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  ).then((res) => res.json());

  if (result.status === "ok") {
    // everythign went fine
    new Popup("success", "successfully registered");
    localStorage.setItem("registered", true);
    window.location.replace("/login");
  } else {
    new Popup("error", result.error);
  }
}
