var pizzaVAR = "";
var orderTotalVAR = "";

function pizza(toppings, size) {
  this.quantity = 0;
  this.toppings = toppings;
  this.size = size;
  this.customerName = customerName;
}




$(document).ready(function () {
  $("#orderSubmitBTNID").click(function(event) {
    event.preventDefault();
    $("#pizzaOrderListID").append("<li>" + "hello!" + "</li>");
  });
});
