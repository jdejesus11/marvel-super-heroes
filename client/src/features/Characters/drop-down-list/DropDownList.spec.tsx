import React from 'react'
import { render, screen, fireEvent, createEvent } from '@testing-library/react'
import DropDownList from './DropDownList'
import '@testing-library/jest-dom'

describe('Dropdownlist', () => {
    let options: Record<string, number>
    let onSelectCallback: () => {}

    beforeAll(() => {
        options = {
            Ascending: 1,
            Descending: 1,
        }
    })

    it('should mount correctly', () => {
        render(
            <DropDownList
                options={options}
                onSelectEventCallback={onSelectCallback}
            />
        )
    })

    it('should shows list of sorting options', () => {
        let { queryByRole, queryByText } = render(
            <DropDownList
                options={options}
                onSelectEventCallback={onSelectCallback}
            />
        )
        let button = queryByRole('select-list')
        fireEvent(button, new MouseEvent('click'))
        expect(queryByText('Ascending')).toBeInTheDocument()
        expect(queryByText('Descending')).toBeInTheDocument()
    })
})
