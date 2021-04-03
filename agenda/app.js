let person = [
  {
    name: "Jean Petrea",
    nrTel: "0373664897"
  },
  {
    name: "Gicu Grigore",
    nrTel: "0331592849"
  },
  {
    name: "Răducu Simion",
    nrTel: "0318003189"
  },
  {
    name: "Sergiu Simionescu",
    nrTel: "0723213153"
  },
  {
      name: "Dana Marian",
      nrTel: "0743732465"
    },
    {
      name: "Antonia Iordache",
      nrTel: "0797058887"
    },
    {
      name: "Theodor Giurgiu",
      nrTel: "0780293560"
    },
    {
      name: "Stan Boboc",
      nrTel: "0793976689"
    }
];

let index = -1;

function draw() {
  let str = "";
  for (let i=0; i < person.length; i++) {
    str +=
      `
       <tr>
       <td>${person[i].name}</td>
       <td>${person[i].nrTel}</td>
       <td><i class="far fa-edit" onclick="edit(${i});"></i></td>
       <td><i class="far fa-trash-alt" onclick="del(${i});"></i></td>
      </tr>
      `
  }
  document.querySelector("#addPerson tbody").innerHTML = str;
}

function edit(idx) {
  let contact = person[idx];

document.querySelector("[name='nume']").value = contact.name;
document.querySelector("[name='nrTel']").value = contact.nrTel;

index = idx;

document.querySelector("#editBtn").classList.remove("hidden");
document.querySelector("#cancelBtn").classList.remove("hidden")
document.querySelector("#addBtn").classList.add("hidden");
}

function validate(name, phone) {
  if (phone.length < 10) {
    alert('Numarul este prea scurt');
    return false;
  }

  if (name.length < 3) {
    alert('Numele este prea scurt');
    return false;
  }

  return true;
}

function editSec() {
  if (index === -1) {
      return;
  }

  let name = document.querySelector("[name='nume']").value;
  let phone = document.querySelector("[name='nrTel']").value;

  if (!validate(name, phone)) {
    return;
  }

  person[index].name = name;
  person[index].nrTel = phone;

  draw();

cancel();
}

function cancel(){
  index = -1;

  document.querySelector("#editBtn").classList.add("hidden");
  document.querySelector("#addBtn").classList.remove("hidden");
  
  document.querySelector("form").reset();

}

function del(idx) {
    if(confirm(`Esti sigur ca vrei sa stergi contactul ${person[idx].name}?`))
  person.splice(idx,1);
  draw();
}

function adauga() {
  let name = document.querySelector("[name='nume']").value;
  let nrTel = document.querySelector("[name='nrTel']").value;

  if (!validate(name, nrTel)) {
    return;
  }

  person.push({
    "name": name,
    "nrTel": nrTel
  });

  draw();
  document.querySelector("form").reset();
}

document.querySelector("[name='nrTel']").addEventListener('keyPress', function (e) {
  console.info(e, e.keyCode);
  if (e.keyCode === 13) {
    adauga();
  }
});