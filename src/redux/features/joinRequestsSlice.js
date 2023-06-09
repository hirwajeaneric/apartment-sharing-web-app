import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { APIS } from '../../utils/APIS';

const initialState = {
    listOfProperties: [],
    recentProperties: [],
    selectedProperty: {},
    rentedProperties: [],
    ownedProperties: [],
    rentRequests: [],
    joinRequests: [],
    contracts: [],
    tenants: [],
    numberOfRentedProperties: 0,
    numberOfOwnedProperties: 0,
    numberOfJoinRequests: 0, 
    numberOfRentRequests: 0,
    numberOfContracts: 0,
    numberOfTenants: 0,
    numberOfProperties: 0,
    numberOfPropertiesForJoin: 0,
    isLoading: false,
    isProcessing: false,
    signedInUser: {}
}

export const getProperties = createAsyncThunk(
    'property/getProperties',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(APIS.propertyApis.list);
            thunkAPI.dispatch({ type: 'property/generateTotal', payload: response.data.properties.length });
            return response.data.properties; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getContracts = createAsyncThunk(
    'property/getProperties',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(APIS.propertyApis.list);
            thunkAPI.dispatch({ type: 'property/generateTotal', payload: response.data.properties.length });
            return response.data.properties; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getRentRequests = createAsyncThunk(
    'property/getProperties',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(APIS.propertyApis.list);
            thunkAPI.dispatch({ type: 'property/generateTotal', payload: response.data.properties.length });
            return response.data.properties; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getJoinRequests = createAsyncThunk(
    'property/getProperties',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(APIS.propertyApis.list);
            thunkAPI.dispatch({ type: 'property/generateTotal', payload: response.data.properties.length });
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
            // console.log(response.data);
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
        addNew: {

        },
        edit: {
            
        },
        trash: {

        },
        trashAll: {

        },
        generateTotal: (state, action) => {
            state.numberOfProperties = action.payload;
        },
        generateNumberOfPropertiesForJoin: (state, action) => {

        },
        generateNumberOfPropertiesForRent: (state, action) => {

        },
        generateNumberOfJoinRequests: (state, action) => {

        },
        generateNumberOfRentRequests: (state, action) => {

        },
        generateNumberOfContracts: (state, action) => {

        },
        generateNumberOfTenants: (state, action) => {

        }
    },
    extraReducers: {
        [getProperties.pending] : (state)=> {
            state.isLoading = true;
        },
        [getProperties.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.listOfProperties = action.payload;
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
    }
});

export const { 
    listAll, 
    addNew, 
    edit, 
    trash, 
    trashAll, 
    generateTotal, 
    generateNumberOfPropertiesForJoin,
    generateNumberOfContracts,
    generateNumberOfJoinRequests,
    generateNumberOfRentRequests,
    generateNumberOfTenants,
    generateNumberOfPropertiesForRent
} = propertySlice.actions;
export default propertySlice.reducer;