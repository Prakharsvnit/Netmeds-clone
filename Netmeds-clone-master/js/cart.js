var data_div = document.getElementById("data");

function appendProducts(el) {
  var div_1 = document.createElement("div");

  div_1.classList.add("container", "cartItem");

  var image = document.createElement("img");

  image.setAttribute("class", "itemImage");

  image.src = el.image;

  var i_name = document.createElement("p");

  i_name.setAttribute("class", "itemName");

  i_name.innerHTML = el.name;

  var d_price = document.createElement("p");

  d_price.setAttribute("class", "itemPrice");

  d_price.innerHTML = el.d_price;

  var btnCancel = document.createElement("button");

  btnCancel.setAttribute("class", "itemBtnCancel");

  btnCancel.addEventListener("click", function () {
    removeFromCart(el);

    div_1.remove();
  });

  var icon_1 = document.createElement("i");

  icon_1.classList.add("fa", "fa-window-close");

  icon_1.setAttribute("aria-hidden", "true");

  btnCancel.append(icon_1);

  var div_2 = document.createElement("div");

  div_2.setAttribute("class", "qty");

  var input = document.createElement("input");

  input.setAttribute("type", "number");

  input.setAttribute("class", "itemQty");

  input.setAttribute("id", "quantity" + "_" + el.name);

  input.setAttribute("value", 0);

  div_2.append(input);

  div_1.append(image, i_name, d_price, btnCancel, div_2);

  data_div.append(div_1);
}

function cost() {
  var data2_div = document.getElementById("data2");

  var div_3 = document.createElement("div");

  div_3.classList.add("container", "cost");

  var p_details = document.createElement("p");

  p_details.setAttribute("class", "itemName");

  p_details.innerHTML = "Payment Details";

  var p_price = document.createElement("p");

  p_price.setAttribute("id", "mrp");

  var p_discount = document.createElement("p");

  p_discount.setAttribute("id", "disc");

  p_discount.innerHTML = "Discount: 0";

  var p_total = document.createElement("p");

  p_total.setAttribute("id", "total");

  var strong = document.createElement("strong");

  p_total.append(strong);

  var proceed = document.createElement("button");

  proceed.setAttribute("class", "costBtn");

  proceed.innerHTML = "Proceed";

  proceed.addEventListener("click", function () {
    window.location.href = "paymentsnew.html";
  });

  div_3.append(p_details, p_price, p_discount, p_total, proceed);

  data2_div.append(div_3);
}

cost();

function showCart() {
  let data = JSON.parse(localStorage.getItem("visited"));

  data.forEach(function (el) {
    appendProducts(el);
  });

  data.forEach(function (el) {
    let name = "quantity" + "_" + el.name;

    let ele = document.getElementById(name);

    ele.addEventListener("change", () => {
      let data = JSON.parse(localStorage.getItem("visited"));
      data.forEach((item) => {
        if (item.name == el.name) {
          item.item_qty = ele.value;
        }
      });

      localStorage.setItem("visited", JSON.stringify(data));
    });
  });
}

showCart();

function totalPrice() {
  let data = JSON.parse(localStorage.getItem("visited"));

  var m = document.getElementById("mrp");

  var total = document.getElementById("total");

  var totalPrice = 0;

  data.forEach(function (el) {
    var p = el.d_price.slice(3);
    var q = el.item_qty;
    totalPrice += q * parseInt(p);
  });

  m.innerHTML = "MRP Total: Rs." + totalPrice;

  total.innerHTML = "Total Price: Rs." + totalPrice;

  return totalPrice;
}

function PromoCode() {
  var coupon_code = document.getElementById("coupon").value;

  var tp = totalPrice();

  var d = document.getElementById("disc");

  var t = document.getElementById("total");

  if (coupon_code === "masai30") {
    var discount = Math.ceil(tp * 0.3);

    var total = Math.ceil(tp * 0.7);

    d.innerHTML = "Discount: Rs." + discount;

    t.innerHTML = "Total Price: Rs." + total;
  }
}

function removeFromCart(obj) {
  let data = JSON.parse(localStorage.getItem("visited"));

  var i = data.findIndex((x) => x.name == obj.name);

  data.splice(i, 1);

  localStorage.setItem("visited", JSON.stringify(data));
}
