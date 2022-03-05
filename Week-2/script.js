const addBtn = document.querySelector("#addBtn"); // Submit button
const sendBtn = document.querySelector("#sendBtn"); // Send button
const accountList = document.querySelector("#accountList"); // ul section
const nameSurname = document.querySelector("#nameSurname"); // Name input
const balance = document.querySelector("#balance"); // Balance input
const sender = document.querySelector("#sender"); // sender person
const reciever = document.querySelector("#reciever"); // reciever person
const amountMoney = document.querySelector("#amountMoney"); // Amount of Money
const historyList = document.querySelector("#historyList"); // history List

addBtn.addEventListener("click", addList);
sendBtn.addEventListener("click", sendCash);
accountList.addEventListener("click", deleteItem);

// add to List and Select section
let listtt = [];
let i = 1;
function addList(e) {
  if (nameSurname.value && balance.value) {
    const li = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${nameSurname.value}
          <span id="cash" class="badge bg-warning rounded-pill">${balance.value}</span>
          <button id="deleteBtn" type="button" class="btn btn-danger badge rounded-pill">X</button>
      </li>
        `;
    accountList.innerHTML += li;
    listtt.push(accountList.lastElementChild);
    const customer = `
            <option data-type=${balance.value} value=${i}>${nameSurname.value}</option>
        `;
    i++;

    sender.insertAdjacentHTML("afterend", customer);
    reciever.insertAdjacentHTML("afterend", customer);
    nameSurname.value = "";
    balance.value = "";
  } else {
    alert("Please add some information");
  }
  e.preventDefault();
}

// adding information to History section
function sendCash(e) {
  let cash = document.querySelector("#cash");

  if (
    Number(amountMoney.value) <= Number(cash.textContent) &&
    Number(cash.textContent) > 0
  ) {
    let total = Number(cash.textContent) - Number(amountMoney.value);
    cash.textContent = total;
    const history = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Transfer</div>
              ${sender.value} named user has tranfered ${amountMoney.value}$ to ${reciever.value}
            </div>
            <span class="badge bg-primary rounded-pill">${amountMoney.value}$</span>
        </li>`;
    historyList.innerHTML += history;
    amountMoney.value = "";
  } else {
    const history = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Error</div>
              ${sender.value} named user is broke!!
            </div>
            <span class="badge bg-danger rounded-pill">X</span>
        </li>`;
    historyList.innerHTML += history;
    amountMoney.value = "";
  }

  e.preventDefault();
}

// Switching value
function update() {
  let selectSender = document.getElementById("senderSelect");
  let selectReciever = document.getElementById("recieverSelect");
  let optionReciever = selectReciever.options[selectReciever.selectedIndex];
  let optionSender = selectSender.options[selectSender.selectedIndex];
  sender.value = optionSender.text;
  reciever.value = optionReciever.text;
}
update();

// Delete user
function deleteItem(e) {
  if (e.target.textContent == "X") {
    e.target.parentElement.remove();
  }
  e.preventDefault();
}
