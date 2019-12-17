import React from 'react'
import addons, { makeDecorator } from '@storybook/addons'

export default makeDecorator({
  name: 'withTests',
  parameterName: 'tests',
  // This means don't run this decorator if the notes decorator is not set
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel()

    // Our simple API above simply sets the notes parameter to a string,
    // which we send to the channel
    channel.emit('my/customEvent', parameters)
    // we can also add subscriptions here using channel.on('eventName', callback);

    return getStory(context)
  }
})
