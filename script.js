var submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  // first name check----------------------------------------------------

  if (fname.value == "") {
    showError(fname, "First name is required");
  } else if (fname.value.length < 3) {
    showError(fname, "First name must be at least 3 character.");
  } else {
    showSuccess(fname);
  }
  //  -------------------------------------------------------------------

  // address--------------------------------------------------------------
  var address = [];
  address.push(Address1.value);
  address.push(Address2.value);
  //  -------------------------------------------------------------------

  var gender = document.getElementsByName("radio");
  var genderValue = [];
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue.push(gender[i].value);
    }
  }
  //  -------------------------------------------------------------------

  // food ------------------------------------------------------------------

  var food = document.getElementsByName("food");
  var foodList = [];
  var foodCount = 0;
  console.log(food);
  for (var i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodList.push(food[i].value);
      foodCount++;
    }
  }
  if (foodList.length >= 2) {
    result = foodList.join(", ");
  } else {
    result = alert("Choose atleast 2 options out of 5 in food");
  }
  //  -------------------------------------------------------------------
  createTable(
    fname.value,
    lname.value,
    address.join(" "),
    pincode.value,
    genderValue.join(""),
    result,
    state.value,
    country.value
  );
  fname.value = "";
  lname.value = "";
  Address1.value = "";
  Address2.value = "";
  pincode.value = "";
  gender.value = "";
  foodList = [];
  state.value = "";
  country.value = "";
});

// first name check---------------------------------------------------------

// show input error

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "firstname error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "firstname success";
}
// ---------------------------------------------------------------------------
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var Address1 = document.getElementById("Address1");
var Address2 = document.getElementById("Address2");
var pincode = document.getElementById("pincode");
var gender = document.getElementById("gender");
var food = document.getElementById("food");
var state = document.getElementById("state");
var country = document.getElementById("country");

function createTable(
  fname,
  lname,
  address,
  pincode,
  gender,
  food,
  state,
  country
) {
  var tbody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  td1.innerHTML = fname;
  td2.innerHTML = lname;
  td3.innerHTML = address;
  td4.innerHTML = pincode;
  td5.innerHTML = gender;
  td6.innerHTML = food;
  td7.innerHTML = state;
  td8.innerHTML = country;
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  tr.append(td5);
  tr.append(td6);
  tr.append(td7);
  tr.append(td8);
  tbody.append(tr);
}
function myFunction() {
  document.getElementById("form").reset();
}
