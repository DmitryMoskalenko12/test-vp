import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  'records': [],
  'renderedAllRecords': [],
  'renderedCurrentRecords': [],
  'renderedCompRecords': [],
}

const mainSlicesRecords = createSlice({
  'name': 'records',
  initialState,
  'reducers': {
    'onAddRecord': (state, action) => {
      state.records = [...state.records, action.payload]
    },
    'onToggleStatusRecord': (state, action) => {
      // eslint-disable-next-line id-blacklist
      state.records = state.records.map((item) => {
        // eslint-disable-next-line id-blacklist
        if (item.id === action.payload) {
          return {
            // eslint-disable-next-line id-blacklist
            ...item,
            // eslint-disable-next-line id-blacklist
            'filter': item.filter === 'Current' ? 'Completed' : 'Current',
          }
        }
        // eslint-disable-next-line id-blacklist
        return item
      })
    },
    'onFilteredAllRecords': (state) => {
      // eslint-disable-next-line id-blacklist
      state.renderedAllRecords = state.records.filter((item) => {
        // eslint-disable-next-line id-blacklist
        return item.filter
      })
    },
    'onFilteredCompRecords': (state) => {
      // eslint-disable-next-line id-blacklist
      state.renderedCompRecords = state.records.filter((item) => {
        // eslint-disable-next-line id-blacklist
        return item.filter === 'Completed'
      })
    },
    'onFilteredCurrentRecords': (state) => {
      // eslint-disable-next-line id-blacklist
      state.renderedCurrentRecords = state.records.filter((item) => {
        // eslint-disable-next-line id-blacklist
        return item.filter === 'Current'
      })
    },
  },
})

const { actions, reducer } = mainSlicesRecords

export const {
  onAddRecord,
  onFilteredAllRecords,
  onFilteredCurrentRecords,
  onFilteredCompRecords,
  onToggleStatusRecord,
} = actions

export default reducer
