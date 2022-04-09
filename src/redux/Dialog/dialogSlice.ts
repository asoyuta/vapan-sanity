import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface DialogState {
  charactersNumber: number
  firstPersonId: number
  showSettings: boolean
  showTranslation: boolean
  showFurigana: boolean
}

const initialState: DialogState = {
  charactersNumber: 1,
  firstPersonId: 0,
  showSettings: false,
  showTranslation: true,
  showFurigana: true,
}

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setCharactersNumber: (state, action) => {
      state.charactersNumber = action.payload
    },
    proceedFirstPersonId: (state) => {
      state.firstPersonId = (state.firstPersonId + 1) % state.charactersNumber
    },
    toggleShowSettings: (state) => {
      state.showSettings = !state.showSettings
    },
    toggleShowTranslation: (state) => {
      state.showTranslation = !state.showTranslation
    },
    toggleShowFurigana: (state) => {
      state.showFurigana = !state.showFurigana
    },
  },
})

export const {
  setCharactersNumber,
  proceedFirstPersonId,
  toggleShowSettings,
  toggleShowTranslation,
  toggleShowFurigana,
} = dialogSlice.actions

export const selectFirstPersonId = (
  state: RootState
): DialogState['firstPersonId'] => state.dialog.firstPersonId
export const selectShowSettings = (
  state: RootState
): DialogState['showSettings'] => state.dialog.showSettings
export const selectShowTranslation = (
  state: RootState
): DialogState['showTranslation'] => state.dialog.showTranslation
export const selectShowFurigana = (
  state: RootState
): DialogState['showFurigana'] => state.dialog.showFurigana

export default dialogSlice.reducer
