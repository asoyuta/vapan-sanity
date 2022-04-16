import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

type Image = {
  asset: {
    url: string
  }
}
export interface DialogState {
  firstPersonId: number
  showInfo: boolean
  showSettings: boolean
  showTranslation: boolean
  showFurigana: boolean
  showClip: boolean
  dialog: {
    _id: string
    _createdAt: string
    title: string
    mainImage: Image
    description: string
    characters: {
      japaneseName: string
      englishName: string
      image: Image
      twitterUrl: string
      youtubeUrl: string
    }[]
    originalUrl: string
    clipUrl: string
    lines: {
      character: {
        englishName: string
        image: Image
      }
      original: string
      translation: string
      description: object[]
    }[]
    slug: {
      current: string
    }
  }
}

const initialState: DialogState = {
  firstPersonId: 0,
  showInfo: false,
  showSettings: false,
  showTranslation: true,
  showFurigana: true,
  showClip: false,
  dialog: {
    _id: '',
    _createdAt: '',
    title: '',
    mainImage: {
      asset: {
        url: '',
      },
    },
    description: '',
    characters: [],
    originalUrl: '',
    clipUrl: '',
    lines: [],
    slug: {
      current: '',
    },
  },
}

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialog: (state, action) => {
      state.dialog = action.payload
    },
    proceedFirstPersonId: (state) => {
      state.firstPersonId =
        (state.firstPersonId + 1) % state.dialog.characters.length
    },
    toggleShowInfo: (state) => {
      state.showInfo = !state.showInfo
    },
    toggleShowSettings: (state) => {
      state.showSettings = !state.showSettings
    },
    toggleShowTranslation: (state) => {
      state.showTranslation = !state.showTranslation
    },
    toggleShowClip: (state) => {
      state.showClip = !state.showClip
    },
    toggleShowFurigana: (state) => {
      state.showFurigana = !state.showFurigana
    },
  },
})

export const {
  setDialog,
  proceedFirstPersonId,
  toggleShowInfo,
  toggleShowSettings,
  toggleShowTranslation,
  toggleShowFurigana,
  toggleShowClip,
} = dialogSlice.actions

export const selectDialog = (state: RootState): DialogState['dialog'] =>
  state.dialog.dialog
export const selectFirstPersonId = (
  state: RootState
): DialogState['firstPersonId'] => state.dialog.firstPersonId
export const selectShowInfo = (state: RootState): DialogState['showInfo'] =>
  state.dialog.showInfo
export const selectShowSettings = (
  state: RootState
): DialogState['showSettings'] => state.dialog.showSettings
export const selectShowTranslation = (
  state: RootState
): DialogState['showTranslation'] => state.dialog.showTranslation
export const selectShowFurigana = (
  state: RootState
): DialogState['showFurigana'] => state.dialog.showFurigana
export const selectShowClip = (state: RootState): DialogState['showClip'] =>
  state.dialog.showClip

export default dialogSlice.reducer
