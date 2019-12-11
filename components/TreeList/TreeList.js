import jsxElem from 'jsx-no-react'
import TreeNode from '@components/TreeNode'

const TreeList = ({ data, collapsible, renderNode, ...handlers }) => {
  return (
    <ul>
      {data.reduce((acc, props) => {
        const nodeProps = {
          ...handlers,
          collapsible,
          renderNode,
          name: props.name,
          data: props
        }

        if (props.children && props.children.length) {
          nodeProps.children = (
            <TreeList
              {...handlers}
              collapsible
              renderNode
              data={props.children}
            />
          )
        }

        return <TreeNode {...nodeProps} />
      })}
    </ul>
  )
}

// const TreeList = ({ data, collapsible, renderNode, ...handlers }) =>
//   data.reduce((acc, props) => {
//     const nodeProps = {
//       ...handlers,
//       collapsible,
//       renderNode,
//       name: props.name,
//       data: props
//     }

//     if (props.children && props.children.length) {
//       nodeProps.children = TreeList({
//         ...handlers,
//         collapsible,
//         renderNode,
//         data: props.children
//       })
//     }

//     acc.appendChild(TreeNode(nodeProps))

//     return acc
//   }, document.createElement('ul'))

export default TreeList
