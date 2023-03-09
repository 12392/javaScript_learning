// change text 

// textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText);
// mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);


// <h2 id="main-heading">
//           Manage your tasks <span style="display: none">Hello</span>
//         </h2>

// We can see above in  textContent it is showing the text hello even it is written display:none
// but in innertext it will not show hello due to display: none