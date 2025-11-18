function calculateTax(amount) {
  const tax = amount * 0.1;

  return tax;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  let max = Math.max(num1, num2);

  return max;
}

function isPalindrome(word) {
  let palindrom = word.toLowerCase().split("").reverse().join("");

  return palindrom === word;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  const discountedPrice = originalPrice - discount;

  return discountedPrice;
}
// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
