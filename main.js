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



const imagList = [ 
  {img:'assets/dog.jpeg',info:'my dog',class:"image1"}, 
  {img:'assets/italy.jpeg',info:'italy',class:"image2"},  
  {img:'assets/diving.jpeg',info:'diving',class:"image3"},
  {img:'assets/bike.jpeg',info:'bike',class:"image4"}, 
  {img:'assets/train.jpeg',info:'train',class:"image5"},  
  {img:'assets/car.jpeg',info:'car',class:"image6"},
]

function createGallert(itam){
  let makeList = '';

  for(let i = 0; i<itam.length; i++){
    makeList += `<img src=${itam[i].img} class=${itam[i].class}></img></div>`
  }
  return makeList;
}
document.getElementById('picList').innerHTML = createGallert(imagList);