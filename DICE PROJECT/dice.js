
function rolls(){
    const textbox1 = document.getElementById("textbox").value;  
    const result1 = document.getElementById("result");
    const images1 = document.getElementById("images");
    let values = [];
    let image = [];
   

    for (let  i=0 ; i < textbox1 ; i++ ){
        const value = Math.floor( Math.random() * 6) +1 ;
       values.push(value)
       image.push(`<img src="dice images/${value}.png">`);

    }
    result1.textContent = ` Dice : ${values.join(', ')}`;
    images1.innerHTML = image.join(' ');


    
}
