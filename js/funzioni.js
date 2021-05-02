let display=0;

function rimuovi(){
  document.getElementsByClassName('numero')[0].innerHTML=display--;
}

function aggiungi(){
  document.getElementsByClassName('numero')[0].innerHTML=++display;
}
