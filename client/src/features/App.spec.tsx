import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Mounting', () => {
    it('should mount App successfully', () => {
        render(<App />)
    })
})
