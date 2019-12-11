import jsxElem from 'jsx-no-react'
import TreeList from './TreeList'

export default {
  title: 'TreeList',
  component: TreeList
}

const mockData = [
  {
    name: 'A',
    children: [{ name: 'A - A' }, { name: 'A - B' }]
  },
  {
    name: 'B',
    children: [
      { name: 'B - A' },
      { name: 'B - B' },
      { name: 'B - C', children: [{ name: 'B - C - A' }] }
    ]
  },
  {
    name: 'C'
  }
]

export const text = () => <TreeList data={mockData} />
