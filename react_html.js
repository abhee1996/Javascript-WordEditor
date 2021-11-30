
var myFrame = document.getElementById("result")
console.log(`myFrame`, myFrame)
var focusData = document.getElementById("result")
var rightClickTagMenu = document.getElementById('div-context-menu');
var rightClickTableMenu = document.getElementById('table-context-menu');
var generateRows = document.getElementById('numofrows')
var generateCols = document.getElementById('numofcols')

// focusData.addEventListener('keydown', function onKeyDown(e) {
//   // Only listen for plain returns, without any modifier keys
//   if (e.which != 13 || e.shiftKey || e.ctrlKey || e.altKey) {
//     return;
//   }

//   let doc_fragment = document.createDocumentFragment();

//   // Create a new break element
//   let new_ele = document.createElement('br');
//   doc_fragment.appendChild(new_ele);

//   // Get the current selection, and make sure the content is removed (if any)
//   let range = document.getSelection().getRangeAt(0);
//   range.deleteContents(); // The Range.deleteContents() method removes the contents of the Range from the Document. 

//   // See if the selection container has any next siblings
//   // If not: add another break, otherwise the cursor won't move
//   if (!hasNextSibling(range.endContainer)) {
//     let extra_break = document.createElement('br');
//     doc_fragment.appendChild(extra_break);
//   }

//   range.insertNode(doc_fragment);

//   //create a new range
//   range = document.createRange();
//   range.setStartAfter(new_ele);
//   range.collapse(true);

//   //make the caret there
//   let sel = window.getSelection();
//   sel.removeAllRanges();
//   sel.addRange(range);

//   e.stopPropagation();
//   e.preventDefault();

//   return false;
// });

// // See if the given node has a next sibling.
// // Either any element or a non-empty node
// function hasNextSibling(node) {

//   if (node.nextElementSibling) {
//     return true;
//   }

//   while (node.nextSibling) {
//     node = node.nextSibling;

//     if (node.length > 0) {
//       return true;
//     }
//   }

//   return false;
// }
function LoremIpsum() {
  var lor = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ipsa eum deleniti eos? Ea explicabo ad rerum vel natus maiores tenetur, impedit dignissimos porro fugiat minima minus inventore iusto adipisci.'
  var text = document.createTextNode(lor);
   focusData.appendChild(text)
}
function clickUnderline() {
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  console.log('select italic', selection)
  if (selectedParent.closest("u")) {
    //UnUnderline
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const span = document.createElement("u");
    span.appendChild(selection.extractContents());
    selection.insertNode(span);
    mainParent.normalize();
  }

};
function clickItalic() {
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  console.log('select italic', selection)
  if (selectedParent.closest("i")) {
    //UnItalic
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const span = document.createElement("i");
    span.appendChild(selection.extractContents());
    selection.insertNode(span);
    mainParent.normalize();
  }
};

function clickBold(b) {
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
 let mainParent = selectedParent.textContent;
//var b= "b"
  if (selectedParent.closest(b)) {
    //Unbold
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const boldtag = document.createElement("b");
    boldtag.appendChild(selection.extractContents());
    selection.insertNode(boldtag);
    mainParent.normalize();
  }
};
function wordTools(s) {
  debugger
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  if( s ==="b"){
    if (selectedParent.closest(s)) {
      //Unbold
      var text = document.createTextNode(selectedParent.textContent);
      mainParent = selectedParent.parentElement;
      mainParent.insertBefore(text, selectedParent);
      mainParent.removeChild(selectedParent);
      mainParent.normalize();
    }
    else {
      const boldtag = document.createElement("b");
      boldtag.appendChild(selection.extractContents());
      selection.insertNode(boldtag);
      mainParent.normalize();
    }
  }
  else if(s === "sub"){
    if (selectedParent.closest(s)) {
      //UnSub
      var text = document.createTextNode(selectedParent.textContent);
      mainParent = selectedParent.parentElement;
      mainParent.insertBefore(text, selectedParent);
      mainParent.removeChild(selectedParent);
      mainParent.normalize();
    }
    else {
      const subNode = document.createElement("sub");
      subNode.appendChild(selection.extractContents());
      selection.insertNode(subNode);
      mainParent.normalize();
    }
  }
  else if(s === "sup"){
  if (selectedParent.closest(s)) {
    //UnSuper
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const supNode = document.createElement("sup");
    supNode.appendChild(selection.extractContents());
    selection.insertNode(supNode);
    mainParent.normalize();
  }
  }
 
  else {
    return
  }

};
 var subScript = document.getElementById('subscript')
 var superScript = document.getElementById('superscript')
 var Bold = document.getElementById('bold')
 document.onclick = function (e) {
  var elmnt = e.target.id
  if (elmnt.startsWith("subscript")) {
    var sub = "sub"
    subScript.addEventListener('click',wordTools(sub))

  }
  else if(elmnt.startsWith("superscript")){
    var sup = "sup"
   superScript.addEventListener('click',wordTools(sup))
  }
  else if(elmnt.startsWith("bold")){
    var b = "b"
    Bold.addEventListener('click',wordTools(b))
  }
  else{
    return
  }
 }
 

focusData.addEventListener("keydown", function (event) {
  const CtrlKey = event.ctrlKey;
  const AltKey = event.altKey;
  const eventKey = event.key
  if (AltKey && eventKey === "b") {
    clickBold()
  }
  else if (AltKey && eventKey === "i") {
    clickItalic()
  }
  else if (AltKey && eventKey === "p") {
    clickParagraph()
  }
  else if (AltKey && eventKey === "u") {
    clickUnderline()
  }
  
  else if (AltKey && eventKey === "s") {

    clickUnOList()
  }
  else if (AltKey && eventKey === "]") {
    clickOList()
  }
  else if (AltKey && eventKey === "l") {
    LoremIpsum()
  }
  else {

    return
  }

})
document.body.onclick = function (e) {
  rightClickTagMenu.style.display = 'none';
}

atags = `<a href="#">link</a>`
divtag = `<div class=""></div>`
tabletag = `<table>\n\t<tr>\n\t\t<td>item1</td>\n\t\t<td>item2</td>\n\t</tr>\n</table>`
rightClickTableMenu.style.display = 'none'

rightClickTableMenu.addEventListener("click", function (e) {
  rightClickTableMenu.style.display = 'none'

  if (document.body) {
    rightClickTableMenu.style.display = 'block';
    generateRows.focus()
  }
  else {
    rightClickTableMenu.style.display = 'none'; 

  }
})
rightClickTagMenu.addEventListener("click", function (e) {
  var elmntId = e.target.id
  if (elmntId.startsWith("anchortag")) {
    focusData.innerText = atags
  } else if (elmntId.startsWith("tabletag")) {
    focusData.innerText = clickTable()
  }
  else if (elmntId.startsWith("divtag")) {
    focusData.innerText = divtag
  } else {
    rightClickTagMenu.style.display = 'none'
  }
})
document.oncontextmenu = function (e) {
  var elmnt = e.target.id
  if (elmnt.startsWith("result")) {
    e.preventDefault();
    rightClickTagMenu.style.left = e.pageX + 'px'
    rightClickTagMenu.style.top = e.pageY + 'px'
    rightClickTagMenu.style.display = 'block'
  }
  else {
    rightClickTagMenu.style.display = 'none'
  }
}

document.oncontextmenu = function (e) {
  var elmnt = e.target.id
  if (elmnt.startsWith("table")) {
    e.preventDefault();
    rightClickTableMenu.style.left = e.pageX + 'px'
    rightClickTableMenu.style.top = e.pageY + 'px'
    rightClickTableMenu.style.display = 'block'
    generateRows.focus()
  }
  else {
    rightClickTagMenu.style.display = 'none'
    rightClickTableMenu.style.display = 'none'
  }
}
var ulbtn = document.getElementById('unorderlist')
ulbtn.addEventListener('click', clickUnOList)
ulbtn.addEventListener('focus', clickUListHighlited)
function clickUListHighlited() {
  //if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  if (selectedParent.closest("ul")) {
    //remove unorderlist
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    ulbtn.removeEventListener('click', clickUnOList)

    var liNode = document.createElement("li");
    const ulNode = document.createElement("ul");
    liNode.appendChild(selection.extractContents());
    ulNode.appendChild(liNode);
    //selection.insertNode(liNode);

    selection.insertNode(ulNode);
    mainParent.normalize();
  }
}
function clickUnOList() {
  var ul = document.createElement("ul")
  var li = document.createElement("li");
  ul.appendChild(li);
  focusData.appendChild(ul)

}
var olistbtn = document.getElementById('orderlist')
olistbtn.addEventListener('click', clickOList)
olistbtn.addEventListener('focus', clickOListHighlited)
function clickOListHighlited() {
  //if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  if (selectedParent.closest("ol")) {
    //remove unorderlist
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    olistbtn.removeEventListener('click', clickOList)
    var liNode = document.createElement("li");
    const olNode = document.createElement("ol");
    liNode.appendChild(selection.extractContents());
    olNode.appendChild(liNode);
    //selection.insertNode(liNode);
    selection.insertNode(olNode);
    mainParent.normalize();
  }
}
function clickOList() {
  var ol = document.createElement("ol")
  var li = document.createElement("li");
  ol.appendChild(li);
  focusData.appendChild(ol)

}

window.onload = function () {
  focusData.focus();
};



