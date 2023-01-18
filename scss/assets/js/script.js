let divStart = document.createElement("div");
divStart.id = "start";
let btn = document.createElement("button");
divStart.appendChild(btn);

btn.id="mainBtn";
btn.innerText = "PREMI QUI";
document.querySelector("body").appendChild(divStart);

let header = `<div class="navBar">
  <nav>
      <img src="/assets/imgs/svg/logo.svg" alt="">
      <div class="navLinks">
          <a href="">Gigetto</a>
          <a href="">Number</a>
          <a href="">One</a>
          <a href="">Forza</a>
          <button id="gigetto">Gigetto</button>
      </div>
  </nav>
</div>`;
let dogePic = `<img src="/scss/img/flat-550x550-075-f.u1.jpg" alt="">`;

btn.addEventListener("click", () => {
  btn.classList.add("hide");
  document.body.innerHTML = header;

  let navBtn = document.getElementById("gigetto")

  navBtn.addEventListener("click", () => {
    let div = document.createElement('div')
    div.id = 'ruotami'
    div.innerHTML = dogePic
  document.body.appendChild(div)

  let imgBtn = document.createElement('button')
  imgBtn.id = 'dogeBtn'
  imgBtn.innerText = "Ruotami!!!"
  div.appendChild(imgBtn)
  return imgBtn
  }, { once: true })
});





