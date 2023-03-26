import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('App', () => {
  it('should render App component correctly', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'TS-808' })).toBeInTheDocument()
  })
})
