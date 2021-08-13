const nexts=document.querySelector(".nextnextb");
const prevs=document.querySelector(".prevprevb");
const slider=document.querySelector(".slider-innerb");
let ni=0;
let pi=0

nexts.addEventListener('click',function(){
  ni++;
  slider.style.transform=`translateX(${-56.2*ni}em)`;
  if (ni==4){
    nexts.style.display="none";
  }
  if (ni!=0){
    prevs.style.display="block";
  }
})

prevs.addEventListener('click',function(){
  ni--;

  pi++;
  if (ni==0){
    prevs.style.display="none"
  }
  if (ni!=4){
    nexts.style.display="block";
  }
  slider.style.transform=`translateX(${-56.2*ni}em)`})