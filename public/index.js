var selectedOption, selectedPignone, selectedScelta;

// get the select element from the DOM
const select = document.getElementById("mySelect");

// create options and append to select
for (let i = 70; i <= 130; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = `${i} kg`;
  select.appendChild(option);
}
miaScelta();
function miaScelta() {
  const dropdown = document.getElementById("mySelect");
  select.addEventListener("change", function () {
    selectedOption = dropdown.value;
    console.log(selectedOption);
  });
  const scelta = document.getElementById("myChoice");
  scelta.addEventListener("change", function () {
    selectedScelta = scelta.value;
    console.log(selectedScelta);
  });

  localStorage.setItem("Data1", selectedOption);
  //localStorage.setItem("Data2", selectedScelta);

  if (selectedScelta === "Stelvio") {
    window.location.href = "stelvio.html";
  }

  if (selectedScelta === "Cancano") {
    window.location.href = "cancano.html";
  }
  if (selectedScelta === "Colma") {
    window.location.href = "colma.html";
  }
}

//Example for cell content

// // set the content of the cell in row 3, column 5
// var row3 = document.getElementsByTagName("tr")[2];
// var cell5 = row3.getElementsByTagName("td")[4];
// var content = "This cell has a variable";
// cell5.textContent = content;
