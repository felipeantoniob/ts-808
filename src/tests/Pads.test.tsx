import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import Pads from '../components/Pads'

describe('Pads', () => {
  it('renders Pads component', () => {
    render(<Pads />)
  })
})
