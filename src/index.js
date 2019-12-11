import './reset.less'
import './styles.less'
import './theme.less'
import storeHierarchyData from './data/store-hierarchy'
import { real } from './data/store-hierarchy'
import { render, attachHandlers } from './lib/render'
import toTreeData from './lib/to-tree-data'
import TreeView from './components/TreeView'
import reduceTree from './lib/reduce-tree'

/*--------------================----------------*/
// Data Lib

/*--------------================----------------*/
// Components

/*----------------------------------------------*/
// Tree

/*--------------================----------------*/
// App

// console.log(
//   toTreeData({
//     data: storeHierarchyData,
//     textProp: "name",
//     itemsProps: "children"
//   })
// );

const getDescendantCount = reduceTree((acc, curr) =>
  !curr.children || !curr.children.length ? (acc++, acc) : acc
)('children')(0)

function Icon({ cls }) {
  const i = document.createElement('i')

  i.className = cls

  return i
}

function _renderNode({ data, icon, isLeaf, isCollapsed }, anchorEl) {
  const innerContainer = document.createElement('div')

  anchorEl.innerHTML = ''
  anchorEl.textContent = data.name
  anchorEl.appendChild(
    Icon({ cls: isLeaf ? 'fas fa-map-marker-alt' : 'far fa-map' })
  )

  innerContainer.appendChild(anchorEl)

  if (!isLeaf) {
    innerContainer.appendChild(icon)

    if (isCollapsed) {
      const span = document.createElement('span')
      span.classList.add('x-tree-view-collapsed-count')
      span.textContent = `(${getDescendantCount([data])})`

      innerContainer.appendChild(span)
    }
  }

  console.log('rendering node', innerContainer)

  return innerContainer
}

const treeView = TreeView({
  data: toTreeData({
    data: storeHierarchyData,
    itemsProp: 'children'
  }),
  renderNode: ({ el, ...props }) => _renderNode(props, el)
  // onLeafHover({ event, data }) {
  //   console.log("onLeafHover", event.target, data);
  // },
  // onLeafClick({ event, data }) {
  //   console.log("onLeafClick", event.target, data);
  // },
  // onNodeHover({ event, data }) {
  //   console.log("onNodeHover", event.target, data);
  // },
  // onNodeClick({ event, data }) {
  //   console.log("onNodeClick", event.target, data);
  // },
  // onCollapse({ event, data, node }) {
  //   _renderNode(
  //     {
  //       data,
  //       container: node,
  //       isLeaf: !data.children,
  //       isCollapsed: true
  //     },
  //     node.children[0]
  //   );
  // },
  // onExpand({ event, data, node }) {
  //   _renderNode(
  //     {
  //       data,
  //       container: node,
  //       isLeaf: !data.children,
  //       isCollapsed: false
  //     },
  //     node.children[0]
  //   );
  // }
})

const container = document.createElement('div')

container.classList.add('x-side-panel')
container.appendChild(treeView)

render(container, 'app')
