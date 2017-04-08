jest.unmock('../actions')

import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import fetchMock from 'fetch-mock'
import environmentsActions from '../actions'


describe('EnvironmentsActions', () => {
  it('get latest environments', () => {
    fetchMock.mock('fixtures/environments.json', 'GET', {})
    environmentsActions.refresh()
    expect(fetchMock.called('fixtures/environments.json')).toBe(true);
  })
})
