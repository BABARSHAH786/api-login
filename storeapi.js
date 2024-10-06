// first we get id 
let renderData = document.querySelector(".renderData");
let renderCartData= document.querySelector(".renderCartData");



// GET DATA FROM API

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);

  // Loop through data and create elements
  data.forEach((ele) => {
    let produntMainDiv = document.createElement('div')
    let createEleImg = document.createElement("img");
    let createTitle = document.createElement("p");
    let createPriceEle = document.createElement("p");
    let btnEle = document.createElement("button");

    let btnText = document.createTextNode("Add to Cart");
    let createPriceText = document.createTextNode(`Price : $${ele.price} `);
    let createTextTitle = document.createTextNode(ele.title);

    createEleImg.setAttribute("src", ele.image);
    createEleImg.setAttribute("class", "myImages");
    produntMainDiv.setAttribute("class","box-main")

    createTitle.appendChild(createTextTitle);
    createPriceEle.setAttribute("class",'price-element')
    btnEle.setAttribute("class","btn-element")
    createPriceEle.appendChild(createPriceText);
    createTitle.setAttribute("class","product-title")
    btnEle.appendChild(btnText);
    produntMainDiv.appendChild(createEleImg)

    produntMainDiv.appendChild(createEleImg);
    produntMainDiv.appendChild(createTitle);
    produntMainDiv.appendChild(createPriceEle);
    produntMainDiv.appendChild(btnEle);
    renderData.appendChild(produntMainDiv)

    // Add click event listener to each button (within the loop)
    btnEle.addEventListener("click", () => addToCart(ele.image, ele.price));
  });
}

function addToCart(img, price) {
  let cartImgEle =document.createElement("img")
  let cartTrashBtn = document.createElement("i")
  cartTrashBtn.setAttribute("class","fa-solid fa-trash")
  cartImgEle.setAttribute("src",img)
  cartImgEle.setAttribute("class","cartImgElement")
  let cartPriceEle =document.createElement("p")
  let cartPriceText =document.createTextNode(price)
  cartPriceEle.appendChild(cartPriceText)
  renderCartData.appendChild(cartImgEle)
  renderCartData.appendChild(cartPriceEle)
  renderCartData.appendChild(cartTrashBtn)


  // Implement your cart logic here (e.g., store in local storage, send to server)
}

getData();



document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Hardcoded valid username and password
  const validUsername = 'admin';
  const validPassword = 'password123';

  if (username === validUsername && password === validPassword) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Login successful!';
      // You can redirect the user or handle login success here
  } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = 'Invalid username or password';
  }
});