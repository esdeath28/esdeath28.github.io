//function for selecting elements
const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement('.open').addEventListener('click',() =>{
    selectElement('.nav-list').classList.add('active');

});

//close
selectElement('.close').addEventListener('click',() =>{
    selectElement('.nav-list').classList.remove('active');

});

