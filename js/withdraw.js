// step-1: add event handler with  deposit button 
// step-2: get deposit field
// step-3: get withdraw field
// step-4: add numbers to set the total deposit
// step-5: get ballance current total
// step-6: 
// step-7: clear deposit field
document.getElementById('btn-withdraw').addEventListener('click', function () {


    // step-2:.............................................
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    // step-7:..........................................
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number')
        return;
    }

    // step-3:..........................................
    const withdrawTotalElement = document.getElementById('withdraw-total');
    // console.log(depositTotalElement);
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // console.log(previousDepositTotalString);
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);









    // step-5:..................................
    const ballanceTotalElement = document.getElementById('ballance-total');
    const previousBallanceTotalAmountString = ballanceTotalElement.innerText;
    const previousBallanceTotalAmount = parseFloat(previousBallanceTotalAmountString);
    // console.log(ballanceTotalAmount)




    if (newWithdrawAmount > previousBallanceTotalAmount) {
        alert('ato taka nai')
        return;
    }

    // step-4:...........................................
    const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentTotalWithdraw;


    // step-6.......................................
    const currentBallaneTotal = previousBallanceTotalAmount - newWithdrawAmount;
    ballanceTotalElement.innerText = currentBallaneTotal;


})