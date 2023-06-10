import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { APIS } from '../../utils/APIS';

const initialState = {
    listOfRentRequests: [],
    numberOfRentRequests: 0,
    recentRentRequests: [],
    selectedRentRequest: {},
    myRentRequests: [],
    isLoading: false,
    isProcessing: false,
}

export const getRentRequests = createAsyncThunk(
    'rentRequest/getRentRequests',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.rentRequestApis.list);
            thunkAPI.dispatch({ type: 'rentRequest/getOwnRentRequests', payload: { user: userId, rentRequests: response.data.rentRequests} });
            return response.data.rentRequests; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getRentRequestDetails = createAsyncThunk(
    'rentRequest/getRentRequestDetails',
    async (rentRequestId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.rentRequestApis.findById+rentRequestId);    
            return response.data.rentRequest; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const addRentRequest = createAsyncThunk(
    'rentRequest/addRentRequest',
    async (formData, thunkAPI) => {
        try {
            console.log(formData);
            thunkAPI.dispatch({ type: 'responseAndProgress/toggleProcessing'});
            
            const response = await axios.post(APIS.rentRequestApis.add, rentRequest);
            
            if (response.status === 201) {
                thunkAPI.dispatch({ type: 'responseAndProgress/toggleProcessing'});
                thunkAPI.dispatch({ 
                    type: 'responseAndProgress/setMessage', 
                    payload: { 
                        message: 'Rent request sent', 
                        severity: 'success' 
                    }
                });
            }
            
            thunkAPI.dispatch(getRentRequests(response.data.rentRequest._id));
            return response.data.rentRequest; 
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                thunkAPI.dispatch({ type: 'responseAndProgress/toggleProcessing'});
                thunkAPI.dispatch({ 
                    type: 'responseAndProgress/setMessage', 
                    payload: { 
                        message: error.response.data.msg, 
                        severity: 'error' 
                    }
                });
            }
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const updateRentRequest = createAsyncThunk(
    'rentRequest/updateRentRequest',
    async ( update, thunkAPI) => {
        try {
            const { id, rentRequest } = update;
            var response = await axios.put(APIS.rentRequestApis.update+id, rentRequest);
            thunkAPI.dispatch({ type: 'rentRequest/updateSelectedRentRequest', payload: response.data.rentRequest });
            thunkAPI.dispatch(getRentRequests());
            return response.data.rentRequest; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

const rentRequestSlice = createSlice({
    name: 'rentRequest',
    initialState,
    reducers: {
        updateSelectedRentRequest: (state, action) => {
            state.selectedRentRequest = action.payload.rentRequest;
        },
        getOwnRentRequests: (state, action) => {
            let requests = [];
            action.payload.rentRequests.forEach(element => {
                if (element.requestingUserId === action.payload.user) {
                    requests.push(element);
                }
            });
            state.myRentRequests = requests;
        }
    },
    extraReducers: {
        [getRentRequests.pending] : (state)=> {
            state.isLoading = true;
        },
        [getRentRequests.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.listOfRentRequests = action.payload;
            state.numberOfRentRequests = action.payload.length;
        },
        [getRentRequests.rejected] : (state) => {
            state.isLoading = false;
        },
        [getRentRequestDetails.pending] : (state)=> {
            state.isLoading = true;
        },
        [getRentRequestDetails.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.selectedRentRequest = action.payload;
        },
        [getRentRequestDetails.rejected] : (state) => {
            state.isLoading = false;
        },
        [addRentRequest.pending] : (state)=> {
            state.isProcessing = true;
        },
        [addRentRequest.fulfilled] : (state,action) => {
            state.isProcessing = false;
        },
        [addRentRequest.rejected] : (state) => {
            state.isProcessing = false;
        },
        [updateRentRequest.pending] : (state)=> {
            state.isProcessing = true;
        },
        [updateRentRequest.fulfilled] : (state,action) => {
            state.isProcessing = false;
        },
        [updateRentRequest.rejected] : (state) => {
            state.isProcessing = false;
        }
    }
});

export const { 
    updateSelectedRentRequest,
    getOwnRentRequests
} = rentRequestSlice.actions;
export default rentRequestSlice.reducer;