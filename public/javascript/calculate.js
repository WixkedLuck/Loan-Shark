const calcBtn =document.getElementById("submit");
const Loan =document.getElementById("loan").value.trim();
const interst=document.getElementById("interest").value.trim();
const term=document.getElementById("term").value.trim();
calcBtn.addEventListener('click', function() {
    console.log("clicked");
 
if(Loan=="" | interst=="" | term=="")
{
   window.alert("Please fill out the complete form");
}
else{
CalculateMortgage(Loan,interst,term);
}
});

function CalculateMortgage(loan,interest,term) {  
    let principal = parseFloat(loan.value);
    let cInterest = parseFloat(interest.value) / 100/ 12;
    let cPayments = parseFloat(term.value);

    let x = Math.pow(1+cInterest, cPayments);
    let monthly = (principal * x * cInterest)/(x-1);
    let total_payments = (monthly * cPayments).toFixed(2);
    let total_interest_sum = ((monthly * cPayments)-principal).toFixed(2);

    let formatCurrency = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD'
    });
    let fmonthly = formatCurrency.format(monthly);
    let fprincipal = formatCurrency.format(principal);
    let ftotal_payments = formatCurrency.format(total_payments);
    let ftotal_interest_sum = formatCurrency.format(total_interest_sum);


    
}