var Bold = document.getElementById('bold')
var italic = document.getElementById('italic')
var underLine = document.getElementById('underline')
var subScript = document.getElementById('subscript')
var superScript = document.getElementById('superscript')

underLine.addEventListener('click',addUnderline)
function addUnderline() {
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  let selectedParentEle =selectedParent.parentElement
  if (selectedParent.closest("u")) {
    //Undo Underline
    UndoSelection(mainParent,selectedParentEle,selectedParent)
  }
  else {
    const span = elementCreator('u')
    span.appendChild(selection.extractContents());
    selection.insertNode(span);
    mainParent.normalize();
  }
};
italic.addEventListener('click',addItalic)
function addItalic() {
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  let selectedParentEle =selectedParent.parentElement
  if (selectedParent.closest("i")) {
    //Undo Italic
    UndoSelection(mainParent,selectedParentEle,selectedParent)
  }
  else {
    const italic = elementCreator('i')
    italic.appendChild(selection.extractContents());
    selection.insertNode(italic);
    mainParent.normalize();
  }
};
Bold.addEventListener('click',addBold)
function addBold() {
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
 let mainParent = selectedParent.textContent;
 let selectedParentEle =selectedParent.parentElement
  if (selectedParent.closest('b')) {
    //Undo bold
    UndoSelection(mainParent,selectedParentEle,selectedParent)
  }
  else {
    const boldtag = elementCreator('b')
    boldtag.appendChild(selection.extractContents())
    selection.insertNode(boldtag);
    mainParent.normalize();
  }
};
function wordTools(s) {
    const selection = window.getSelection().getRangeAt(0);
    let selectedParent = selection.commonAncestorContainer.parentElement;
    let mainParent = selectedParent.textContent;
    let selectedParentEle = selectedParent.parentElement

    
    if (s === "sub") {
        if (selectedParent.closest(s)) {
            //Undo Sub
            UndoSelection(mainParent, selectedParentEle, selectedParent)
        }
        else {
            //doSelection('sub',selection.extractContents(),selection,mainParent)
            const subNode = elementCreator('sub')
            subNode.appendChild(selection.extractContents());
            selection.insertNode(subNode);
            mainParent.normalize();
        }
    }
    else if (s === "sup") {
        if (selectedParent.closest(s)) {
            //Undo Super
            UndoSelection(mainParent, selectedParentEle, selectedParent)
        }
        else {
            //doSelection('sup',selection.extractContents(),selection,mainParent)
            const supNode = elementCreator('sup')
            supNode.appendChild(selection.extractContents());
            selection.insertNode(supNode);
            mainParent.normalize();
        }
    }
    // else if (s === "b") {
    //  if (selectedParent.closest(s)) {
    //      //Undo bold
    //      UndoSelection(mainParent, selectedParentEle, selectedParent)
    //  }
    //  else {
    //      //doSelection('b',selection.extractContents(),selection,mainParent)

    //      const boldtag = elementCreator('b')
    //      boldtag.appendChild(selection.extractContents());
    //      selection.insertNode(boldtag);
    //      mainParent.normalize();
    //  }
    // }
    else {
        return
    }

};
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
function UndoSelection(...arg) {
    // var text =document.createTextNode(mainParent)
    // mainPrnt = selectionParent.ParentElement
    // mainPrnt.insertBefore(text,selectionParent)
    // mainPrnt.removeChild(selectionParent)
    // mainPrnt.normalize()
    var text = document.createTextNode(arg[0])
    arg[0] = arg[1]
    arg[0].insertBefore(text, arg[2])
    arg[0].removeChild(arg[2])
    arg[0].normalize()
}

function doSelection(...args) {
    // const bNode = elementCreator('b')
    // bNode.appendChild(selection.extractContents());
    // selection.insertNode(bNode);
    // mainParent.normalize();
    const createNode = document.createElement(args[0])
    createNode.appendChild(args[1]);
    args[2].insertNode(createNode);
    args[3].normalize();
}

