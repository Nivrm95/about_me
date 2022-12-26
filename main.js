function handleClick(id) {
    console.log ("Element Clicked");
    document.getElementById(id).style.color="red";
//PlacesIIove.style.color="red";
//ContactMe.style.color="red";
}


function delayHandleClick(id) {
  setTimeout(()=>handleClick(id), 3000);
}

function dark(){
let flag = document.getElementById(`Dark`).value;
if (flag == 'off'){
  document.body.setAttribute('class', 'darkMood')
  document.getElementById('Dark').value = 'on'

} else{ 
  document.body.setAttribute('class', 'body')
  document.getElementById('Dark').value = 'off' 
}
}




const foods = ["Red Kobe", "hamburger and french fries", "Fried Schnitzel"];
let makeList = `<ul>`;
for (let index = 0; index < foods.length; index++) {
  const element = foods[index];
  makeList += `<li>${element}</li>`;
}
makeList += `</ul>`;
document.getElementById("myFood-id").outerHTML = makeList;

