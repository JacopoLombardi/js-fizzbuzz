
row=document.querySelector('.row');


for(i=1; i<=50; i++){

   if((i % 3 === 0) & (i % 5 === 0)){  
      console.log('FizzBuzz');

      row.innerHTML += `<div class="box">FizzBuzz</div>`;

   }
   else if(i % 3 === 0){
      console.log('Fizz');

      row.innerHTML += `<div class="box">Fizz</div>`;

   }
   else if(i % 5 === 0){
      console.log('Buzz');

      row.innerHTML += `<div class="box">Buzz</div>`;

   }
   else{
      console.log(i);

      row.innerHTML += `<div class="box">${i}</div>`;

   }
}