let pendenza = [],
  km = [],
  selectedPignone = [],
  roundPm = [],
  cellMinAggr = [],
  cellMinTempoTotale = [];
// console.log("tempo da pag1 = ", localStorage.getItem("Data5"));

const pignoniAnt = document.getElementById("myFront");
pignoniAnt.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt.value);
});
const pignoniAnt2 = document.getElementById("myFront2");
pignoniAnt2.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt2.value);
});
const pignoniAnt3 = document.getElementById("myFront3");
pignoniAnt3.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt3.value);
});
const pignoniAnt4 = document.getElementById("myFront4");
pignoniAnt4.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt4.value);
});
const pignoniAnt5 = document.getElementById("myFront5");
pignoniAnt5.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt5.value);
});
const pignoniAnt6 = document.getElementById("myFront6");
pignoniAnt6.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt6.value);
});

const pignoniAnt7 = document.getElementById("myFront7");
pignoniAnt7.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt7.value);
});

const pignoniAnt8 = document.getElementById("myFront8");
pignoniAnt8.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt8.value);
});

const pignoniAnt9 = document.getElementById("myFront9");
pignoniAnt9.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt9.value);
});

const pignoniAnt10 = document.getElementById("myFront10");
pignoniAnt10.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt10.value);
});

const pignoniAnt11 = document.getElementById("myFront11");
pignoniAnt11.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt11.value);
});

const pignoniAnt12 = document.getElementById("myFront12");
pignoniAnt12.addEventListener("change", function () {
  selectedPignone.push(pignoniAnt12.value);
});

function page2() {
  document.getElementById("container1").style.display = "none";
  document.getElementById("container2").style.display = "inline";
  document.getElementById("tempoTotalePag1").innerText =
    localStorage.getItem("Data2");
  document.getElementById("tempoTotalePag1").style.display = "inline";
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "inline";
  document.getElementById("page3").style.display = "block";
  document.getElementById("page3").style.margin = "auto";
  document.getElementById("page3").style.width = "250px";
  document.getElementById("page3").style.eight = "60px";
  document.getElementById("page3").style.borderRadius = "5px";
}

function page3() {
  document.getElementById("container2").style.display = "none";
  document.getElementById("container3").style.display = "inline";
  document.getElementById("tempoTotalePag1").innerText =
    localStorage.getItem("Data3");
  document.getElementById("tempoTotalePag1").style.display = "inline";
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "inline";
  document.getElementById("page4").style.display = "block";
  document.getElementById("page4").style.margin = "auto";
  document.getElementById("page4").style.width = "250px";
  document.getElementById("page4").style.eight = "60px";
  document.getElementById("page4").style.borderRadius = "5px";
}

function page4() {
  document.getElementById("container3").style.display = "none";
  document.getElementById("container4").style.display = "inline";
  document.getElementById("tempoTotalePag1").innerText =
    localStorage.getItem("Data4");
  document.getElementById("tempoTotalePag1").style.display = "inline";
  document.getElementById("page4").style.display = "none";
  document.getElementById("page5").style.display = "inline";
  document.getElementById("page5").style.display = "block";
  document.getElementById("page5").style.margin = "auto";
  document.getElementById("page5").style.width = "250px";
  document.getElementById("page5").style.eight = "60px";
  document.getElementById("page5").style.borderRadius = "5px";
}

function page5() {
  window.location.href = "stelvioPag2.html";
}

var contoClicks = document.getElementById("rpm-button");
contoClicks.addEventListener("click", () => {
  km1();
});
var contoClicks2 = document.getElementById("rpm-button2");
contoClicks2.addEventListener("click", () => {
  km2();
});
var contoClicks3 = document.getElementById("rpm-button3");
contoClicks3.addEventListener("click", () => {
  var kilometro = 3;
  kmTest(kilometro);
});

var contoClicks4 = document.getElementById("rpm-button4");
contoClicks4.addEventListener("click", () => {
  var kilometro = 4;
  kmTest(kilometro);
});
var contoClicks5 = document.getElementById("rpm-button5");
contoClicks5.addEventListener("click", () => {
  var kilometro = 5;
  kmTest(kilometro);
});
var contoClicks6 = document.getElementById("rpm-button6");
contoClicks6.addEventListener("click", () => {
  var kilometro = 6;
  kmTest(kilometro);
});

var contoClicks7 = document.getElementById("rpm-button7");
contoClicks7.addEventListener("click", () => {
  var kilometro = 7;
  kmTest(kilometro);
});

var contoClicks8 = document.getElementById("rpm-button8");
contoClicks8.addEventListener("click", () => {
  var kilometro = 8;
  kmTest(kilometro);
});

var contoClicks9 = document.getElementById("rpm-button9");
contoClicks9.addEventListener("click", () => {
  var kilometro = 9;
  kmTest(kilometro);
});

var contoClicks10 = document.getElementById("rpm-button10");
contoClicks10.addEventListener("click", () => {
  var kilometro = 10;
  kmTest(kilometro);
});
var contoClicks11 = document.getElementById("rpm-button11");
contoClicks11.addEventListener("click", () => {
  var kilometro = 11;
  kmTest(kilometro);
});
var contoClicks12 = document.getElementById("rpm-button12");
contoClicks12.addEventListener("click", () => {
  var kilometro = 12;
  kmTest(kilometro);
});

function km1() {
  var selectedOption = localStorage.getItem("Data1");
  var timePag1 = localStorage.getItem("Data5");
  roundPm.push(document.getElementById("rpm").value);

  // create a table element
  var table = document.createElement("table");
  // create rows and cells
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 12; j++) {
      var cell = document.createElement("td");
      // set some content for the cell
      //cell.textContent = "Row " + (i + 1) + ", Column " + (j + 1);
      cell.style.width = "80px";
      cell.style.height = "30px";
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  // add border to table and cells
  table.style.border = "1px solid black";
  table.style.marginLeft = "auto";
  table.style.marginRight = "auto";
  table.style.marginTop = "60px";

  var cells = table.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.border = "1px solid black";
  }

  // add the table to the document
  document.body.appendChild(table);

  // scrivo colonna 1
  let column1 = ["Km", "Pendenza %", "Potenza", "Minuti", "Aggregato", "Pos."];

  for (let k = 0; k < column1.length; k++) {
    var row1 = document.getElementsByTagName("tr")[k];
    var cell11 = row1.getElementsByTagName("td")[0];
    cell11.style.width = "130px";
    cell11.style.paddingLeft = "10px";
    var content = column1[k];
    cell11.textContent = content;
  }

  // scrivo Km su riga 1 le prime 12 colonne
  km = [6, 6.5, 7, 7.5, 8, 8.59, 9.5, 10, 11.5, 12, 12.5, 13];
  for (let k = 1; k < km.length; k++) {
    var row1plus = document.getElementsByTagName("tr")[0];
    var cellKm = row1plus.getElementsByTagName("td")[k];
    cellKm.style.textAlign = "center";
    var content1 = km[k].toString();
    cellKm.textContent = content1;
  }

  // scrivo pendenza su riga 2 le prime 12 colonne
  pendenza = [0, 9, 11, 5, 9, 5, 8, 7, 5, 0, 8, 9, 6];
  for (let k = 1; k < pendenza.length; k++) {
    var row1Pend = document.getElementsByTagName("tr")[1];
    var cellPend = row1Pend.getElementsByTagName("td")[k];
    cellPend.style.textAlign = "center";
    var content2 = pendenza[k].toFixed(1).toString();
    cellPend.textContent = content2;
  }

  // scrivo rapporto su riga
  let posizione = [
    "0",
    "10B",
    "11A",
    "8B",
    "10B",
    "9A",
    "10A",
    "9B",
    "8B",
    "7B",
    "10A",
    "10B",
    "9A",
  ];
  for (let k = 1; k < posizione.length; k++) {
    var row1Pos = document.getElementsByTagName("tr")[5];
    var cellPos = row1Pos.getElementsByTagName("td")[k];
    cellPos.style.textAlign = "center";
    var content2 = posizione[k];
    cellPos.textContent = content2;
  }

  // power su riga 3 calcolato da velocità
  var row1Power = document.getElementsByTagName("tr")[2];
  var cellPower = row1Power.getElementsByTagName("td")[2];
  cellPower.style.textAlign = "center";
  var velocitaKm1 =
    (parseFloat(selectedPignone[0]) * parseFloat(roundPm[0]) * 1.507) / 60;

  var powerKm1 =
    parseFloat(selectedOption) *
      parseFloat(pendenza[1] / 100) *
      velocitaKm1 *
      9.81 +
    parseFloat(selectedOption) * velocitaKm1 * 0.03924 +
    0.1968 * velocitaKm1 ** 3;

  var row1Power = document.getElementsByTagName("tr")[2];
  var cell1Power = row1Power.getElementsByTagName("td")[1];
  cell1Power.style.textAlign = "center";
  powerKm1 = powerKm1.toFixed(0);
  cell1Power.textContent = powerKm1;

  // Minuti Km 1 su riga 4 (e anche 5 come aggregate)
  var durata = ((km[1] - km[0]) * 1000) / velocitaKm1 / 60;
  var minuti = durata.toFixed(2);
  const minutes = Math.floor(minuti);
  const seconds = Math.floor((minuti - minutes) * 60);
  formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  //console.log("time Km1", formattedTime);
  var row1Min = document.getElementsByTagName("tr")[3];
  var row1Copy = document.getElementsByTagName("tr")[4];
  var cellMin = row1Min.getElementsByTagName("td")[1];
  var cellMinCopy = row1Copy.getElementsByTagName("td")[1];
  cellMin.style.textAlign = "center";
  cellMinCopy.style.textAlign = "center";
  cellMin.textContent = formattedTime;
  const duration1 = formattedTime;
  const duration2 = timePag1;
  const totalDuration = addDurations(duration1, duration2);
  cellMinCopy.textContent = totalDuration;
  cellMinAggr.push(totalDuration);
}

function km2() {
  var selectedOption = localStorage.getItem("Data1");
  // power su riga 3 calcolato da velocità
  roundPm.push(document.getElementById("rpm2").value);
  // console.log("rpm km2", roundPm[1]);
  var velocitaKm2 =
    (parseFloat(selectedPignone[1]) * parseFloat(roundPm[1]) * 1.507) / 60;

  var powerKm1 =
    parseFloat(selectedOption) *
      parseFloat(pendenza[2] / 100) *
      velocitaKm2 *
      9.81 +
    parseFloat(selectedOption) * velocitaKm2 * 0.03924 +
    0.1968 * velocitaKm2 ** 3;

  var row1Power = document.getElementsByTagName("tr")[2];
  var cell1Power = row1Power.getElementsByTagName("td")[2];
  cell1Power.style.textAlign = "center";
  powerKm1 = powerKm1.toFixed(0);
  cell1Power.textContent = powerKm1;

  // Minuti Km 2 su riga 4 cella 3
  var durata = ((km[2] - km[1]) * 1000) / velocitaKm2 / 60;
  var minuti = durata.toFixed(2);
  const minutes = Math.floor(minuti);
  const seconds = Math.floor((minuti - minutes) * 60);
  formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  //console.log("time km2", formattedTime);
  var row1Min = document.getElementsByTagName("tr")[3];
  var cellMin = row1Min.getElementsByTagName("td")[2];
  cellMin.style.textAlign = "center";
  cellMin.textContent = formattedTime;
  cellMinAggr.push(formattedTime);

  // tempo aggregato
  const duration1 = cellMinAggr[0];
  const duration2 = cellMinAggr[1];
  const totalDuration = addDurations(duration1, duration2);
  var row1Agg = document.getElementsByTagName("tr")[4];
  var cell2 = row1Agg.getElementsByTagName("td")[2];
  cell2.style.textAlign = "center";
  cell2.innerText = totalDuration;
  cellMinTempoTotale.push(totalDuration);
}

// funzione dal km3 in poi //

function kmTest(kilometro) {
  var selectedOption = localStorage.getItem("Data1");
  // power su riga 3 calcolato da velocità
  var updatedRpm = "rpm" + kilometro.toString();
  roundPm.push(document.getElementById(updatedRpm).value);
  var velocitaKm3 =
    (parseFloat(selectedPignone[kilometro - 1]) *
      parseFloat(roundPm[kilometro - 1]) *
      1.507) /
    60;
  // console.log(
  //   "pignone=",
  //   selectedPignone[kilometro - 1],
  //   "RPM=",
  //   roundPm[kilometro - 1]
  // );
  var powerKm1 =
    parseFloat(selectedOption) *
      parseFloat(pendenza[kilometro] / 100) *
      velocitaKm3 *
      9.81 +
    parseFloat(selectedOption) * velocitaKm3 * 0.03924 +
    0.1968 * velocitaKm3 ** 3;
  // console.log("power=", powerKm1);
  var row1Power = document.getElementsByTagName("tr")[2];
  var cell1Power = row1Power.getElementsByTagName("td")[kilometro];
  cell1Power.style.textAlign = "center";
  powerKm1 = powerKm1.toFixed(0);
  cell1Power.textContent = powerKm1;

  // Minuti Km 3
  var durata = ((km[kilometro] - km[kilometro - 1]) * 1000) / velocitaKm3 / 60;
  var minuti = durata.toFixed(2);
  const minutes = Math.floor(minuti);
  const seconds = Math.floor((minuti - minutes) * 60);
  formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  var row1Min = document.getElementsByTagName("tr")[3];
  var cellMin = row1Min.getElementsByTagName("td")[kilometro];
  cellMin.style.textAlign = "center";
  cellMin.textContent = formattedTime;
  cellMinAggr.push(formattedTime);

  // tempo aggregato
  const duration1 = cellMinAggr[kilometro - 1];
  const duration2 = cellMinTempoTotale[kilometro - 3];
  const totalDuration = addDurations(duration1, duration2);
  var row1Agg = document.getElementsByTagName("tr")[4];
  var cell2 = row1Agg.getElementsByTagName("td")[kilometro];
  cell2.style.textAlign = "center";
  cell2.innerText = totalDuration;
  cellMinTempoTotale.push(totalDuration);
  if (kilometro === 3) {
    localStorage.setItem("Data2", totalDuration);
  }
  if (kilometro === 6) {
    localStorage.setItem("Data3", totalDuration);
  }
  if (kilometro === 9) {
    localStorage.setItem("Data4", totalDuration);
  }
}

function addDurations(duration1, duration2) {
  // parse duration strings into minutes and seconds
  const [min1, sec1] = duration1.split(":").map((str) => parseInt(str, 10));
  const [min2, sec2] = duration2.split(":").map((str) => parseInt(str, 10));

  // add minutes and seconds separately
  let totalMin = min1 + min2;
  let totalSec = sec1 + sec2;

  // handle excess seconds
  if (totalSec >= 60) {
    totalMin += 1;
    totalSec -= 60;
  }

  // format output string
  const minStr = totalMin.toString().padStart(2, "0");
  const secStr = totalSec.toString().padStart(2, "0");
  return `${minStr}:${secStr}`;
}

// // set the content of the cell in row 3, column 5
// var row3 = document.getElementsByTagName("tr")[2];
// var cell5 = row3.getElementsByTagName("td")[4];
// var content = "This cell has a variable";
// cell5.textContent = content;

//   // Set the duration of the timer in seconds
//   const duration = 0;

//   // Select the HTML element where the timer will be displayed
//   const timerElement = document.getElementById("timer");

//   // Set the initial time remaining to the duration
//   let timeRemaining = duration;

//   // Update the timer every second
//   const timerInterval = setInterval(() => {
//     // Decrement the time remaining by 1 second
//     timeRemaining++;

//     // Calculate the minutes and seconds remaining
//     const minutes = Math.floor(timeRemaining / 60);
//     const seconds = timeRemaining % 60;
//     // Format the time as a string and display it in the timer element
//     const timeString =
//       minutes.toString().padStart(2, "0") +
//       ":" +
//       seconds.toString().padStart(2, "0");
//     // console.log("time", timeString)

//     document.getElementById("clock").innerHTML = timeString;

//     // If the time has run out, stop the timer
//     if (timeRemaining === 0) {
//       clearInterval(timerInterval);
//     }
//   }, 1000);
