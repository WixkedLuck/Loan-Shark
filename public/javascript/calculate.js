const calcBtn =document.getElementById("submit");
const Loan =document.getElementById("loan");
const interst2=document.getElementById("interest");
const term=document.getElementById("term");

// on hover button
calcBtn.addEventListener('mouseover', function(){
    function delay(time) {
    calcBtn.classList.add('animate__animated', 'animate__pulse');
    return new Promise(resolve => setTimeout(resolve, time));

}
// remove class after settime
delay(1000).then(() => calcBtn.classList.remove('animate__animated', 'animate__pulse'));

});
calcBtn.addEventListener('click', function() {
    // check to see if the full form is filled out
 if(Loan.value=="" | interst2.value=="" | term.value=="")
 {
    window.alert("Please fill out the complete form");
 }
 else{

CalculateMortgage(Loan,interst2,term);
 }
});

function CalculateMortgage(Loan,interest2,term) {  
    let principal = parseFloat(Loan.value);
    let cInterest = parseFloat(interest2.value) / 100/ 12;
    let cPayments = parseFloat(term.value);

    let x = Math.pow(1+cInterest, cPayments);
    let monthly = (principal * x * cInterest)/(x-1);
    let total_payments = (monthly * cPayments).toFixed(2);
    let total_interest_sum = ((monthly * cPayments)-principal).toFixed(2);

    // define currency type
    let formatCurrency = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD'
    });
    let fmonthly = formatCurrency.format(monthly);
    let fprincipal = formatCurrency.format(principal);
    let ftotal_payments = formatCurrency.format(total_payments);
    let ftotal_interest_sum = formatCurrency.format(total_interest_sum);
    let info="";
    // add info to table
    info += "<table class='table table-striped bg-light table-sm'>";
    
    info += "<tr><th colspan='2' style='text-align:center;'><h2>"+fmonthly+"</h2></th></tr>";

    info += "<tr><td>Loan Amount:</td>";
    info += "<td align='right'>"+fprincipal+"</td></tr>";

    info += "<tr><td>Total Payments:</td>";
    info += "<td align='right'>"+ftotal_payments+"</td></tr>";

    info += "<tr><td>Total Interest Paid:</td>";
    info += "<td align='right'>"+ftotal_interest_sum+"</td></tr>";

    info += "<tr><td>Payments:</td>";
    info += "<td align='right'>"+cPayments+"</td></tr>";

    info += "</table>";

    // display info to html
    document.getElementById("loan_info").innerHTML = info;

    // reset table
    let table="";

    table += "<table class='table table-striped bg-light table-sm'>";

        table += "<tr>";
        table += " <td width='30'><strong>Month</strong></td>";
        table += "<td width='30'><strong>Payment</strong></td>";
        table += "<td width='30'><strong>Principle</strong></td>";
        table += " <td width='30'><strong>Interest</strong></td>";
        table += "<td width='30'><strong>Interest Paid</strong></td>";
        table += "<td width='30'><strong>Balance</strong></td>";
        table += "</tr>";
    // get input values
    let current_balance = parseFloat(document.getElementById('loan').value);
    let monthly_payment = monthly
    // init counter
    let payment_counter = 1;
    let total_interest = parseFloat(cInterest);
    while (payment_counter <= cPayments) {
        towards_interest = cInterest * current_balance;
        towards_balance = monthly_payment - towards_interest;
        total_interest = total_interest + towards_interest; 
        current_balance = current_balance - towards_balance;

        let ftowards_interest = formatCurrency.format(towards_interest);
        let ftowards_balance = formatCurrency.format(towards_balance);
        let ftotal_interest = formatCurrency.format(total_interest);
        let fcurrent_balance = formatCurrency.format(current_balance);
        let fmonthly_payment = formatCurrency.format(monthly_payment);
        
        
        table += "<tr>";
            table += "<td>"+payment_counter+"</td>"
            table += "<td>"+fmonthly_payment+"</td>"
            table += "<td>"+ftowards_balance+"</td>"
            table += "<td>"+ftowards_interest+"</td>"
            table += "<td>"+ftotal_interest+"</td>"
            table += "<td>"+fcurrent_balance+"</td>"
        table += "</tr>";
        payment_counter++;
 
    }
    table +="</table>";

    document.getElementById("Schedule").innerHTML = table;
}



