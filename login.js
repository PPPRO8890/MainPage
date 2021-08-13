function activeregister(){
  console.log("hi")
 document.getElementsByClassName("logincontent")[0].style.display= "none";
   document.getElementsByClassName("registercontent")[0].style.display= "block";
   document.getElementsByClassName("phonecontent")[0].style.display= "none";
   document.getElementsByClassName("phonelogincontent")[0].style.display= "none";

const regtext= document.getElementsByClassName("upperRegisterbuttonactive")[0]
regtext.classList.remove( "upperRegisterbuttonactive")
  const regbeg= document.getElementsByClassName("RegisterBackgroundactive")[0]
  regbeg.classList.remove( "RegisterBackgroundactive")

  const lgtext= document.getElementsByClassName("upperLoginbutton")[0]
lgtext.classList.remove( "upperLoginbutton")
  const lgbeg= document.getElementsByClassName("LoginBackground")[0]
  lgbeg.classList.remove( "LoginBackground")

  const mn= document.getElementsByClassName("Mainlogin3")[0]
  mn.style.borderTopRightRadius = "0";
  mn.style.borderTopLeftRadius = "1em";

  document.getElementsByClassName(" Mainlogin3")[0].style.height= "53vh"
}
function activelogin(){
  console.log("hi")
document.getElementsByClassName("logincontent")[0].style.display= "block";
   document.getElementsByClassName("registercontent")[0].style.display= "none";
   document.getElementsByClassName("phonecontent")[0].style.display= "none";
   document.getElementsByClassName("phonelogincontent")[0].style.display= "none";
  

  const regtext= document.getElementsByClassName("upperRegisterbutton")[0]
regtext.classList.add( "upperRegisterbuttonactive")
  const regbeg= document.getElementsByClassName("RegisterBackground")[0]
  regbeg.classList.add( "RegisterBackgroundactive")

  const lgtext= document.getElementsByClassName("upperLoginbuttonactive")[0]
  lgtext.classList.add( "upperLoginbutton")
      const lgbeg= document.getElementsByClassName("LoginBackgroundactive")[0]
      lgbeg.classList.add( "LoginBackground")

      const mn= document.getElementsByClassName("Mainlogin3")[0]
      mn.style.borderTopRightRadius = "1em";
      mn.style.borderTopLeftRadius = "0";

      document.getElementsByClassName(" Mainlogin3")[0].style.height= "42.5vh"
}


function activephone(){
  
  document.getElementsByClassName("registercontent")[0].style.display= "none";
  document.getElementsByClassName("phonecontent")[0].style.display= "block";
}
function emailactive(){
  console.log("hi")
  document.getElementsByClassName("registercontent")[0].style.display= "block";
  document.getElementsByClassName("phonecontent")[0].style.display= "none";

}
function loginphone(){
  document.getElementsByClassName("logincontent")[0].style.display= "none";
  document.getElementsByClassName("phonelogincontent")[0].style.display= "block";

}
function loginemailactive(){
  document.getElementsByClassName("logincontent")[0].style.display= "block";
  document.getElementsByClassName("phonelogincontent")[0].style.display= "none";

}
function logineye(){
  console.log("ahfbksjdfn")
  const a=document.getElementsByClassName("loginpassword")[0];
  a.setAttribute("type","text")
  document.getElementsByClassName("passeyes")[0].style.display= "none";
  document.getElementsByClassName("passeyes1")[0].style.display= "block";  
}
function logineye1(){
  console.log("ahfbksjdfn")
  const a=document.getElementsByClassName("loginpassword")[0];
  a.setAttribute("type","password")
  document.getElementsByClassName("passeyes")[0].style.display= "block";
  document.getElementsByClassName("passeyes1")[0].style.display= "none";  
}
function reye(){

  const a=document.getElementsByClassName("logindata1P")[0];
  a.setAttribute("type","text")
  document.getElementsByClassName("rpasseyes")[0].style.display= "none";
  document.getElementsByClassName("rpasseyes1")[0].style.display= "block";  
}
function reye1(){

  const a=document.getElementsByClassName("logindata1P")[0];
  a.setAttribute("type","password")
  document.getElementsByClassName("rpasseyes")[0].style.display= "block";
  document.getElementsByClassName("rpasseyes1")[0].style.display= "none";  
}
function reyeP(){
  const a=document.getElementsByClassName("logindata2P")[0];
  a.setAttribute("type","text")
  document.getElementsByClassName("Ppasseyes")[0].style.display= "none";
  document.getElementsByClassName("Ppasseyes2")[0].style.display= "block"; 

}
function reye2(){
  const a=document.getElementsByClassName("logindata2P")[0];
  a.setAttribute("type","password")
  document.getElementsByClassName("Ppasseyes")[0].style.display= "block";
  document.getElementsByClassName("Ppasseyes2")[0].style.display= "none"; 

}