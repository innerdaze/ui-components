import TreeNode from "./TreeNode";

const TreeList = ({ data, renderNode, ...handlers }) =>
  data.reduce((acc, props) => {
    const nodeProps = {
      ...handlers,
      renderNode,
      name: props.name,
      data: props
    };

    if (props.children.length) {
      nodeProps.children = TreeList({
        ...handlers,
        renderNode,
        data: props.children
      });
    }

    acc.appendChild(TreeNode(nodeProps));

    return acc;
  }, document.createElement("ul"));

export default TreeList;
