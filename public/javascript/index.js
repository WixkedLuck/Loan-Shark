const sharkbtn =document.querySelector('#start');

sharkbtn.addEventListener('click', function() {
   sharkbtn.classList.add("animate__animated", "animate__hinge"); 
   let tID = setTimeout(function () {
    window.location.href = "./LoanShark.html";
    window.clearTimeout(tID);		// clear time out.
}, 2000);
})