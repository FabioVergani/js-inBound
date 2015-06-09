function inBound(n,a,b){var o=Math,x=n;return o.max(o.min(n,b),a)===n;}


console.log(0,inBound(4,5,15));
console.log(1,inBound(7,5,15));
console.log(1,inBound(12,5,15));
console.log(1,inBound(15,5,15));
console.log(0,inBound(16,5,15));
