let butts = document.querySelectorAll("button");
let inp = document.querySelector('.Input')
let string = "";


Array.from(butts).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText == '='){
            string = eval(string);
            inp.value = string;
        }
        else if(e.target.innerText == "Ac"){
            string = " "
            inp.value = string;
        }
        else if(e.target.innerText == "C"){
            inp.value = inp.value.slice(0,-1);
            string = ""
        }
        else{
        console.log(e.target);
        string = string + e.target.innerText
        inp.value = string;
        }
    })
})