

var newRandomIdDIv = "newtable" + Math.random() + "";
var result = document.getElementById("result")

function generateTable(rw, cl) {
  var tbl = CreateElementAndAppendInParent(result,"table", false,false,`${newRandomIdDIv}`,'table')
  var tblBody = CreateElementAndAppendInParent(tbl,"tbody")
  for (var i = 1; i <= rw; i++) {
    var row = CreateElementAndAppendInParent(tblBody,"tr")
    for (var j = 1; j <= cl; j++) {
      var cell = CreateElementAndAppendInParent(row,"td")
      var cellText = document.createTextNode("r" + i + ",c" + j);
      elementAppend(cell,cellText)
    }
  }
}

var tableGen = document.getElementById("tableGen")
tableGen.addEventListener('click', function () {
  var rows = parseInt(generateRows.value)  //window.prompt("")//generateRows.valueAsNumber
  var cols = parseInt(generateCols.value) //window.prompt("")//generateCols.valueAsNumber
  var table = generateTable(rows, cols);
  generateRows.value = null
  generateCols.value = null
})




// function generateTable(rw, cl) {
//   // creates a <table> element and a <tbody> element
//   var tbl = elementCreator("table", false,`${newRandomIdDIv}`,false,'table')
//   //elementCreator("table", false,`${newRandomIdDIv}`,false,'table')
//   var tblBody = elementCreator("tbody") 
//   // creating all cells
//   for (var i = 1; i <= rw; i++) {
//     // creates a table row
//     var row = elementCreator("tr")
//     for (var j = 1; j <= cl; j++) {
//       var cell = elementCreator("td")
//       var cellText = document.createTextNode("r" + i + ",c" + j);
//       elementAppend(cell,cellText)
//       elementAppend(row,cell)
//     }
//     // add the row to the end of the table body
//     elementAppend(tblBody,row)
//   }
//   // put the <tbody> in the <table>
//   elementAppend(tbl,tblBody)
//   // appends <table> into <body>
//   elementAppend(result,tbl)
// }



// OLD CREATE TABLE CODE HAVE ERROR
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