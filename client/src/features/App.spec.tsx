import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Mounting', () => {
    it('should mount App successfully', () => {
        const { queryByText } = render(<App />)

        let headerTextBiode = queryByText('Header')
        let mainTextNode = queryByText('Main')
        let footerTextNode = queryByText('Footer')

        expect(headerTextBiode).toBeInTheDocument()
        expect(mainTextNode).toBeInTheDocument()
        expect(footerTextNode).toBeInTheDocument()
    })
})
