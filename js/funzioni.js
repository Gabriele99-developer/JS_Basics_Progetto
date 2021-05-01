let remove = document.getElementById('decrementatore');
let add = document.getElementById('incrementatore');

let int = document.getElementById('numero');
let integer = 0;

remove.addEventListener('click', function(){
  integer -=1;
  int.innerHTML = integer;
})

add.addEventListener('click', function(){
  integer +=1;
  int.innerHTML = integer;
})
