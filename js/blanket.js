


  var ProductImg =document.getElementById("productimg");
  var SmallImg =document.getElementsByClassName("small-img");

  SmallImg[0].onclick=function()
  {
    ProductImg.scr=SmallImg[0].src;
  }

  SmallImg[1].onclick=function()
  {
    ProductImg.src=SmallImg[1].src;
  }
  
  SmallImg[2].onclick=function()
  {
    ProductImg.src=SmallImg[2].src;
  }
  
  SmallImg[3].onclick=function()
  {
    ProductImg.src=SmallImg[3].src;
  }
  SmallImg[4].onclick=function()
  {
    ProductImg.src=SmallImg[4].src;
  }
  SmallImg[5].onclick=function()
  {
    ProductImg.src=SmallImg[5].src;
  }
  

  
let count=0;
const counter=document.getElementById("counter");
document.getElementById("add-animation").addEventListener('click',event=>{
  const cl=counter.classList;
  const c='.animated-counter';
  count++;

  counter.innerText=count;
  cl.remove(c,cl.contains(c));
  setTimeout(()=>
  counter.classList.add('animated-counter')
  ,1)
})
