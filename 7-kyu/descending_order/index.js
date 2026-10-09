function descendingOrder(n) {
  let digit = n.toString().split("");
  const sorted = digit.sort((b, a) => a - b);
  const nv = sorted.join("");
  return parseInt(nv);
}
