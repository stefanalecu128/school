// Variables
const hamburger = document.querySelector("#btnBurger");
const header = document.querySelector(".header-content");


hamburger.addEventListener("click", function() {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});

let product = [];

let url = "https://bookstore-9c4e7-default-rtdb.europe-west1.firebasedatabase.app/";

async function init() {
  const result = await fetch(url + '.json');
  product = await result.json();
  console.info(product);
}

init().then(() => {

  const path = window.location.pathname;
  let isDetails = false;

  if (path === '/detalii.html') {
    drawDetails();
    isDetails = true;
  } else {
    draw();
  }

  initCart();
  initCartButtons(isDetails);

  let cartToggle = function (e) {
    e.preventDefault();

    document.querySelector('.cart-overlay').classList.toggle('transparentBcg');
    document.querySelector('.cart').classList.toggle('showCart');
    document.querySelector('body').classList.toggle('cart-open');
  };

  document.querySelector('.cart-btn').addEventListener('click', cartToggle);
  let btnBack = document.querySelector('.btn-backStore');
  if (btnBack) {
    btnBack.addEventListener('click', cartToggle);
  }
});

function draw() {
  console.info(product);
  var str = "";
  
  Object.keys(product).map(id => {
    const _product = product[id];
    str += `
    <div class="product-inner">
        <div class="product-img">
          <img src="${_product.coverBook[0]}" alt="" class="img-resp" />
        </div>
        <div class="product-text">
          <h3 class="product-text--title">${_product.titleBook}</h3>
          <p class="product-text--author">${_product.authorBook}</p>
          <div class="product-price">
            <span>${_product.price}</span>
          </div>
          <div class="product-details">
            <a href="/detalii.html?id=${id}">Detalii</a>
          </div>
        </div>
        </div>
    `;
  });
  document.querySelector(".products-content").innerHTML = str;
}
  

function search() {
  let searchDOM = document.querySelector('[name="search"]').value;
  let menuItems = document.querySelectorAll(".product-inner");

  for(let i=0; i<menuItems.length;i++) {
    let menuItem = menuItems[i];
    let textSearch = menuItem.querySelector(".product-text").innerText;

    let expr = new RegExp(searchDOM, 'i');

    if (!expr.test(textSearch)) {
      menuItem.classList.add("hidden");
    } else {
      menuItem.classList.remove("hidden");
    }
  }

}

function drawDetails() {
  const queryString = window.location.search;
  const id = queryString.split('=')[1];
  const currentProduct = product[id];

  document.querySelector(".d-img").src = currentProduct.coverBook[0];
  document.querySelector(".d-title").innerText = currentProduct.titleBook;
  document.querySelector(".d-author").innerText = currentProduct.authorBook;
  document.querySelector(".d-price").innerText = currentProduct.price;

  document.getElementsByClassName('btn-add-cart')[0].addEventListener('click', (e) => {
    const cartQty = parseInt(document.querySelector(".cart-qty").innerText);
    
    let item = null;

    if (cartContent[id]) {
      item = cartContent[id];
      item.quantity += cartQty;
    } else {
      item = {
        id: id,
        quantity: cartQty
      };
    }

    cartContent[id] = item;

    localStorage.setItem('cart', JSON.stringify(cartContent));
    location.reload();
  });
}

function recalculateCart() {
  window.cartContent = localStorage.getItem('cart');
  if (cartContent === null) {
    cartContent = {};
  } else {
    cartContent = JSON.parse(cartContent);
  }

  let total = 0;
  let count = 0;

  Object.values(cartContent).map(cartItem => {
    let currentProduct = product[cartItem.id];
    let totalProductPrice = cartItem.quantity * currentProduct.price;

    total += totalProductPrice;
    count += cartItem.quantity;

    document.querySelector(`.product-price-cart-${cartItem.id}`).innerText = `${totalProductPrice.toFixed(2)} Lei`;
  });

  document.querySelector(`.cart-footer h3`).innerText = `Total ${total.toFixed(2)} Lei`;
  document.querySelector(`.cart-items`).innerText = count;
}

function initCart() {
  window.cartContent = localStorage.getItem('cart');
  if (cartContent === null) {
    cartContent = {};
  } else {
    cartContent = JSON.parse(cartContent);
  }

  let cartProductsHtml = '';
  let total = 0;
  let count = 0;

  Object.values(cartContent).map(cartItem => {
    let currentProduct = product[cartItem.id];
    let totalProductPrice = cartItem.quantity * currentProduct.price;
    total += totalProductPrice;
    count += cartItem.quantity;

    cartProductsHtml += `
      <div class="cart-item">
        <div class="product-inner-cart">
          <div class="product-img-cart">
            <img src="${currentProduct.coverBook[0]}" alt="" class="img-resp-cart" />
          </div>
          <div class="product-text-cart">
            <h3 class="product-text--title-cart">${currentProduct.titleBook}</h3>
            <p class="product-text--author-cart">${currentProduct.authorBook}</p>
            <div class="product-price-cart product-price-cart-${cartItem.id}">
              ${totalProductPrice.toFixed(2)} Lei
            </div>
            <div class="product-details-cart">
              <a href="/detalii.html?id=${cartItem.id}">Detalii</a>
            </div>

            <div class="qty-control qty-control-cart">
              <span class="qty-minus" data-id="${cartItem.id}">-</span>
              <span class="cart-qty">${cartItem.quantity}</span>
              <span class="qty-plus" data-id="${cartItem.id}">+</span>
            </div>

            <button class="cart-delete" data-id="${cartItem.id}">Sterge din cos</button>

          </div>
        </div>
      </div>
    `;
  });

  let cartFooter = `
    <div class="cart-empty">
      <h3>Your cart is empty</h3>
      <button class="btn-backStore">Back to store</button>
    </div>
  `;

  if (count > 0) {
    cartFooter = `
      <div class="cart-footer">
        <h3>Total ${total.toFixed(2)} Lei</h3>
      </div>
    `;
  }

  let str = `
        <div class="container">
          <h3>Cart summary</h3>
          <div class="cart-content">

            ${cartProductsHtml}

          </div>
          
          ${cartFooter}
  
        </div>
  `;

  document.querySelector(".cart").innerHTML = str;

  document.querySelector(".cart-items").innerText = count;
}

function initCartButtons() {
  let minusElements = document.querySelectorAll(".qty-minus");
  
  for (var i = 0; i < minusElements.length; i++) {
    let minusElem = minusElements[i];
    minusElem.addEventListener('click', function() {
      let spanQty = this.parentNode.children[1];
      let qty = parseInt(spanQty.innerText);

      if (qty === 1) {
        return;
      }

      qty -= 1;

      spanQty.innerText = qty;

      if (this.parentNode.classList.contains('qty-control-cart')) {
        cartContent[this.dataset.id].quantity = qty;
        console.info('new cart', cartContent);
        localStorage.setItem('cart', JSON.stringify(cartContent));
        recalculateCart();
      }
    });
  };

  let plusElements = document.querySelectorAll(".qty-plus");
  for (var i = 0; i < plusElements.length; i++) {
    let plusElem = plusElements[i];
    plusElem.addEventListener('click', function() {
      let spanQty = this.parentNode.children[1];
      let qty = parseInt(spanQty.innerText);
  
      qty += 1;
  
      spanQty.innerText = qty;
  
      if (this.parentNode.classList.contains('qty-control-cart')) {
        cartContent[this.dataset.id].quantity = qty;
        console.info('new cart', cartContent);
        localStorage.setItem('cart', JSON.stringify(cartContent));
        recalculateCart();
      }
    });
  };

  let deleteElements = document.querySelectorAll(".cart-delete");
  for (var i = 0; i < deleteElements.length; i++) {
    let deleteElem = deleteElements[i];
    deleteElem.addEventListener('click', function() {
      this.parentNode.parentNode.parentNode.remove();
      delete cartContent[this.dataset.id];
      localStorage.setItem('cart', JSON.stringify(cartContent));

      if (Object.keys(cartContent).length === 0) {
        location.reload();
      }

      recalculateCart();
    });
  };
}

{/* <div class="products-content">
          <div class="img-product">
            <img src="img/book-2.svg" alt="" class="d-img">
          </div>
            <div class="details-product">
              <h2 class="d-title"></h2>
              <p class="d-author"></p>
              <p class="d-price"></p>
            </div>
        </div> */}