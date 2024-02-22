// variabili
let row=document.querySelector('.row');


// inizio ciclo For
for(let i=1; i<=100; i++){

   // se è divisibile per 3 e 5 fai questo
   if((i % 3 === 0) & (i % 5 === 0)){  
      console.log('FizzBuzz');
      row.innerHTML += `<div class="box red">FizzBuzz</div>`;
   }

   // se è divisibile per 3 fai questo
   else if(i % 3 === 0){
      console.log('Fizz');
      row.innerHTML += `<div class="box green">Fizz</div>`;
   }

   // se è divisibile per 5 fai questo
   else if(i % 5 === 0){
      console.log('Buzz');
      row.innerHTML += `<div class="box yellow">Buzz</div>`;
   }
   
   // oppure se non è divisibile ne per 3, ne per 5 fai questo
   else{
      console.log(i);
      row.innerHTML += `<div class="box cyan">${i}</div>`;
   }
}