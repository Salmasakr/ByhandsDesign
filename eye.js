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