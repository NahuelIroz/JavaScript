const display = document.querySelector('#display');
const buttons = document.querySelectorAll("button");
//vamos a recorrer todos los botones
buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id == "clear"){
            display.innerText = " "; //borra el texto por completo
        }else if(item.id == "bs"){
            let string = display.innerText.toString(); //captura todo el texto del display y lo transforma a string
            display.innerText=string.substr(0, string.length-1);
        }else if(display.innerText !="" && item.id == "equal"){
            display.innerText=eval(display.innerText);

        }else if (display.innerText == "" && item.id == "equal"){
            display.innerText="NULL";
            setTimeout(()=> (display.innerText = ""), 2000 )
        }else{
            display.innerText += item.id;
        }
    }
})