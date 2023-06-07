// alert("Seja bem-vindo ao site da EcoNutri!");

// SLIDE -----------------------------------------------------

var imagens = ['./assets/img/tech-1.png', './assets/img/tech-2.png'];
var Index = 0;
var time = 5000;

function slideShow() {
  document.getElementById('slide').src = imagens[Index];
  Index++;
  if (Index == imagens.length) {
    Index = 0;
  }
  setTimeout("slideShow()", time);
}

slideShow();


// FORM -------------------------------------------------------

function validateForm() {
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  if (name == "" || phone == "" || email == "" || message == "") {
    alert("Por favor, preencha todos os campos");
  } else {
    alert("Muito obrigado! Iremos te responder o mais rápido possível!");
  }
}

