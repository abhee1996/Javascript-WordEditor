// function createTable(rw, cl) {

//       var divTableNode = document.createElement('div');
//   var newRandomIdDIv = "newdiv" + Math.random(); //create unique id for div
//   divTableNode.setAttribute(`Id`, `${newRandomIdDIv}`) //set an attribute of id unique in the div
//   var tableNode = document.createElement("table")
//   tableNode.classList.add('table')
//   var newRandomIdDIv = "mewtablediv" + Math.random() + "";
//   tableNode.setAttribute(`Id`, ` ${newRandomIdDIv}  `)
//   divTableNode.appendChild(tableNode);
//   for (var r = 1; r <= rw; r++) {
//     var trNode = document.createElement("tr");
//     var newRandomIdDIv = "newtrdiv" + Math.random() + "";
//     trNode.setAttribute(`Id`, ` ${newRandomIdDIv}  `)
//     divTableNode.appendChild(tableNode);
//     tableNode.appendChild(trNode);
//     for (var i = 1; i <= cl; i++) {
//       var tdNode = document.createElement("td");
//       tdNode.setAttribute(`class`, `col`)
//       tdNode.innerHTML = `cols ${i} `;
//       trNode.appendChild(tdNode);
//       tableNode.appendChild(trNode);
//       divTableNode.appendChild(tableNode);
//     }
//   }
//   return divTableNode.outerHTML



// }

function generateTable(rw, cl) {
    // get the reference for the body
    //var body = document.getElementById("result") //[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var newRandomIdDIv = "newtablediv" + Math.random() + "";
    tbl.setAttribute(`Id`, ` ${newRandomIdDIv}  `)
    var tblBody = document.createElement("tbody");
    // creating all cells
    for (var i = 1; i <= rw; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 1; j <= cl; j++) {
  
        var cell = document.createElement("td");
        var cellText = document.createTextNode("row" + i + ",col" + j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    focusData.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("class", "table");
  }
  var tableGen = document.getElementById("tableGen")
  
  tableGen.addEventListener('click', function () {
    var rows = parseInt(generateRows.value)  //window.prompt("")//generateRows.valueAsNumber
    var cols = parseInt(generateCols.value) //window.prompt("")//generateCols.valueAsNumber
    var table = generateTable(rows, cols);
    generateRows.value = null
    generateCols.value = null
  })