var dripQty = 3;
document.getElementById("dripQty").innerHTML = dripQty;
var dripPrice = 2.90;
document.getElementById("dripPrice").innerHTML = dripPrice.toFixed(2);
var dripCost = dripQty*dripPrice;
document.getElementById("dripCost").innerHTML = dripCost.toFixed(2);
var espressoCost = 1*2.90;
var teaCost = 1*3.50;
var chocolateCost = 1*5.00;
var cookieCost = 1*2.75;
var poundCakeCost = 1*3.00;
var dripperCost = 1*20.00;
var tax =  (dripCost+espressoCost+teaCost+chocolateCost+cookieCost+poundCakeCost+dripperCost)*0.08875;
var subTotal = dripCost+espressoCost+teaCost+chocolateCost+cookieCost+poundCakeCost+dripperCost;
var total = subTotal+tax;

document.getElementById("subTotal").innerHTML = subTotal;
