// by default event bubbling happens of by default the 3rd argument is false
// if the 3rd argument is false eventCapturing happens
// ie if event capturing is true for a div, any events happening on any of its children are  captured by that div
// event capturing is also called event trickling

const onClickChild = (e) => {
  console.log("Child clicked");
  e.stopPropagation();
};
const onClickParent = (e) => {
  console.log("Parent clicked");
};
const onClickGrandParent = (e) => {
  console.log("GrandParent clicked");
};

let child = document.getElementById("child");
child.addEventListener("click", onClickChild, false);

let parent = document.getElementById("parent");
parent.addEventListener("click", onClickParent, false);

let grandParent = document.getElementById("grand-parent");
grandParent.addEventListener("click", onClickGrandParent, false);
