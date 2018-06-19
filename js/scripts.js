var newPizza = [];

function Pizza(toppings, size) {
  this.quantity = 0;
  this.toppings = [];
  this.size = size;
  this.customerName;
  this.cost = 0;
}

Pizza.prototype.toppingsPRO = function() {
  var allTheToppings = this.toppings.length;
  this.cost += (allTheToppings * 1.50);
}

Pizza.prototype.sizePizzaPRO = function() {
  if(this.size === "10") {
    this.cost += 10;
  } else if (this.size === "15") {
    this.cost += 15;
  } else if (this.size === "20") {
    this.cost += 20;
  } else if (this.size === "25") {
    this.cost += 25;
  }
}

$(document).ready(function () {
  $("#orderSubmitBTNID").click(function(event) {
    event.preventDefault();
    newPizza = new Pizza();
    $("input:radio[name=sizeCheckBoxes]:checked").each(function(){
      var pizzaSizeChecked = $(this).val();
      newPizza.size = pizzaSizeChecked;
      console.log(pizzaSizeChecked);
      $("input:checkbox[name=toppingsCheckBoxes]:checked").each(function() {
      var toppingsTotalChecked = $(this).val();
      newPizza.toppings.push(toppingsTotalChecked);
      });
    });
      newPizza.sizePizzaPRO();
      newPizza.toppingsPRO();
      $("#outputDisplayID").show();
      $(".pizzaOrderListID").text("Cost: $" + newPizza.cost + "                  Toppings: " + newPizza.toppings);
  });
});
// });
