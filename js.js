var x = document.getElementsByClassName('botton');
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);
buttons.map(buttons => {
    buttons.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }
                catch{
                    display.innerText ='Error';
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
        if( x== '+' && x == '-')
        {
            console.log('error');
        }
    });
});