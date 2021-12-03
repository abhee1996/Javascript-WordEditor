//orderListbtn.addEventListener('click', clickOList)
orderListbtn.addEventListener('focus', clickOListHighlited)
function clickOListHighlited() {
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  let selectedParentEle =selectedParent.parentElement
  if (selectedParent.closest("ol")) {
    //undo <ol>'s
    UndoSelection(mainParent,selectedParentEle,selectedParent)
  }
  else {
    orderListbtn.removeEventListener('click', clickOList)
    var liNode = elementCreator("li");
    const olNode = elementCreator("ol");
    liNode.appendChild(selection.extractContents());
    olNode.appendChild(liNode);
    selection.insertNode(olNode);
    mainParent.normalize();
  }
}
function clickOList() {
    debugger
  var ol = elementCreator('ol')
  var li = elementCreator("li");
  ol.appendChild(li);
  result.appendChild(ol)
}