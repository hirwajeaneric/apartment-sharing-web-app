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
        updateSelectedProperty: (state, action) => {
            state.selectedProperty = action.payload.property;
        },
        getRentedProperties : (state, action) => {
            const rentedProperties = [];
            const { user, properties } = action.payload;
            properties.forEach(property => {
                
            })

        },
        getLisOfTenants: (state, action) => {
            const tenants = [];

        }
    },
});

export const { 
    getRentedProperties,
    getLisOfTenants,
    updateSelectedProperty
} = responseAndProgressSlice.actions;
export default responseAndProgressSlice.reducer;