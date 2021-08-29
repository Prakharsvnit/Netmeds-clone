// function medicineData(name,d_price,disease,dose,image){
//     this.name = name;
//     this.d_price = d_price;
//     this.disease = disease;
//     this.dose = dose;
//     this.image = image;
// }

// const medicine1 = new medicineData("Crocin","Rs.52.58","fever","tablet","images/medi.png")
// const medicine2 = new medicineData("Paracetamol","Rs.33.22","headache","tablet","images/medi.png")
// const medicine3 = new medicineData("Combiflame","Rs.22.58","headache","tablet","images/medi.png")
// const medicine4 = new medicineData("Moove","Rs.170.05","Pain Relief","Gel","images/medi.png")
// const medicine5 = new medicineData("Fast Relief","Rs.50.89","Pain Relief","Gel","images/medi.png")
// const medicine6 = new medicineData("Vicks Vaporub","Rs.140.56","Nasal Congestion","Gel","images/medi.png")
// const medicine7 = new medicineData("Sinarest","Rs.34.56","fever","tablet","images/medi.png");
// const medicine8 = new medicineData("Althrocin","Rs.45.56","Cough","tablet","images/medi.png");
// const medicine9 = new medicineData("Stobal","Rs.201.43","Cough","Syrup","images/medi.png");
// const medicine10 = new medicineData("Benadryl","Rs.215.43","Cough","Syrup","images/medi.png");
// const medicine11 = new medicineData("Zandu bam","Rs.40","headache","Gel","images/medi.png");
// const medicine12 = new medicineData("LCZ","Rs.20.93","Allergy","tablet","images/medi.png");
// const medicine13 = new medicineData("Dolo","Rs.50.43","fever","tablet","images/medi.png")
// const medicine14 = new medicineData("Vomikind","Rs.10.43","Vomiting","tablet","images/medi.png")
// const medicine16 = new medicineData("Becosule","Rs.30.43","Alleregy","Capsule","images/medi.png");
// const medicine17 = new medicineData("Pudeen Hara","Rs.50","Vomiting","syrup","images/medi.png");
// const medicine18 = new medicineData("Otrivin","Rs.30.89","Nasal Congestion","liquid drops","images/medi.png");
// const medicine19 = new medicineData("XyloChek","Rs.52.32","Nasal Congestion","liquid drops","images/medi.png");
// const medicine20 = new medicineData("Genteal","Rs.145.6","Dry eye","liquid drops","images/medi.png");
// const medicine21 = new medicineData("Travatan","Rs.604.0","Dry eye","liquid drops","images/medi.png");

// var medicines = [medicine1,medicine2,medicine3,medicine4,medicine5,medicine6,medicine7,medicine8,medicine9,medicine10,medicine11,medicine12,medicine13,medicine14,medicine16,medicine17,medicine18,medicine19,medicine20,medicine21];

// localStorage.setItem("medicines",JSON.stringify(medicines));
var arr1;
async function show1() {
  try {
    let res = await fetch(`http://localhost:3200/meds`);
    let data1 = await res.json();
    some(data1);
    arr1 = data1;
    return data1;
  } catch (err) {
    console.log(err);
  }
}
show1();
async function some(e) {
  let x = await e;
  showMedicineList(x);
  //   fever(x);
}
function showMedicineList(m) {
  let medicines = m;
  let data_div = document.getElementById("data");
  data_div.innerHTML = null;
  medicines.forEach(function (el) {
    var div = document.createElement("div");
    var text_div = document.createElement("div");
    var image = document.createElement("img");
    image.src = el.image;
    image.style.height = "140px";
    image.style.width = "200px";
    image.style.float = "left";
    image.style.marginTop = "13px";
    var p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.style.fontFamily = "Lato";
    p_name.style.fontSize = "30px";
    p_name.style.fontWeight = "600";
    p_name.style.marginTop = "20px";
    var p_disease = document.createElement("i");
    p_disease.innerHTML = el.disease;
    p_disease.style.marginTop = "20px";
    var p_dose = document.createElement("p");
    p_dose.innerHTML = el.dose;
    p_dose.style.marginTop = "5px";
    var p_price = document.createElement("p");
    p_price.innerHTML = el.d_price;
    p_price.style.color = "#ef4281";
    var cartBtn = document.createElement("button");
    cartBtn.setAttribute("id", "addCart");
    cartBtn.innerHTML = "Add to cart";
    cartBtn.addEventListener("click", function () {
      addToCart(el);
    });
    cartBtn.style.backgroundColor = "rgb(50,174,177)";
    cartBtn.style.float = "right";
    cartBtn.style.width = "200px";
    cartBtn.style.height = "50px";
    cartBtn.style.marginRight = "20px";
    cartBtn.style.color = "white";
    cartBtn.style.fontSize = "25px";
    div.style.backgroundColor = "white";
    div.style.width = "540px";
    div.style.height = "260px";
    div.style.marginBottom = "20px";
    div.append(image, p_name, p_disease, p_dose, p_price, cartBtn);
    data_div.append(div);
    data_div.style.marginLeft = "650px";
    data_div.style.marginTop = "50px";
  });
}

// showMedicineList(JSON.parse(localStorage.getItem("medicines")))

function fever() {
  let medicinesData = arr1;
  console.log(medicinesData);
  var feverMedicine = [];
  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "fever") {
      feverMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(feverMedicine);
  //   some(feverMedicine);
}

function headache() {
  //   let medicinesData = JSON.parse(localStorage.getItem("medicines"));
  let medicinesData = arr1;

  var headacheMedicine = [];

  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "headache") {
      headacheMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(headacheMedicine);
}

function pain() {
  //   let medicinesData = JSON.parse(localStorage.getItem("medicines"));
  let medicinesData = arr1;

  var painMedicine = [];

  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "Pain Relief") {
      painMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(painMedicine);
}

function nasal() {
  //   let medicinesData = JSON.parse(localStorage.getItem("medicines"));
  let medicinesData = arr1;

  var nasalMedicine = [];

  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "Nasal Congestion") {
      nasalMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(nasalMedicine);
}

function cough() {
  //   let medicinesData = JSON.parse(localStorage.getItem("medicines"));
  let medicinesData = arr1;

  var coughMedicine = [];

  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "Cough") {
      coughMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(coughMedicine);
}

function vomit() {
  //   let medicinesData = JSON.parse(localStorage.getItem("medicines"));
  let medicinesData = arr1;

  var vomitMedicine = [];

  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "Vomiting") {
      vomitMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(vomitMedicine);
}

function allergy() {
  //   let medicinesData = JSON.parse(localStorage.getItem("medicines"));
  let medicinesData = arr1;

  var allergyMedicine = [];

  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "Allergy") {
      allergyMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(allergyMedicine);
}

function dry_eye() {
  //   let medicinesData = JSON.parse(localStorage.getItem("medicines"));
  let medicinesData = arr1;

  var eyeMedicine = [];

  for (let i = 0; i < medicinesData.length; i++) {
    if (medicinesData[i].disease == "Dry eye") {
      eyeMedicine.push(medicinesData[i]);
    }
  }

  showMedicineList(eyeMedicine);
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
