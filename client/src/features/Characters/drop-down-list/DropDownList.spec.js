import React from 'react'
import { render } from '@testing-library/react'
import Dropdownlist from './DropDownList'

describe('Dropdownlist', () => {
    it('should mount correctly', () => {
        render(<Dropdownlist />)
    })
})
