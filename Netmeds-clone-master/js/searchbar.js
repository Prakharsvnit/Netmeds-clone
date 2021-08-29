// var medicineRequire = document.getElementById("searchMedicine").value;

// console.log(medicineRequire);

let main = document.getElementById("show");
async function show() {
  let search = document.getElementById("searchMedicine").value;
  if (search.length == 0) {
    main.innerHTML = null;
  } else {
    try {
      let res = await fetch(`http://localhost:3200/medicine/${search}`);
      let data = await res.json();
      console.log(data);
      appendData(data);
    } catch (err) {
      console.log(err);
    }
  }
}
function appendData(meds) {
  main.innerHTML = null;
  meds.forEach(({ img_m, MedicineName, TypeofSell, MRP }) => {
    let mini = document.createElement("div");
    mini.className = "mini";
    mini.style.display = "flex";
    let img_div = document.createElement("div");
    let cont_div = document.createElement("div");
    let img = document.createElement("img");
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    img_div.style.width = "20%";
    cont_div.style.width = "50%";
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let bo = document.createElement("button");
    bo.innerText = "Add tO cart";
    p.innerText = MedicineName;
    p1.innerText = TypeofSell;
    p2.innerText = MRP;
    img.src = img_m;
    img_div.append(img);
    bo.className = "addBT";
    bo.addEventListener("click", function () {
      addToCart({ name: MedicineName, d_price: MRP, image: img_m });
    });

    cont_div.append(p, p1, p2, bo);
    mini.append(img_div, cont_div);
    main.append(mini);
  });
}
function addToCart(obj) {
  let arr;

  arr = localStorage.getItem("visited");

  if (arr == null) {
    arr = [];

    arr.push(obj);

    alert("Item added to cart successfully");
  } else {
    arr = JSON.parse(localStorage.getItem("visited"));

    var flag = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name == obj.name) {
        flag = 1;

        break;
      }
    }

    if (flag == 0) {
      arr.push(obj);

      alert("Item added to cart successfully");
    }
    if (flag == 1) {
      alert("Item already present in cart");
    }
  }

  localStorage.setItem("visited", JSON.stringify(arr));
}
