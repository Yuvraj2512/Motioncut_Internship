const Button = document.getElementById("selector-bar")
Button.addEventListener("click", myFunction);

function myFunction() {
    var BasicPayment = document.getElementsByTagName("h3")
    var AdvancePayment = document.getElementsByTagName("h4")
    var i;
    var n;

    for (i = 0 ; i< BasicPayment.length; i++){
        for(n = 0 ; n< BasicPayment.length; n++){
            if(BasicPayment[i].style.display === "none"){
                BasicPayment[i].style.display = "block";
                AdvancePayment[i].style.display = "none";
                Button.style.justifyContent = "flex-end"
            }
            else{
                BasicPayment[i].style.display = "none";
                AdvancePayment[i].style.display = "block";
                Button.style.justifyContent = "flex-start"
            }
        }
    }
}