function RegisterSubmit() {
  const users = JSON.parse(localStorage.getItem("Users")) || [];

  const name = document.getElementById("name").value;

  const password = document.getElementById("password").value;

  var userdata = { name: name, password: password };

  users.push(userdata);

  localStorage.setItem("Users", JSON.stringify(users));

  var btn = document.getElementById("button");

  btn.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

function loginSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("eform");

  const name = form.loginName.value;

  const password = form.loginPassword.value;

  var users = JSON.parse(localStorage.getItem("Users"));

  for (let i = 0; i < users.length; i++) {
    let u = users[i].name;

    let p = users[i].password;

    if (u === name && p === password) {
      window.location.href = "../index.html";
      break;
    } else {
      alert("Invalid credentials");
      break;
    }
  }
}
