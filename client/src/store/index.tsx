import { configureStore, createSlice } from '@reduxjs/toolkit'

/**
 * Slices
 */
const charactersSlice = createSlice({
    name: 'characters',
    initialState: [] as any[],
    reducers: {
        addCharacters: (state, action) => {
            state = Object.assign([], action.payload)
        },
    },
})

const currentComponentSlice = createSlice({
    name: 'currentComponent',
    initialState: undefined,
    reducers: {},
})

/**
 * Reducers
 */
const charactersReducer = charactersSlice.reducer

/**
 * Actions
 */
export const { addCharacters } = charactersSlice.actions

/**
 * Store
 */
const store = configureStore({
    reducer: { charactersReducer },
})

export default store
