var pizzaVAR = "";
var orderTotalVAR = "";

function pizza(toppings, size) {
  this.quantity = 0;
  this.toppings = toppings;
  this.size = size;
  this.customerName;
}

pizza.prototype.costPizza = function() {
  return this.topping = toppingAmount * 1.50;

}



$(document).ready(function () {
  $("#orderSubmitBTNID").click(function(event) {
    event.preventDefault();
    newPizzaOrder = new pizza()
    $("#pizzaOrderListID").text("Cost: " + newPizzaOrder);
  });
});
