var pizzaVAR = "";
var orderTotalVAR = "";

function pizza(toppings, size) {
  this.quantity = 0;
  this.toppings = [];
  this.size = size;
  this.customerName;
  this.cost = 0;
}

pizza.prototype.toppingCheckBoxesPRO = function() {
  $("input:checkbox[name=toppingCheckBoxes]:checked").each(function() {
    var toppingsTotalChecked = $(this).val();
    this.toppings.push(toppingsTotalChecked);
    console.log("woot toppings");
  });
}

// pizza.prototype.costofPizzaSize = function() {
//   if(this.size === "10") {
//     this.cost += 10;
//   } else if (this.size === "15") {
//     this.cost += 15;
//   } else if (this.size === "20") {
//     this.cost += 20;
//   } else if (this.size === "25") {
//     this.cost +=25;
//   }
// }



$(document).ready(function () {
  $("#orderSubmitBTNID").click(function(event) {
    event.preventDefault();
    newPizzaOrder = new pizza()
    newPizzaOrder.toppingCheckBoxesPRO();
    console.log("woof");
    // $("#pizzaToppingsFormID input:radio:checked").each(function(){
    //   var toppingsOrder = $(this).val();
    //   newPizzaOrder.toppings.push(toppingsOrder);
    // });

    $(".pizzaOrderListID").text("Cost: " );
  console.log("brutal");
  });
});
