var datas = ["Learning HTML", "Learning CSS", "Learning Javascript"];
let msg = document.getElementById("msg");
let form = document.getElementById("form");

function show() {
  var table = document.getElementById("table");
  table.innerHTML = "<tr><th>No</th><th>List Task</th><th>Action</th></tr>";
  for (let i = 0; i < datas.length; i++) {
    var btnEdit = "<button class='btn-edit' onclick='edit(" + i + ")' type='button'>Edit</button>";
    var btnDelete = "<button class='btn-delete' onclick='hapus(" + i + ")' type='button' >Delete</button>";
    j = i + 1;
    table.innerHTML += "<tr><td>" + j + "</td><td>" + datas[i] + "</td><td>" + btnEdit + " " + btnDelete + "</td></tr>";
  }
}

function add() {
  var input = document.querySelector("input[name=task]");
  if (input.value === "") {
    msg.innerHTML = "Cannot be blank";
  } else {
    datas.push(input.value);
  }
  show();
  input.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function edit(id) {
  var newEdit = prompt("Edit", datas[id]);
  datas[id] = newEdit;
  show();
}

function hapus(id) {
  datas.pop(id);
  show();
}

show();
