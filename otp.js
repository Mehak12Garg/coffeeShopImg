const inputs=document.querySelectorAll("input"),
        button=document.querySelector("button"),
        mobile=document.getElementById("mobile"),
        expire=document.getElementById("expire");
        let OTP="",
        expireInterval=" ";
        function generateOTPs(){
         OTP=
         Math.floor(Math.random()*10)+""
         +Math.floor(Math.random()*10)+""
         +Math.floor(Math.random()*10)+""
         +Math.floor(Math.random()*10);
         alert("Your OTP is :"+ OTP);
        inputs[0].focus();
        expire.innerText=10;
         expireInterval=setInterval(function(){
          expire.innerText--;  
          if(expire.innerText==0){
            clearOTPs(expireInterval);
            }
          
          
        },1000);
      }
function clearOTPs(){
inputs.forEach((input)=>{
  input.value="";
});
clearInterval(expireInterval);
}


window.addEventListener("load",()=>{
  let x=prompt("Please enter your mobile number to verify your account");
  if(x){
    mobile.innerText=x;
    generateOTPs();
  }
})
button.addEventListener("click",()=>{
  let verify="";
inputs.forEach((input)=>{
  verify += input.value;
})
console.log(verify)
console.log(OTP)
   
    if(verify === OTP){
      alert("Your account has been verified succesfully !");
      
    }else{
      alert("Verification failed");
    }
  
})