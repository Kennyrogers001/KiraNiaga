//list-in js
const breakEven_li = document.getElementById("break-even-li");
const marginMarkup_li = document.getElementById("margin-markup-li");
const cashFlow_li = document.getElementById("cash-flow-li");
const loanRepayment_li = document.getElementById("loan-repayment-li");
const pricingStrategy_li = document.getElementById("pricing-strategy-li");

//content in js
const breakEven = document.getElementById("break-even");
const marginMarkup = document.getElementById("margin-markup");
const cashFlow = document.getElementById("cash-flow");
const loanRepayment = document.getElementById("loan-repayment");
const pricingStrategy = document.getElementById("pricing-strategy");
const intro = document.getElementById("intro");


//make content display to block when list is clicked
    //breakEven_li clicked
    breakEven_li.addEventListener("click", () => {
      breakEven.style.display = "block";
      marginMarkup.style.display = "none";
      cashFlow.style.display = "none";
      loanRepayment.style.display = "none";
      pricingStrategy.style.display = "none";
      intro.style.display = "none";
      //button color and bg 
     breakEven_li.classList.add("button-stay");
     marginMarkup_li.classList.remove("button-stay");
     cashFlow_li.classList.remove("button-stay");
     loanRepayment_li.classList.remove("button-stay");
     pricingStrategy_li.classList.remove("button-stay");

});
    //marginMarkup_li clicked
    marginMarkup_li.addEventListener("click", () => {
        marginMarkup.style.display = "block";
        breakEven.style.display = "none";
        cashFlow.style.display = "none";
        loanRepayment.style.display = "none";
        pricingStrategy.style.display = "none";
        intro.style.display = "none";
        marginMarkup_li.classList.add("button-stay");
        //button color and bg
        marginMarkup_li.classList.add("button-stay");
        breakEven_li.classList.remove("button-stay");
        cashFlow_li.classList.remove("button-stay");
        loanRepayment_li.classList.remove("button-stay");
        pricingStrategy_li.classList.remove("button-stay");

});
    //cashFlow_li clicked
    cashFlow_li.addEventListener("click", () => {
        cashFlow.style.display = "block";
        breakEven.style.display = "none";
        marginMarkup.style.display = "none";
        loanRepayment.style.display = "none";
        pricingStrategy.style.display = "none";
        intro.style.display = "none";
        //button color and bg
        cashFlow_li.classList.add("button-stay");
        breakEven_li.classList.remove("button-stay");
        marginMarkup_li.classList.remove("button-stay");
        loanRepayment_li.classList.remove("button-stay");
        pricingStrategy_li.classList.remove("button-stay");

});
    //loanRepayment_li clicked
    loanRepayment_li.addEventListener("click", () => {
        loanRepayment.style.display = "block";
        breakEven.style.display = "none";
        marginMarkup.style.display = "none";
        cashFlow.style.display = "none";
        pricingStrategy.style.display = "none";
        intro.style.display = "none";
        //button color and bg
        loanRepayment_li.classList.add("button-stay");
        breakEven_li.classList.remove("button-stay");
        marginMarkup_li.classList.remove("button-stay");
        cashFlow_li.classList.remove("button-stay");
        pricingStrategy_li.classList.remove("button-stay");

});
    //pricingStrategy_li clicked
    pricingStrategy_li.addEventListener("click", () => {
        pricingStrategy.style.display = "block";
        breakEven.style.display = "none";
        marginMarkup.style.display = "none";
        cashFlow.style.display = "none";
        loanRepayment.style.display = "none";
        intro.style.display = "none";
        //button color and bg
        pricingStrategy_li.classList.add("button-stay");
        breakEven_li.classList.remove("button-stay");
        marginMarkup_li.classList.remove("button-stay");
        cashFlow_li.classList.remove("button-stay");
        loanRepayment_li.classList.remove("button-stay");


});






