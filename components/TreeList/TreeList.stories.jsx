// import { h, Fragment } from 'preact'
import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { object, boolean } from '@storybook/addon-knobs/react'
import TreeList from './TreeList'
import without from '@lib/without'

export default {
  title: 'TreeList',
  component: TreeList
}

const mockData = [
  {
    text: 'A',
    children: [{ text: 'A - A' }, { text: 'A - B' }]
  },
  {
    text: 'B',
    children: [
      { text: 'B - A' },
      { text: 'B - B' },
      { text: 'B - C', children: [{ text: 'B - C - A' }] }
    ]
  },
  {
    text: 'C'
  }
]

export const Static = () => <TreeList data={mockData} />

export const Collapsible = () => <TreeList collapsible data={mockData} />

export const CustomNodeRenderer = () => {
  const CustomNode = ({ nodeData, text, icon, isLeaf }) => (
    <Fragment>
      {!isLeaf && icon}
      {' 🐿 '}
      {JSON.stringify(without('children')(nodeData))}
    </Fragment>
  )

  return <TreeList collapsible data={mockData} renderNode={CustomNode} />
}

export const Actions = () => (
  <TreeList
    collapsible
    data={mockData}
    handleClick={action('treenode:click')}
    handleMouseEnter={action('treenode:mouseenter')}
    handleMouseLeave={action('treenode:mouseleave')}
    handleCollapse={action('treenode:collapse')}
    handleExpand={action('treenode:expand')}
  />
)
