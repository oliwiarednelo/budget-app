let budgetOutput = document.getElementById('budget-amount');
let expenseOutput = document.getElementById('expense-amount');
let balanceOutput = document.getElementById('balance-amount');
let budgetInput = document.getElementById('budget');
let expenseInput = document.getElementById('expense');
let expenseButton = document.getElementById("expense-button");
let budgetButton = document.getElementById("budget-button");
let history = document.getElementById('history');
let expTitle = document.getElementById('exp-title');


let newAmount = 0;
let currExpenseAmount = 0;
let currentBalance = 0;


budgetButton.addEventListener("click", () => {
    newAmount = budgetInput.value;

    if (newAmount.length > 0) {
      budgetOutput.innerHTML = newAmount;
           balanceOutput.innerHTML = newAmount - currExpenseAmount;
               budgetInput.value = "";
              
  }
});


expenseButton.addEventListener("click", () => {
  let currAmount = newAmount;
    let newExpenseAmount = expenseInput.value;

      if (newExpenseAmount.length > 0) {
      currExpenseAmount += parseInt(newExpenseAmount);
          expenseOutput.innerHTML = currExpenseAmount;
            currentBalance = currAmount - currExpenseAmount;
               balanceOutput.innerHTML = currentBalance; 
           
                acceptValue();
                  
                  expTitle.value = "";
                    expenseInput.value = "";
  }
});
 
let data = {};

let acceptValue = () => {
  data["title"] = expTitle.value;
  data["expenditure"] = expenseInput.value;
  console.log(data);
  addHistory();
}

let addHistory = () => {
history.innerHTML += 
`
<div>
<span id="exp-title">-${data.expenditure}</span>
      <span id="money-amount">${data.title}</span>
    </div>
`

}