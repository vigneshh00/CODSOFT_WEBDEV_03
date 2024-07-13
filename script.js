const buttons=document.querySelectorAll('button');
const output = document.getElementById('output');

buttons.forEach((item) => {
     item.addEventListener('click', () => {
          if(item.id == 'clear'){
               output.value='';
           }else if(item.id == 'backspace'){
               let string = output.value.toString();
               output.value = string.substring(0,string.length-1);
           }else if(output.value != '' && item.id == 'equals'){
               try{
                    output.value = eval(output.value);
               }catch(err){
                    alert(err.message);
               }
           }else if(output.value == '' && item.id == 'equals'){
               alert('Empty!');
           }else{
               output.value += item.id;
           }
     });
   });  
