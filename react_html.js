
var result = document.getElementById("result")
var rightClickTagMenu = document.getElementById('div-context-menu');
var rightClickTableMenu = document.getElementById('table-context-menu');
var generateRows = document.getElementById('numofrows')
var generateCols = document.getElementById('numofcols')
var orderListbtn = document.getElementById('orderlist')
var unOrderListBtn = document.getElementById('unorderlist')

function LoremIpsum() {
  var lor = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ipsa eum deleniti eos? Ea explicabo ad rerum vel natus maiores tenetur, impedit dignissimos porro fugiat minima minus inventore iusto adipisci.'
  var text = document.createTextNode(lor);
   result.appendChild(text)
}

result.addEventListener("keydown", function (event) {
  const CtrlKey = event.ctrlKey;
  const AltKey = event.altKey;
  const eventKey = event.key
  if (AltKey && eventKey === "b") {
    addBold()
  }
  else if (AltKey && eventKey === "i") {
    addItalic()
  }
  else if (AltKey && eventKey === "u") {
    addUnderline()
  }
  else if (AltKey && eventKey === "l") {
    LoremIpsum()
  }
  else {
    return
  }
})
atags = `<a href="#">link</a>`
divtag = `<div class=""></div>`
tabletag = `<table>\n\t<tr>\n\t\t<td>item1</td>\n\t\t<td>item2</td>\n\t</tr>\n</table>`
rightClickTableMenu.style.display = 'none'
rightClickTagMenu.style.display = 'none'

rightClickTableMenu.addEventListener("click", function (e) {
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
    result.innerText = atags
  } else if (elmntId.startsWith("tabletag")) {
    result.innerText = clickTable()
  }
  else if (elmntId.startsWith("divtag")) {
    result.innerText = divtag
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
window.onload = function () {
  result.focus();
};

function elementCreator(nodeName, nodText, ...attr) {
  var ele = document.createElement(nodeName)
  if (attr[0]) ele.setAttribute('id', attr[0]) //attrId
  if (attr[1]) ele.setAttribute('type', attr[1])//attrType
  if (attr[2]) ele.setAttribute('class', attr[2])//atrCls
  if (attr[2]) ele.setAttribute('style', attr[3])//atrCls

  if (nodText) ele.innerHTML = nodText
  return ele
}
function CreateElementAndAppendInParent(parent, nodName, nodText, ...attr) {
  //create element and append in parent element and also add attribute of id,class,type,or style
  var ele = document.createElement(nodName)
  if (attr[0]) ele.setAttribute('type', attr[0])//attrType
  if (attr[1]) ele.setAttribute('id', attr[1]) //attrId
  if (attr[2]) ele.setAttribute('class', attr[2])//atrClass
  if (nodText) ele.innerHTML = nodText
  if (parent) {
      return parent.appendChild(ele)
  }
  else {
      return ele
  }
}
function elementAppend(parent, child) {
  //function for appent element
  return parent.appendChild(child)
}

function UndoSelection(...arg){
  // var text =document.createTextNode(mainPrnt)
  // mainPrnt = selParentEle
  // mainPrnt.insertBefore(text,selParnt)
  // mainPrnt.removeChild(selParnt)
  // mainPrnt.normalize()
  var text =document.createTextNode(arg[0])
  arg[0] = arg[1]
  arg[0].insertBefore(text,arg[2])
  arg[0].removeChild(arg[2])
  arg[0].normalize()
}
function doSelection(...args){
  // const boldtag = elementCreator('b')
  // boldtag.appendChild(selection.extractContents());
  // selection.insertNode(boldtag);
  // mainParent.normalize();
  const createNode = document.createElement(args[0])
  createNode.appendChild(args[1]);
  args[2].insertNode(createNode);
  args[3].normalize();
}











































//ADD <BR> breakline 
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