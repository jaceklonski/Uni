const { rearg } = require("lodash");

class CoffeeShop {
  constructor(name, menu, orders) {
    (this.name = name), (this.menu = menu), (this.orders = orders);
  }

  addOrder(zamowienie) {
    if (this.menu.some((element) => element.item == zamowienie)) {
      this.orders.push(zamowienie);
      console.log("Order, added");
    } else {
      console.log("This item is currently unavailable!");
    }
  }
  //– dodaje nazwę elementu na koniec tablicy orders, jeśli istnieje w menu i zwraca komunikat "Order added!". W przeciwnym razie zwróć "This item is currently unavailable!"

  fulfillOrder() {
    if (this.orders.length > 0) {
      console.log(`the ${this.orders[0]} is ready`);
      if (this.orders.length > 1) {
        this.orders = this.orders.slice(1);
      } else {
        this.orders = [];
      }
    } else {
      console.log("All orders have been fulfilled!");
    }
  } //– jeśli orders nie jest pustą tablicą zwróć "The {item} is ready!". Jeśli tablica jest pusta zwróć "All orders have been fulfilled!".
  listOrder() {
    console.log(this.orders);
  } //– zwraca listę przyjetych zamówień, w przeciwnym wypadku pustą tablicę
  dueAmount() {
    console.log(
      this.orders.reduce((acc2, element) => {
        const cena = this.menu.reduce((acc, x) => {
          if (x.item == element) {
            return (acc += x.price);
          }
          return acc;
        }, 0.0);
        return acc2 + cena;
      }, 0.0)
    );
  } //– zwraca całkowitą należność za realizowane zamówienia.
  cheapestItem() {
    const posort = this.menu.sort((a, b) => {
      return a.price - b.price;
    });
    console.log(posort[0].item);
  } //– zwraca nazwę najtańszej pozycji w menu.
  drinksOnly() {
    console.log(
      this.menu.reduce((acc, ity) => {
        const { type, item } = ity;
        if (type == "drink") {
          acc.push(item);
          return acc;
        }

        return acc;
      }, [])
    );
  } //– zwraca tylko nazwy pozycji typu drink z menu.

  foodOnly() {
    console.log(
      this.menu.reduce((acc, ity) => {
        const { type, item } = ity;
        if (type == "food") {
          acc.push(item);
          return acc;
        }

        return acc;
      }, [])
    );
  } //– zwraca tylko nazwy pozycji typu food z menu.
}

const shop1 = new CoffeeShop(
  "shop1",
  [
    { item: "cinnamon roll", type: "food", price: 4.99 },
    { item: "hot chocolate", type: "drink", price: 2.99 },
    { item: "lemon tea", type: "drink", price: 2.5 },
  ],
  []
);

// shop1.addOrder("cinnamon roll");
// shop1.fulfillOrder();
// shop1.listOrders();
// shop1.dueAmount();
// shop1.cheapestItem();
// shop1.drinksOnly();
// shop1.foodOnly();

shop1.addOrder("espresso"); // "This item is currently unavailable!" (Sklep nie sprzedaje espresso)

shop1.addOrder("hot chocolate"); // "Order added!"
shop1.addOrder("cinnamon roll"); // "Order added!"
shop1.listOrder(); // ["hot chocolate", "cinnamon roll"]
shop1.dueAmount(); // 7.98 (suma cen za hot chocolate i cinnamon roll)
shop1.fulfillOrder(); // "The hot chocolate is ready!"
shop1.fulfillOrder(); // "The cinnamon roll is ready!"
shop1.fulfillOrder(); // "All orders have been fulfilled!" (Wszystkie zamówienia zostały zrealizowane)
shop1.listOrder(); // []

shop1.dueAmount(); // 0.0
shop1.cheapestItem(); // "lemon tea"
shop1.drinksOnly(); // ["hot chocolate", "lemon tea"]
shop1.foodOnly(); // ["cinnamon roll"]
