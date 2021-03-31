let person = [
    {
      name: "Ionut",
      nrTel: "0723213153"
    },
    {
      name: "Popa",
      nrTel: "0723213153"
    },
    {
      name: "Dan",
      nrTel: "0723213153"
    },
    {
      name: "Stefanita Alecu",
      nrTel: "0723213153"
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
    let persons = person[idx];

    document.querySelector("[name='nume']").value = person.name;
    document.querySelector("[name='nrTel']").value = person.nrTel;

    index = idx;

	document.querySelector("#editBtn").classList.remove("hidden");
    document.querySelector("#cancelBtn").classList.remove("hidden")
	document.querySelector("#addBtn").classList.add("hidden");
  }

  function editSec() {
    if (index === -1) {
        return;
    }

    let persons = person[index];
    person.name = document.querySelector("[name='nume']").value;
    person.nrTel = document.querySelector("[name='nrTel']").value;
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
  
    
    person.push({
      "name": name,
      "nrTel": nrTel
    });

    draw();
  }
