var btns = document.querySelectorAll('.listaDeArtigos-slider-item'),
    new0 = document.querySelector("#new0"),
    new1 = document.querySelector("#new1"),
    new2 = document.querySelector("#new2"),
    noticias = document.querySelectorAll(".listaDeArtigos-item");


    new0.style.display = "block";

// Criando um indicador de slid atual
var indicadorSlideAtual = document.createElement("span");
indicadorSlideAtual.classList.add("escondeVisualmente");
indicadorSlideAtual.id = "escondeVisualmente";
indicadorSlideAtual.textContent = "(Slide atual)";

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    noticias.forEach(function(noticia){
      noticia.style.display = "none";

      if(this.getAttribute("data-sliderItem") === noticia.getAttribute("data-noticia")) {
        noticia.style.display = "block";
      }
    }.bind(this))

    document.querySelector(".listaDeArtigos-slider-item .escondeVisualmente").remove();
    this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})