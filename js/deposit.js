// step-1: add event handler with  deposit button 
// step-2: get deposit field
// step-3: get withdraw field
// step-4: add numbers to set the total deposit
// step-5: get ballance current total
// step-6: 
// step-7: clear deposit field






document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2:.............................................

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);

    // step-7:..........................................
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('please porvide a number')
        return;
    }


    // step-3:..........................................

    const depositTotalElement = document.getElementById('deposit-total');
    // console.log(depositTotalElement);
    const previousDepositTotalString = depositTotalElement.innerText;
    // console.log(previousDepositTotalString);
    const previousDepositTotal = parseFloat(previousDepositTotalString);



    // step-4:...........................................

    const currentTotalDeposit = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentTotalDeposit;


    // step-5:..................................

    const ballanceTotalElement = document.getElementById('ballance-total');
    const ballanceTotalAmountString = ballanceTotalElement.innerText;
    const ballanceTotalAmount = parseFloat(ballanceTotalAmountString);
    // console.log(ballanceTotalAmount)

    // step-6.......................................
    const currentBallaneTotal = ballanceTotalAmount + newDepositAmount;
    ballanceTotalElement.innerText = currentBallaneTotal;




})