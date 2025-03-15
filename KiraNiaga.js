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

//break-even calculators
//breakeven constant
const inventoryCost = document.getElementById("inventory-cost");
const fixedCost = document.getElementById("fixed-cost");
const sellPrice = document.getElementById("selling-price");

//breakeven calc
function calcBreakeven() {
    let inventoryCostVal = parseFloat(document.getElementById("inventory-cost").value) || 0;
    let fixedCostVal = parseFloat(document.getElementById("fixed-cost").value) || 0;
    let sellPriceVal = parseFloat(document.getElementById("selling-price").value) || 0;

    let bePoint = (inventoryCostVal + fixedCostVal) / sellPriceVal;

    document.getElementById("break-even-unit").innerHTML = bePoint.toFixed(1);
};
//event listener
[inventoryCost, fixedCost, sellPrice].forEach(input =>{
    input.addEventListener("input",calcBreakeven);
});

//profit margin & markup calculator
//margin markup constant
const b_costPrice = document.getElementById("cost-price-mm");
const b_sellPrice = document.getElementById("selling-price-mm");
//margin markup calc
function calcMarginmarkup() {
    let b_costPrice_Val = parseFloat(b_costPrice.value) || 0;
    let b_sellPrice_Val = parseFloat(b_sellPrice.value) || 0;
      
    let profit = b_sellPrice_Val - b_costPrice_Val;
    let margin = b_sellPrice_Val > 0 ?(profit / b_sellPrice_Val)*100 : 0;
    let markup = (b_costPrice_Val > 0) ? (profit / b_costPrice_Val)*100 : 0;
    let epd = (b_costPrice_Val> 0) ? (profit / b_sellPrice_Val): 0;
       document.getElementById("margin-result").innerHTML = margin.toFixed(2);
       document.getElementById("markup-result").innerHTML = markup.toFixed(2);
       document.getElementById("earning-mm").innerHTML = epd.toFixed(2);
};
//event listener
[b_costPrice, b_sellPrice].forEach(input =>{
    input.addEventListener("input",calcMarginmarkup);
});
