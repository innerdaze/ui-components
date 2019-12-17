// import { h } from 'preact'
import React from 'react'
import TreeNode from '@components/TreeNode'

const TreeList = ({
  data,
  collapsible,
  renderNode,
  textProp = 'text',
  childrenProp = 'children',
  ...handlers
}) => {
  return (
    <ul>
      {data.reduce((acc, props) => {
        const nodeProps = {
          ...handlers,
          collapsible,
          renderNode,
          text: props[textProp],
          nodeData: props
        }

        const children = props[childrenProp]

        if (children && children.length) {
          nodeProps.children = (
            <TreeList
              {...handlers}
              textProp={textProp}
              childrenProp={childrenProp}
              collapsible={collapsible}
              renderNode={renderNode}
              data={children}
            />
          )
        }

        acc.push(<TreeNode {...nodeProps} />)

        return acc
      }, [])}
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
