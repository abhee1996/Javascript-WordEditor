unOrderListBtn.addEventListener('focus', clickUListHighlited)
function clickUListHighlited() {
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  let selectedParentEle =selectedParent.parentElement
  if (selectedParent.closest("ul")) {
    //undo <ul>'s
    UndoSelection(mainParent,selectedParentEle,selectedParent)
  }
  else {
    unOrderListBtn.removeEventListener('click', clickUnOList)
    var liNode =elementCreator('li') 
    const ulNode = elementCreator('ul')
    liNode.appendChild(selection.extractContents());
    ulNode.appendChild(liNode);

    selection.insertNode(ulNode);
    mainParent.normalize();
  }
}
function clickUnOList() {
  var ul = elementCreator('ul')
  var li = elementCreator('li')
  ul.appendChild(li);
  result.appendChild(ul)

}