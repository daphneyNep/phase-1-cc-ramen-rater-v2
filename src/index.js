// index.js











document.addEventListener("DOMContentLoaded", function(){
  main();
  displayRamens();
  addSubmitListener()
  
  
})
const imgElement = document.createElement('img')



function getRamens() {
  
  
  
}
  
function renderRamens(ramens){
  ramens.forEach(ramen => {
    renderRamen(ramen)
  })

}

function renderRamen(ramen){
  

  const img = document.createElement('img');

  
  const ramenmenu = document.getElementById('ramen-menu')
  

  
  
  
  img.alt = ramen.name
  img.src = ramen.image
  
 

  ramenmenu.appendChild(img)
}  








    


const handleClick = () => { 
  const form = document.getElementById('new-ramen')
  form.addEventListener('submit', event =>{
   event.preventDefault();

     
     img.src = ramen.image;
     img.alt = ramen.name

     img.addEventListener('click', () => handleClick({ name, image, rating })); 
     ramenMenu.appendChild(img);
 

  })
}  
  





const addSubmitListener = ()=>{
  const form = document.getElementById('new-ramen');
  
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const ramenImg = document.getElementById("new-image")

    
  let newRamen = {
    
    image: ramenImg.value
    
  };

  addRamenToMenu(newRamen);

  form.reset()

});
}    
   
function addRamenToMenu(ramen){
  const ramenMenu = document.getElementById('ramen-menu');

  const img = document.createElement('img');
  
    img.src = ramen.image
    img.alt = ramen.name


  ramenMenu.appendChild(img)

document.addEventListener('DOMContentLoaded', addSubmitListener)
}



   
    
  

  



const displayRamens = () => { 
  
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramens => {
    renderRamens(ramens)
  
  })


  }
 
  
 




  




  
   
const main = () => {
    window.onload = () => {
      displayRamens();
      addSubmitListener();
  };
  }
  
  
  
 
  

 



  







  

main()

