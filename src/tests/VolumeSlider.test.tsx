import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import VolumeSlider from '../components/VolumeSlider'

describe('VolumeSlider', () => {
  it('renders VolumeSlider component correctly', () => {
    render(<VolumeSlider />)
    expect(screen.getByRole('heading', { level: 2, name: 'Volume' })).toBeInTheDocument()
  })

  it('should have an initial value of 0.5', () => {
    render(<VolumeSlider />)

    const input = screen.getByTestId('input')

    expect(input).toHaveValue('0.5')
  })

  it('should be able to change value', () => {
    render(<VolumeSlider />)

    const input = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: '1' } })

    expect(input).toHaveValue('1')
  })
})
