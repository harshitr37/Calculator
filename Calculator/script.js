let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        let value = e.target.innerHTML;

        if(value === '='){
            let expression = string.replace(/x/g, '*').replace(/%/g, '/100').replace(/\^/g, '**');
            try {
            string = eval(expression);
            input.value = string;
            }
            catch{
                input.value = "Error";
            }
        }
        
        else if(value === 'AC'){
            string = "";
            input.value = string;
         }

         else if(value === '⌫' || e.target.title ==='Delete'){
            string = string.substring(0, string.length-1);
            input.value = string;
         }

        else{
        string += value;
        input.value = string;
        }
    });
});