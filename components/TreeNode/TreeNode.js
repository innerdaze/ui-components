// import { h, Fragment } from 'preact'
// import { useState } from 'preact/hooks'
import React, { useState, Fragment } from 'react'
import { classes } from '@lib/render'

import FAIcon from '@components/FAIcon'

function defaultRenderNode({ text, icon, isLeaf, nodeData }) {
  return (
    <Fragment>
      <span>{text}</span>
      {!isLeaf && icon ? icon : null}
    </Fragment>
  )
}

const VisibilityToggle = ({
  isVisible,
  handleClick,
  visibleCls = 'active',
  visibleIcon = <FAIcon type="chevron-down" />,
  hiddenIcon = <FAIcon type="chevron-up" />
}) => (
  <a class={isVisible ? visibleCls : ''} href="#" onClick={handleClick}>
    {isVisible ? visibleIcon : hiddenIcon}
  </a>
)

const TreeNode = ({
  children,
  nodeData,
  text,
  collapsible,
  renderNode = defaultRenderNode,
  collapsedIcon = <FAIcon type="chevron-up" />,
  expandedIcon = <FAIcon type="chevron-down" />,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  handleCollapse = Function.prototype,
  handleExpand = Function.prototype
}) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const anchorEl = ({ children }) => (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        handleClick(e, { data, isLeaf: Boolean(children) })
      }}
      onMouseEnter={e => {
        handleMouseEnter({ event: e, data, isLeaf: Boolean(children) })
      }}
      onMouseLeave={e => {
        handleMouseLeave({ event: e, data, isLeaf: Boolean(children) })
      }}
    >
      {children}
    </a>
  )
  // const spanEl = ({ children }) => <span>{children}</span>
  const TreeNodeContent = handleClick ? anchorEl : Fragment

  let iconAnchor

  if (collapsible) {
    const handleNodeCollapseIconClick = function({ event }) {
      event.preventDefault()

      setIsExpanded(!isExpanded)

      const _fn = !isExpanded ? handleExpand : handleCollapse

      _fn({ event, data: nodeData })
    }

    iconAnchor = (
      <VisibilityToggle
        visibleIcon={expandedIcon}
        hiddenIcon={collapsedIcon}
        isVisible={isExpanded}
        handleClick={e => handleNodeCollapseIconClick({ event: e })}
      />
    )
  }

  const el = (
    <li
      class={classes({
        active: children && isExpanded
      })}
    >
      <TreeNodeContent>
        {renderNode({
          text,
          nodeData,
          isExpanded,
          icon: iconAnchor,
          isLeaf: !children
        })}
      </TreeNodeContent>
      {isExpanded && children}
    </li>
  )

  return el
}

export default TreeNode
