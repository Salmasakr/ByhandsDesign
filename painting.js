const reviewstars=document.querySelectorAll(".review i");
reviewstars.forEach((star,index)=>{
  star.addEventListener("click",()=>{
      reviewstars.forEach((el)=>el.classList.remove("fas","checked"));
     for(let i=0;i<=index;i++)
     {
      reviewstars[i].classList.add("fas","checked");
     }
  const starcount=document.querySelectorAll(".review i.checked").length;
  console.log(starcount);
  });
});
