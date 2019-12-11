import TreeList from "./TreeList";

const TreeView = config => {
  const el = document.createElement("div");

  el.appendChild(TreeList(config));

  el.classList.add("x-tree-view");

  return el;
};

export default TreeView;
