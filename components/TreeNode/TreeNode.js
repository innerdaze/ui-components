import { attachHandlers } from '@lib/render'

function defaultRenderNode({ data, icon, el }) {
  el.textContent = data.name
  icon && el.appendChild(icon)
  return el
}

const TreeNode = ({
  children,
  data,
  collapsible,
  renderNode = defaultRenderNode,
  hoverCls = 'hover',
  collapsedIconCls = 'fas fa-chevron-up',
  expandedIconCls = 'fas fa-chevron-down',
  onClick,
  // onNodeClick = Function.prototype,
  // onNodeHover = Function.prototype,
  // onLeafClick = Function.prototype,
  // onLeafHover = Function.prototype,
  onCollapse = Function.prototype,
  onExpand = Function.prototype
}) => {
  const el = document.createElement('li')
  const anchorEl = document.createElement('a')
  const spanEl = document.createElement('span')

  let iconAnchor

  if (collapsible) {
    iconAnchor = document.createElement('a')
    iconAnchor.setAttribute('href', '#')

    const icon = document.createElement('i')
    icon.className = el.classList.contains('active')
      ? expandedIconCls
      : collapsedIconCls

    iconAnchor.appendChild(icon)

    attachHandlers(
      { click: e => handleNodeCollapseIconClick({ event: e, data }) },
      iconAnchor
    )

    const handleNodeCollapseIconClick = function({ event, data }) {
      el.classList.toggle('active')

      const isCollapsed = !el.classList.contains('active')

      if (isCollapsed) {
        iconAnchor.className = collapsedIconCls
      } else {
        iconAnchor.className = expandedIconCls
      }

      el.replaceChild(
        renderNode({
          data,
          icon: iconAnchor,
          isLeaf: !children,
          isCollapsed,
          el: anchorEl
        }),
        el.children[0]
      )

      const _fn = isCollapsed ? onCollapse : onExpand

      _fn({ event, data, node: el })
    }
  }

  const handleTreeNodeMouseEnter = function() {
    el.classList.add(hoverCls)
  }

  const handleTreeNodeMouseLeave = function() {
    el.classList.remove(hoverCls)
  }

  anchorEl.setAttribute('href', '#')

  attachHandlers(
    {
      click: e => onClick(e, { data, isLeaf: Boolean(children) }),
      mouseenter: handleTreeNodeMouseEnter,
      mouseleave: handleTreeNodeMouseLeave,
      mouseover: e => (children ? onNodeHover : onLeafHover)({ event: e, data })
    },
    anchorEl
  )

  el.appendChild(
    renderNode({
      data,
      icon: iconAnchor,
      isLeaf: !children,
      isCollapsed: false,
      el: onClick ? anchorEl : spanEl
    })
  )

  if (children) {
    el.classList.add('active')
    el.appendChild(children)
  }

  return el
}

export default TreeNode
