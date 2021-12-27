const form3 = document.getElementById("reg-form");
form3.addEventListener("submit", registerUser);

async function registerUser(event) {
  event.preventDefault();
  const password = event.target.children[0].value;

  const result = await fetch(
    "https://rest-api-thsx.herokuapp.com/api/change-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newpassword: password,
        token: localStorage.getItem("token"),
      }),
    }
  ).then((res) => res.json());

  if (result.status === "ok") {
    // everythign went fine
    alert("Success");
  } else {
    alert(result.error);
  }
}
