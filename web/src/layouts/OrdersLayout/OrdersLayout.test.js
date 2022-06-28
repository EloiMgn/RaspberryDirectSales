import { render } from '@redwoodjs/testing/web'

import OrdersLayout from './OrdersLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrdersLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrdersLayout />)
    }).not.toThrow()
  })
})
