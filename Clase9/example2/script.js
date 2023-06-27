window.addEventListener('DOMContentLoaded', function() {
  var loader = document.querySelector('.loader');
  var title = document.getElementById('title');

  loader.addEventListener('animationend', function() {
    title.style.display = 'block';
  });
});



// Aqui para lograr que las categorias esten ocultas y se muestren solo al hacer clic en el titulo "Categorias", vamos a utilizar js para controlar la

const toggleButton = document.querySelector('.toggle-categories');
const categoryList = document.querySelector('.category-list');

toggleButton.addEventListener('click', () => {
    categoryList.classList.toggle('show');
});

//Aqui en el codigo, seleccionamos el elemento <button> dentro de la clase `.categories` y el elemento `.category-list` que contiene las categorias. Luego, añadimos un eveno de clic al titulo "Categorias" utilizando `addEventListener`. Cuando se haga clic en el titulo, se ejecuta una funcion anonima que agrega o elimina la clase `.show` en la lista de categorias, lo que controla la visibilidad de la misma.