setInterval(function () {
  document.getElementById("order").style.display = "none";
}, 3000);

function tprice() {
  let data = JSON.parse(localStorage.getItem("visited"));
  var s = document.getElementById("mrp_new");
  var total = document.getElementById("ttl");
  var tprice = 0;
  data.forEach(function (el) {
    var p = el.d_price.slice(3);
    tprice += parseInt(p);
  });
  total.innerHTML = "Rs " + tprice;
  s.innerHTML = "Rs " + tprice;
  return tprice;
}
tprice();
function pCode() {
  var tp = tprice();
  var t = document.getElementById("ttl");
  var di = document.getElementById("dis");

  var discount = Math.ceil(tp * 0.3);
  var total = (tp * 0.7).toFixed(2);
  t.innerHTML = "Rs " + total;
  di.innerHTML = "Rs -" + discount;
}
pCode();
