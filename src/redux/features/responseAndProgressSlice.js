import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isProcessing: false,
    message: '',
    severity: '',
}

const responseAndProgressSlice = createSlice({
    name: 'responseAndProgress',
    initialState,
    reducers: {
        toggleProcessing: (state) => {
            state.isProcessing = !state.isProcessing;
        },
        setMessage : (state, action) => {
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        }
    },
});

export const { 
    toggleProcessing,
    setMessage
} = responseAndProgressSlice.actions;
export default responseAndProgressSlice.reducer;