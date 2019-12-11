import TreeNode from '../src/components/TreeNode'

export default {
  title: 'TreeNode',
  component: TreeNode
}

export const text = () => TreeNode({ data: { name: 'Test' } })

export const textWithIcon = () => TreeNode({ data: { name: 'Test' } })
