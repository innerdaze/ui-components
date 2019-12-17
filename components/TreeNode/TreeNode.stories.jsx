// import { h } from 'preact'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs/react'

import TreeNode from './TreeNode'

export default {
  title: 'TreeNode',
  component: TreeNode
}

export const simple = () => <TreeNode text={text('Text', 'Simple')} />

export const collapsible = () => (
  <TreeNode collapsible text={text('Text', 'Parent')}>
    <div>Child A</div>
    <div>Child B</div>
  </TreeNode>
)

export const clickable = () => (
  <TreeNode
    handleClick={action('treenode:click')}
    handleMouseEnter={action('treenode:mouseenter')}
    handleMouseLeave={action('treenode:mouseleave')}
    text={text('Text', 'Click Me')}
  />
)
