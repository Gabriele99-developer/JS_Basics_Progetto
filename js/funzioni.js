let add = document.getElementById('decrementatore');
let remove = document.getElementById('incrementatore');

let int = document.getElementById('numero');
let integer = 0;

add.addEventListener('click', function(){
  integer -=1;
  int.innerHTML = integer;
})

add.addEventListener('click', function(){
  integer +=1;
  int.innerHTML = integer;
})
