var newPizza;

function pizza(toppings, size) {
  this.quantity = 0;
  this.toppings = [];
  this.size = size;
  this.customerName;
  this.cost = 0;
}

pizza.prototype.toppingsPRO = function() {
  var allTheToppings = this.toppings.length;
  this.cost += allTheToppings;
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
    newPizza = new pizza();

    $("input:checkbox[name=toppingsCheckBoxes]:checked").each(function() {
      var toppingsTotalChecked = $(this).val();
      newPizza.toppings.push(toppingsTotalChecked);

    $(".pizzaOrderListID").text("Toppings: " + newPizza.toppings + "  ");
    console.log("brutal");

    });
  });
});
// });
