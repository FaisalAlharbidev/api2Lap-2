let titel = document.getElementById("titel-img");
let url = document.getElementById("url-img");       

let btn = document.getElementById("btn");
let text = document.getElementById("text");

let img = document.getElementById("img");

let mainCont = document.getElementById("continer");

btn.addEventListener("click", () => {
  fetch("https://66e7e6acb17821a9d9da6f7f.mockapi.io/imgApi", {
    method: 'POST',
    body: JSON.stringify({
      imgName: titel.value,
      imgUrl: url.value, 
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    text.innerText = data.imgName;
    img.src = data.imgUrl; 
    
  })
})
        


