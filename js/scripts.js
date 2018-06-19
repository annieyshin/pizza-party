
var newPizza = [];

function pizza(toppings, size) {
  this.quantity = 0;
  this.toppings = [];
  this.size = size;
  this.customerName;
  this.cost = 0;
}

pizza.prototype.toppingsPRO = function() {
  var allTheToppings = this.toppings.length;
  this.cost += (allTheToppings * 1.50);
}

pizza.prototype.sizePizzaPRO = function() {
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
  newPizza = new pizza();
  $("input[name='sizeCheckBoxes']").click(function(){
    $("input:radio[name=sizeCheckBoxes]:checked").each(function(){
      var pizzaSizeChecked = $(this).val();
      newPizza.size = pizzaSizeChecked;
      console.log(pizzaSizeChecked);
    });
  });

  $("#orderSubmitBTNID").click(function(event) {
    event.preventDefault();
    $("input:checkbox[name=toppingsCheckBoxes]:checked").each(function() {
      var toppingsTotalChecked = $(this).val();
      newPizza.toppings.push(toppingsTotalChecked);
      console.log("woof");
    });

    newPizza.sizePizzaPRO();
    newPizza.toppingsPRO();
    $("#outputDisplayID").show();
    $(".pizzaOrderListID").text("Cost: " + newPizza.cost + "                  Toppings: " + newPizza.toppings);
    console.log("brutal")
  });
});
