function checkMed() {
  const form = document.getElementById("eform");
  let email = form.email.value;
  let pass = form.pass.value;
  const data = JSON.parse(localStorage.getItem("medStore"));
  for (var i = 0; i < data.length; i++) {
    let u = data[i].email;
    let l = data[i].pass;
    if (u == email && l == pass) {
      alert("hi");
      break;
    } else {
      alert("bye");
    }
  }
  console.log(data);
}
