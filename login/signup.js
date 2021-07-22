function storeMed() {
  const form = document.getElementById("eform");
  let email = form.email.value;
  let num = form.num.value;
  let pass = form.pass.value;
  let first = form.first.value;
  let last = form.last.value;
  if (email != 0 && num != 0 && pass != 0 && first != 0 && last != 0) {
    let medUser = [
      {
        email: email,
        num: num,
        pass: pass,
      },
    ];

    let arr;
    arr = localStorage.getItem("medStore");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("medStore"));
    }
    arr.push(medUser);
    localStorage.setItem("medStore", JSON.stringify(arr));
  } else {
    alert("Enter All Details");
  }
  log();
}
function log() {
  window.location.href = "login.html";
}
