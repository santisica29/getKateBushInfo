const button = document.querySelector('button')
button.addEventListener('click', getKateInfo)

async function getKateInfo(){
  const result = document.querySelector('h2')
  const img = document.querySelector('img')
  img.src = ''
  result.innerText = ''
  try {
    const res = await fetch('https://api-kate-bush.onrender.com/katebush')
    const data = await res.json()
    console.log(data)
    img.style.display = 'block'
    img.src = data.image
    result.innerText = 'Albums: \n'
    for (let i = 0; i < data.albums.length; i++){
      result.innerText += `${data.albums[i]} \n`
    }
    
  } catch (err) {
    console.log(err)
  }
  
}