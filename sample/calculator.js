function calculateTotal(price, quantity, discountCode) {
  if (price < 0 || quantity < 0) {
    throw new Error("Invalid input");
  }

  let total = price * quantity;

  if (discountCode === "WELCOME10") {
    total *= 0.9;
  } else if (discountCode === "FESTIVE20") {
    total *= 0.8;
  }

  if (total > 1000) {
    total -= 50; // bulk discount
  }

  return Math.round(total * 100) / 100;
}

module.exports = { calculateTotal };
