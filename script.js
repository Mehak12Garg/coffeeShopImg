let contact=document.querySelector("#contact-btn");
let change=()=>{
alert("Successfully submited");
}
let hour=document.querySelector("#hour");
let sec=document.querySelector("#sec");
let min=document.querySelector("#min");

setInterval(()=>{
    let date=new Date();
        hour.innerText=` ${date.getHours()}:`
        min.innerText=` ${date.getMinutes()}:`
        sec.innerText=` ${date.getSeconds()}`  
      }, 1000)

      setTimeout(()=>{
            let date=new Date();
            hour.innerText=` ${date.getHours()}:`
            min.innerText=` ${date.getMinutes()}:`
            sec.innerText=` ${date.getSeconds()}`  
      },5000)
//  otp verification
        