const orders = [
  {
    orderId: 101,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 1, name: "Laptop", quantity: 1, price: 1200 },
      { productId: 2, name: "Mouse", quantity: 2, price: 25 },
    ],
  },
  {
    orderId: 102,
    customer: { id: 2, name: "Bob", email: "bob@example.com" },
    items: [
      { productId: 3, name: "Keyboard", quantity: 1, price: 70 },
      { productId: 4, name: "Monitor", quantity: 1, price: 300 },
    ],
  },
  {
    orderId: 103,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 5, name: "Headphones", quantity: 1, price: 100 },
      { productId: 2, name: "Mouse", quantity: 1, price: 25 },
    ],
  },
];
const targetEmail = "alice@example.com";
const targetProductId = 4;
// TASK 1
const aliceOrders = orders.filter(
  (order) => order.customer.email === targetEmail
);
console.log("Заказы клиента с email", targetEmail, ":", aliceOrders);

// TASK 2
const orderProductID = orders.find((order) =>
  order.items.find((item) => item.productId === targetProductId)
);
console.log("Заказ с productId", targetProductId, ":", orderProductID);

// TASK 3
const orderTotals = orders.map((order) => ({
  orderId: order.orderId,
  total: order.items.reduce((acc, item) => acc + item.quantity * item.price, 0),
}));
console.log("Сумма заказов:", orderTotals);

// TASK 4
const allItems = orders.flatMap((order) => order.items);
console.log("Все товары:", allItems);
