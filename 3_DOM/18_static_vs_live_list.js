// When we add element in NODELIST(querySelector) it will not update the list -----> static
// When we add element in HTMLCOLLECTION(getElemntBy) it will  update the list ---> live 
 


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);