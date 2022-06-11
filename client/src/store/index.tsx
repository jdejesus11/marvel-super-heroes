import { configureStore, createSlice } from '@reduxjs/toolkit'

type CharactersType = [] | undefined | null
type CurrentComponentType = string | null

const charactersInitialState: CharactersType = []
const currentComponentInitialState: CurrentComponentType = null

/**
 * Slices
 */
const charactersSlice = createSlice({
    name: 'characters',
    initialState: charactersInitialState,
    reducers: {
        addCharacters: (state: CharactersType, action) => {
            state = Object.assign([], action.payload)
        },
    },
})

const currentComponentSlice = createSlice({
    name: 'currentComponent',
    initialState: currentComponentInitialState,
    reducers: {},
})

/**
 * Reducers
 */
const charactersReducer = charactersSlice.reducer
const currentComponentReducer = currentComponentSlice.reducer

/**
 * Actions
 */
export const { addCharacters } = charactersSlice.actions

/**
 * Store
 */
const store = configureStore({
    reducer: {
        charactersReducer,
        currentComponentReducer,
    },
})

export default store
