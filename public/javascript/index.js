const sharkbtn =document.querySelector('#start');

sharkbtn.addEventListener('click', function() {
   sharkbtn.classList.add("animate__animated", "animate__hinge"); 
   let tID = setTimeout(function () {
    sharkbtn.classList.remove("animate__animated", "animate__hinge"); 
    window.clearTimeout(tID);
    window.location.assign( "./public/LoanShark.html");
   		// clear time out.
}, 2000);

})