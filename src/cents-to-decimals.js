// spec/cents-to-decimals.spec.js

function centsToDecimals(num) {
  if (!num) return 0;
  if (typeof num !== "number") return undefined;
  return num / 100;
}
