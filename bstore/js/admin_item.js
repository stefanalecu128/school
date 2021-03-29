let products = [];
let url = "https://bookstore-9c4e7-default-rtdb.europe-west1.firebasedatabase.app/";
let product = null;
let id = null;

async function init() {
  id = location.search.split('=')[1];

  const result = await fetch(url + '.json');
  products = await result.json();

  if (id !== '0') {
    if (!products[id]) {

    } else {
      product = products[id];
      draw();
    }
  } else {
    draw();
  }
}

function draw() {
  if (product !== null) {
    document.querySelector('.input-name input').value = product.titleBook;
    document.querySelector('.input-author input').value = product.authorBook;
    document.querySelector('.input-cover input').value = product.coverBook[0];
    document.querySelector('.input-price input').value = product.price;
  }
}

function getNewId() {
  const ids = Object.keys(products).map(_id => parseInt(_id)).filter(_id => !isNaN(_id));
  return Math.max(...ids) + 1;
}

async function save() {
  if (product === null) {
    id = getNewId();
  }

  products[id] = {
    titleBook: document.querySelector('.input-name input').value,
    authorBook: document.querySelector('.input-author input').value,
    coverBook: [document.querySelector('.input-cover input').value],
    price: parseFloat(document.querySelector('.input-price input').value)
  };

  await fetch(url + '.json', {
    method: 'PUT',
    body: JSON.stringify(products)
  });

  history.back();
}

document.querySelector('.btn-save').addEventListener('click', save);
document.querySelector('.btn-cancel').addEventListener('click', function () {
  history.back();
});

init();
  