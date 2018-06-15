var pizzaVAR = "";
var orderTotalVAR = "";
var toppingAmount = function() {
  for(var i = 0; i<radio.length; i++) {
    if(radio[i].checked) {
      return radio[i].value;
    }
  }
 return '';
};
function pizza(toppings, size) {
  this.quantity = 0;
  this.toppings = [];
  this.size = size;
  this.customerName;
  this.cost = 0;
}

pizza.prototype.costofPizzaSize = function() {
  if(this.size === "10") {
    this.cost += 10;
  } else if (this.size === "15") {
    this.cost += 15;
  } else if (this.size === "20") {
    this.cost += 20;
  } else if (this.size === "25") {
    this.cost +=25;
  }
}



$(document).ready(function () {
  $("#orderSubmitBTNID").click(function(event) {
    event.preventDefault();
    newPizzaOrder = new pizza()
    $("#pizzaToppingsFormID input:radio:checked").each(function(){
      var toppingsOrder = $(this).val();
      newPizzaOrder.toppings.push(toppingsOrder);
    });

    $("#pizzaOrderListID").text("Cost: " + newPizzaOrder);
  });
});
