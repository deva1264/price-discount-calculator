// =====================================================
// Price & Discount Calculator – JavaScript Fundamentals
// Assignment No. 2 | Week 5 – Session 15
// Pure JavaScript: no DOM, no arrays.
// =====================================================

// ---------- 1. Product variables ----------
const productName = "Wireless Noise-Cancelling Headphones";
const basePrice = 3499;          // number (Rs.)
const discountPercent = 15;      // number (%)
const taxRate = 18;              // number (%)
const stockStatus = "limited";   // 'in_stock' | 'limited' | 'out_of_stock'

// Small helper so every money value is rounded to 2 decimals
function round2(value) {
  return Math.round(value * 100) / 100;
}

// ---------- 2. Price after discount ----------
function calculateDiscountedPrice(price, discount) {
  const discountAmount = (price * discount) / 100;
  return round2(price - discountAmount);
}

// ---------- 3. Tax amount ----------
function calculateTax(price, taxRate) {
  return round2((price * taxRate) / 100);
}

// ---------- 4. Final price = discounted price + tax ----------
function calculateFinalPrice(price, discount, taxRate) {
  const discounted = calculateDiscountedPrice(price, discount);
  const tax = calculateTax(discounted, taxRate); // tax on the discounted price
  return round2(discounted + tax);
}

// ---------- 5. Shipping rule ----------
function isFreeShipping(finalPrice) {
  if (finalPrice >= 500) {
    return "Free Shipping";
  }
  return "Shipping: Rs.49";
}

// ---------- 6. Stock message (switch) ----------
function getStockMessage(status) {
  switch (status) {
    case "in_stock":
      return "In Stock";
    case "limited":
      return "Limited Stock";
    case "out_of_stock":
      return "Out of Stock";
    default:
      return "Unknown Status";
  }
}

// ---------- 7. Call all six functions and print the summary ----------
const discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
const taxAmount = calculateTax(discountedPrice, taxRate);
const finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
const shippingMessage = isFreeShipping(finalPrice);
const stockMessage = getStockMessage(stockStatus);

console.log("=========== PRICE SUMMARY ===========");
console.log(`Product         : ${productName}`);
console.log(`Base Price      : Rs.${basePrice.toFixed(2)}`);
console.log(`Discount        : ${discountPercent}%`);
console.log(`Discounted Price: Rs.${discountedPrice.toFixed(2)}`);
console.log(`Tax (${taxRate}%)       : Rs.${taxAmount.toFixed(2)}`);
console.log(`Final Price     : Rs.${finalPrice.toFixed(2)}`);
console.log(`Shipping        : ${shippingMessage}`);
console.log(`Availability    : ${stockMessage}`);
console.log("=====================================");
