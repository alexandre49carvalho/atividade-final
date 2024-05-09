// aq aplica o botao e a imagem
const img = document.querySelector('img')
const button = document.querySelector('button')

//puxa as imagems das raposas
const raffleImage = () => {
  const promise = fetch('https://randomfox.ca/floof/')


  promise.then(response => response.json())
             .then(data => img.setAttribute('src', data.image))
}

//aq e onde retorna tudo
raffleImage()
button.addEventListener('click', raffleImage)