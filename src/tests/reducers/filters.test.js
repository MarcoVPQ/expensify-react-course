import moment from 'moment'

import filtersReducer from '../../reducers/filters'


test('should setup default values', () => {
    const state = filtersReducer(undefined,{type: '@@INIT'})

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})

    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})

    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const currentState = {
        text: 'g',
        startDate: undefined,
        endDate: undefined,
        sortBy: undefined
    }
    const action = {type: 'SET_TEXT_FILTER'}

    const state = filtersReducer(currentState,action.type)


    expect(state.text).toBe('g')
})

test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: moment().toNow(),
        endDate: undefined,
        sortBy: undefined
    }

    const action = {type: 'SET_START_DATE'}

    const state = filtersReducer(currentState, action.type)

    expect(state.startDate).toBe(moment().toNow())
})

test('should set endDate filter', () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: moment().toNow(),
        sortBy: undefined
    }

    const action = {type: 'SET_END_DATE'}

    const state = filtersReducer(currentState, action.type)

    expect(state.endDate).toBe(moment().toNow())
    
})