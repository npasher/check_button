let button=document.querySelector(".button");
let buttonText=document.querySelector(".check");

const check="<svg width=\"57\" height=\"46\" viewBox=\"0 0 57 46\" xmlns=\"http://www.w3.org/graphics/svg\"><path fill=\"#ff4500\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML="Submit";

button.addEventListener("click",function(){

  if (buttonText.innerHTML !=="Submit"){
    buttonText.innerHTML ="Submit";
  } else if (buttonText.innerHTML ==="Submit"){
    buttonText.innerHTML = check;
  }
  this.classList.toggle("button__circle");
});