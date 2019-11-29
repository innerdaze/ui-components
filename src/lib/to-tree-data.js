export default function toTreeData({
  data,
  idProp = "id",
  textProp = "text",
  itemsProp = "items",
  parentProp = "parentId"
}) {
  var map = {},
    node,
    roots = [],
    i;
  for (i = 0; i < data.length; i += 1) {
    map[data[i][idProp]] = i; // initialize the map
  }
  for (i = 0; i < data.length; i += 1) {
    node = data[i];
    node[itemsProp] = [];

    if (!node.text) {
      node.text = data[i][textProp];
    }

    if (node[parentProp] !== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      data[map[node[parentProp]]][itemsProp].push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}
