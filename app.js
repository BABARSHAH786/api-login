//get ids
let renderData = document.querySelector(".renderData");
let renderCartData= document.querySelector(".renderCartData");



// GET DATA FROM API

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);

  // Loop through data and create elements
  data.forEach((ele) => {
    let createEleImg = document.createElement("img");
    let createTitle = document.createElement("p");
    let createPriceEle = document.createElement("p");
    let btnEle = document.createElement("button");

    let btnText = document.createTextNode("Add to Cart");
    let createPriceText = document.createTextNode(`Price : $${ele.price} `);
    let createTextTitle = document.createTextNode(ele.title);

    createEleImg.setAttribute("src", ele.image);
    createEleImg.setAttribute("class", "myImages");

    createTitle.appendChild(createTextTitle);
    createPriceEle.appendChild(createPriceText);
    btnEle.appendChild(btnText);

    renderData.appendChild(createEleImg);
    renderData.appendChild(createTitle);
    renderData.appendChild(createPriceEle);
    renderData.appendChild(btnEle);

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








// let getUser =document.getElementById('nameAdd')
// let getpassword =document.getElementById('passwordAdd')

// let inputValue = getUser.value
// let passwordValue = getpassword.value;

// let divHtml =document.getElementById('div1')

// function btn(){
//     if(inputValue=="babar" && passwordValue =="babar"){
//         console.log("hello babar");
//         // let createDiv = document.createElement("div")
//         // createDiv.textContent = "Hello Babar welocome to our website"
//         // divHtml.appendChild(createDiv)

//     }else{
//         console.log("enter value");
//     }
//     document.getElementById("button1").addEventListener("click", btn);

// }
// document.getElementById("button1").addEventListener("click", btn);

/**try 2 */
// const loginForm = document.getElementById('loginForm');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form submission

//   const name = document.getElementById('name').value;
//   const password = document.getElementById('password').value;

//   // Basic validation (you can add more complex validation)
//   if (name && password) {
//     // Redirect to the next page with the name as a query parameter
//     window.location.href = `./welcome.html?name=${name}`;
//   } else {
//     alert('Please enter both name and password.');
//   }
// });
