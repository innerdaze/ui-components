import curry from "./curry";

let accValue;

export default curry(function reduceTree(fn, childrenProp, initialValue, tree) {
  accValue = initialValue;

  for (let i = 0, ln = tree.length; i < ln; i++) {
    const item = tree[i];
    const child = item[childrenProp];

    accValue = fn(accValue, item);

    if (child && child.length) {
      reduceTree(fn, childrenProp, accValue, child);
    }
  }

  return accValue;
});
