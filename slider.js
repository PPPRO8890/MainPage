const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const sliderInner=document.querySelector(".slider-inner");
let nindex=0;
let pindex=0

next.addEventListener('click',function(){
  nindex++;
  sliderInner.style.transform=`translateX(${-9.9*nindex}em)`;
  if (nindex==4){
    next.style.display="none";
  }
  if (nindex!=0){
    prev.style.display="block";
  }
})

prev.addEventListener('click',function(){
  nindex--;

  pindex++;
  if (nindex==0){
    prev.style.display="none"
  }
  if (nindex!=4){
    next.style.display="block";
  }
  sliderInner.style.transform=`translateX(${-9.9*nindex}em)`})