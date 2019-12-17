// import { h } from 'preact'
import React from 'react'
import Label from './Label'
import { specs, describe, it } from 'storybook-addon-specifications'

import { mount } from 'enzyme'
import expect from 'expect'

export default {
  title: 'Label',
  component: Label
}

export const Simple = () => {
  return <Label text="Test" />
}

specs(() =>
  describe('Simple', () => {
    it('Should display "Test"', () => {
      const output = mount(<Simple />)
      expect(output.text()).toContain('Test')
    })
  })
)

Simple.story = {
  parameters: { tests: [1, 2, 3] }
}

export const Emoji = () => <Label text="💯" />
