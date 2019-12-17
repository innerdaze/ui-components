import React, { Fragment } from 'react'
import { AddonPanel } from '@storybook/components'
import { addons, types } from '@storybook/addons'

const Content = () => {
  return <Fragment>Showing some stuff here</Fragment>
}

addons.register('my/tests', () => {
  addons.add('tests/panel', {
    title: 'tests',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Content />
      </AddonPanel>
    )
  })
})
