import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Pad from '../components/Pad'
import { PADS } from '../constants'

describe('Pad', () => {
  it('renders Pad component correctly', () => {
    render(<Pad {...PADS[0]} />)

    expect(screen.getByRole('button')).toHaveTextContent(PADS[0].keyTrigger)
  })

  it('should be able to click the pad', () => {
    render(<Pad {...PADS[0]} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)
  })
  it('should be able to click the pad', () => {
    render(<Pad {...PADS[0]} />)

    const event = new KeyboardEvent('keydown', { keyCode: PADS[0].keyCode })

    global.dispatchEvent(event)
  })
})
