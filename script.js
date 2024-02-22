// variabili
let row=document.querySelector('.row');


// inizio ciclo For
for(let i=1; i<=100; i++){

   if((i % 3 === 0) & (i % 5 === 0)){  
      console.log('FizzBuzz');
      row.innerHTML += `<div class="box red">FizzBuzz</div>`;

   }
   else if(i % 3 === 0){
      console.log('Fizz');
      row.innerHTML += `<div class="box green">Fizz</div>`;

   }
   else if(i % 5 === 0){
      console.log('Buzz');
      row.innerHTML += `<div class="box yellow">Buzz</div>`;

   }
   else{
      console.log(i);
      row.innerHTML += `<div class="box cyan">${i}</div>`;

   }
}