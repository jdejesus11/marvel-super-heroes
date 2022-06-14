import React, { useEffect, useState } from 'react'
import './DropDownList.scss'
import ArrowDownIcon from '../../../assets/images/arrowDown.svg'
import ArrowUpIcon from '../../../assets/images/up-svgrepo-com.svg'
import ProhibitedIcon from '../../../assets/images/prohibited.svg'

type SortingType = 'Ascending' | 'Descending'

interface DropDownListProps {
    options: Record<string, number>
    isDisabled?: boolean
    placeholder?: string
    onSelectEventCallback: (value: SortingType) => void
}

type Props = DropDownListProps

const DropDownList = ({
    options,
    isDisabled,
    placeholder,
    onSelectEventCallback,
}: Props): JSX.Element => {
    let [selectedValue, setSelectedValue] = useState<string | number | null>()
    let [areOptionVisible, setAreOptionVisible] = useState<boolean>(false)

    const getComponentClasses = (): string => {
        let base = 'dropdown'

        let states = {
            isDisabled: 'dropdown--disabled',
        }

        return `${base} ${isDisabled ? states['isDisabled'] : ''}`
    }

    const renderOptions = (): JSX.Element[] => {
        if (!options) return

        return Object.entries(options).map((entry, key) => (
            <option
                onClick={onSelectEvent}
                className="dropdown__option-item"
                value={entry[0]}
                key={key}
            >
                {entry[0]}
            </option>
        ))
    }

    const onClickEvent = (): void => {
        if (isDisabled) return
        setAreOptionVisible(!areOptionVisible)
    }

    const onSelectEvent = (
        event: React.MouseEvent<HTMLOptionElement>
    ): void => {
        setSelectedValue(event.currentTarget.value)
        onSelectEventCallback(event.currentTarget.value as SortingType)
    }

    return (
        <div
            data-name="dropdownlist"
            className={getComponentClasses()}
            onClick={onClickEvent}
            role="select-list"
        >
            <div className="dropdown__label-container">
                <label className="dropdown__label">
                    {selectedValue ?? placeholder}
                </label>
                <div className={'dropdown__icon-container'}>
                    <img
                        className="dropdown__icon"
                        src={
                            isDisabled
                                ? ProhibitedIcon
                                : areOptionVisible
                                ? ArrowUpIcon
                                : ArrowDownIcon
                        }
                        alt="arrow indicador"
                    />
                </div>
            </div>
            <div
                className={
                    'dropdown__option-list-container ' +
                    (areOptionVisible ? '' : 'dropdown--hidden')
                }
            >
                <div className={'dropdown__option-list'}>{renderOptions()}</div>
            </div>
        </div>
    )
}

export default DropDownList
