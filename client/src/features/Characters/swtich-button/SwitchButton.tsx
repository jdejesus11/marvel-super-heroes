import React, { useEffect, useReducer } from 'react'
import './SwitchButton.scss'

type counterStateType = { onCounter: number; offCounter: number }

type counterActionType = {
    type: 'SUM' | 'RES'
    payload: { property: string; counter: number }
}

const counterInitialState: counterStateType = {
    onCounter: 0,
    offCounter: 0,
}

const counterReducer = (state: counterStateType, action: counterActionType) => {
    switch (action.type) {
        case 'SUM':
            return Object.assign({}, state, {
                [action.payload.property]:
                    state.onCounter + action.payload.counter,
            })
        default:
            return state
    }
}

const SwitchButton = () => {
    const [currentState, toggle] = useReducer(
        (currentState: boolean) => !currentState,
        false
    )

    const [counter, dispatchCounter] = useReducer(
        counterReducer,
        counterInitialState
    )

    useEffect(() => {
        console.log(`'Swith button was mounted and rendered. ${currentState}`)
    }, [currentState])

    useEffect(() => {
        console.log('Switch has been turned on: ', counter['onCounter'])
        console.log('Switch has been turned off: ', counter['offCounter'])

        return () => console.log('Cleaning up resources')
    }, [currentState])

    const onClickEvent = (event: React.MouseEvent) => {
        event.preventDefault()
        toggle()
        dispatchCounter({
            type: 'SUM',
            payload: {
                property: currentState ? 'onCounter' : 'offCounter',
                counter: 1,
            },
        })
    }

    return (
        <div role="switch" onClick={onClickEvent}>
            <a href="#"> {currentState ? 'On' : 'Off'} </a>
        </div>
    )
}

export default SwitchButton
