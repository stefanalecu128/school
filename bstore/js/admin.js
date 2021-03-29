let products = [];

let url = "https://bookstore-9c4e7-default-rtdb.europe-west1.firebasedatabase.app/";

async function init() {
  const result = await fetch(url + '.json');
  products = await result.json();
}

init().then(() => {
  drawAdmin();

  let deleteButtons = document.querySelectorAll('.btn-delete');
  for (let i = 0; i < deleteButtons.length; i++ ) {
    deleteButtons[i].addEventListener('click', async function (e) {
      e.preventDefault();
      
      delete products[this.dataset.id];
      await fetch(url + '.json', {
        method: 'PUT',
        body: JSON.stringify(products)
      });
      this.parentNode.remove();
    });
  }
});

function drawAdmin() {
  var str = "";
  
  Object.keys(products).map(id => {
    const _product = products[id];
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
          
        </div>
        <a href="/scoala-informala-frontend/bstore/admin_item.html?id=${id}">Edit</a>
          <a class="btn-delete" href="" data-id="${id}">Delete</a>
        </div>
    `;
  });
  document.querySelector(".products-content").innerHTML = str;
}
  