const input= document.getElementById("input")
const button = document.querySelectorAll("button")

button.forEach(element=>{
    element.addEventListener("click",(e)=>{
       console.log(e.target.textContent);
       if (e.target.textContent==="C") {
        input.innerHTML="";
    }
    else if(e.target.textContent==="<"){
        input.innerHTML=input.innerHTML.slice(0,-1);
    }
    else if(e.target.textContent==="="){
        input.innerHTML=eval(input.innerHTML)
    }
    else{
        input.innerHTML += e.target.textContent;
    }
    })
})
