import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { APIS } from '../../utils/APIS';

const initialState = {
    listOfProperties: [],
    numberOfProperties: 0,
    recentProperties: [],
    selectedProperty: {},
    rentedProperties: [],
    ownedProperties: [],
    propertiesForJoin: [],
    propertiesForRent: [],
    numberOfRentedProperties: 0,
    numberOfOwnedProperties: 0,
    numberOfPropertiesForJoin: 0,
    numberOfPropertiesForRent: 0,
    numberOfTenants: 0,
    listOfTenants: [],
    isLoading: false,
    isProcessing: false
}

export const getProperties = createAsyncThunk(
    'property/getProperties',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.propertyApis.list);
            thunkAPI.dispatch({ type: 'property/generateTotal', payload: response.data.properties.length });
            thunkAPI.dispatch({ type: 'property/getRentedProperties', payload: { user: userId, properties: response.data.properties} });
            return response.data.properties; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getOwnedProperties = createAsyncThunk(
    'property/getOwnedProperties',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.propertyApis.findByOwnerId+userId);
            response.data.properties.forEach(element => {
                element.id = element._id;
            });
            return response.data.properties; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getPropertyDetails = createAsyncThunk(
    'property/getPropertyDetails',
    async (propertyId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.propertyApis.findById+propertyId);    
            return response.data.property; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const addProperty = createAsyncThunk(
    'property/addProperty',
    async ( property, thunkAPI) => {
        try {
            const config = { headers: { "Content-Type":"multipart/form-data" } }
            const response = await axios.post(APIS.propertyApis.add, property, config);
            thunkAPI.dispatch(getProperties());
            thunkAPI.dispatch({ type: 'property/generateTotal', payload: response.data.properties.length });
            return response.data.property; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const updateProperty = createAsyncThunk(
    'property/updateProperty',
    async ( update, thunkAPI) => {
        try {
            const { id, property } = update;
            const config = { headers: { "Content-Type":"multipart/form-data" } }
            var response = {};
            if (!property.pictures) {
                response = await axios.put(APIS.propertyApis.update+id, property);
            } else {
                response = await axios.put(APIS.propertyApis.update+id, property, config);
            }
            thunkAPI.dispatch({ type: 'property/updateSelectedProperty', payload: response.data.property });
            thunkAPI.dispatch(getProperties());
            return response.data.property; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

const propertySlice = createSlice({
    name: 'property',
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
    extraReducers: {
        [getProperties.pending] : (state)=> {
            state.isLoading = true;
        },
        [getProperties.fulfilled] : (state,action) => {
            const propertiesForJoin = [];
            const propertiesForRent = [];
            state.isLoading = false;
            state.listOfProperties = action.payload;
            state.numberOfProperties = action.payload.length;

            action.payload.forEach(property => {
                if (property.status === 'For Join') {
                    propertiesForJoin.push(property);
                } else if (property.status === 'For Rent') {
                    propertiesForRent.push(property);
                } 
            });

            state.propertiesForJoin = propertiesForJoin;
            state.numberOfPropertiesForJoin = propertiesForJoin.length;
            state.propertiesForRent = propertiesForRent;
            state.numberOfPropertiesForRent = propertiesForRent.length;
        },
        [getProperties.rejected] : (state) => {
            state.isLoading = false;
        },
        [getPropertyDetails.pending] : (state)=> {
            state.isLoading = true;
        },
        [getPropertyDetails.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.selectedProperty = action.payload;
        },
        [getPropertyDetails.rejected] : (state) => {
            state.isLoading = false;
        },
        [addProperty.pending] : (state)=> {
            state.isProcessing = true;
        },
        [addProperty.fulfilled] : (state,action) => {
            state.isProcessing = false;
        },
        [addProperty.rejected] : (state) => {
            state.isProcessing = false;
        },
        [updateProperty.pending] : (state)=> {
            state.isProcessing = true;
        },
        [updateProperty.fulfilled] : (state,action) => {
            state.isProcessing = false;
        },
        [updateProperty.rejected] : (state) => {
            state.isProcessing = false;
        },
        [getOwnedProperties.pending] : (state)=> {
            state.isProcessing = true;
        },
        [getOwnedProperties.fulfilled] : (state,action) => {
            state.isProcessing = false;
            state.ownedProperties = action.payload;
            state.numberOfOwnedProperties = action.payload.length;
        },
        [getOwnedProperties.rejected] : (state) => {
            state.isProcessing = false;
        },
    }
});

export const { 
    getRentedProperties,
    getLisOfTenants,
    updateSelectedProperty
} = propertySlice.actions;
export default propertySlice.reducer;