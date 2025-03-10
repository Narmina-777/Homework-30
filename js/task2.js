const orders = [
  {
    orderId: 201,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 1, name: "Laptop", quantity: 1, price: 1500 },
      { productId: 2, name: "Mouse", quantity: 2, price: 50 },
    ],
    status: "delivered",
  },
  {
    orderId: 202,
    customer: { id: 2, name: "Bob", email: "bob@example.com" },
    items: [
      { productId: 3, name: "Keyboard", quantity: 1, price: 100 },
      { productId: 4, name: "Monitor", quantity: 1, price: 500 },
    ],
    status: "pending",
  },
  {
    orderId: 203,
    customer: { id: 3, name: "Charlie", email: "charlie@example.com" },
    items: [
      { productId: 5, name: "Headphones", quantity: 1, price: 200 },
      { productId: 2, name: "Mouse", quantity: 1, price: 50 },
    ],
    status: "shipped",
  },
  {
    orderId: 204,
    customer: { id: 1, name: "Alice", email: "alice@example.com" },
    items: [
      { productId: 6, name: "Webcam", quantity: 1, price: 120 },
      { productId: 4, name: "Monitor", quantity: 2, price: 500 },
    ],
    status: "delivered",
  },
];
const targetEmail = "alice@example.com";
const targetProductId = 6;
// TASK 1
const aliceOrders = orders.filter(
  (order) => order.customer.email === targetEmail
);
console.log("Заказы клиента с email", targetEmail, ":", aliceOrders);

// TASK 2
const orderWebcam = orders.find((order) =>
  order.items.find((item) => item.productId === targetProductId)
);
console.log("Заказ с productId", targetProductId, ":", orderWebcam);

// TASK 3
const ordersSum = orders.map((order) => ({
  orderId: order.orderId,
  total: order.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  status: order.status,
}));
console.log("Сумма заказов:", ordersSum);

// TASK 4
const allItems = orders.flatMap((order) => order.items);
console.log("Все предметы:", allItems);

// TASK 5
const deliveredOrders = orders.every((order) => order.status === "delivered");
console.log("Все ли заказы доставлены?", deliveredOrders);

// TASK 6
const pendingOrders = orders.some((order) => order.status === "pending");
console.log("Есть ли отложенный заказ?", pendingOrders);
