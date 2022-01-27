import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '.';

type TPayload = {
	name: string;
	frequency: number;
	image: string;
}

const initialState = {
	name: '',
	frequency: 0,
	image: ''
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
	activeRadio: (state, action: PayloadAction<TPayload>) => {
		return action.payload;
	},
	removeRadio:  () => {
		return initialState;
	}
  },
  extraReducers: {},
});

export const {activeRadio, removeRadio} = radioSlice.actions;

export const Radioselector = (state: RootState) => state;

export const RadioReducer = radioSlice.reducer;

export default radioSlice.reducer;
