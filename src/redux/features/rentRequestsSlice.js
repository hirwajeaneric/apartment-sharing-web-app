import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { APIS } from '../../utils/APIS';

const initialState = {
    listOfRentRequests: [],
    numberOfRentRequests: 0,
    recentRentRequests: [],
    selectedRentRequest: {},
    isLoading: false,
    isProcessing: false,
}

export const getRentRequests = createAsyncThunk(
    'rentRequest/getRentRequests',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.rentRequestApis.list);
            thunkAPI.dispatch({ type: 'rentRequest/getTotal', payload: response.data.rentRequests.length });
            thunkAPI.dispatch({ type: 'rentRequest/getRentedRentRequests', payload: { user: userId, rentRequests: response.data.rentRequests} });
            return response.data.rentRequests; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getOwnRentRequests = createAsyncThunk(
    'rentRequest/getOwnedRentRequests',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.rentRequestApis.findByOwnerId+userId);
            response.data.rentRequests.forEach(element => {
                element.id = element._id;
            });
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
    async ( rentRequest, thunkAPI) => {
        try {
            const response = await axios.post(APIS.rentRequestApis.add, rentRequest);
            thunkAPI.dispatch(getRentRequests());
            thunkAPI.dispatch({ type: 'rentRequest/generateTotal', payload: response.data.rentRequests.length });
            return response.data.rentRequest; 
        } catch (error) {
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
    },
    extraReducers: {
        [getRentRequests.pending] : (state)=> {
            state.isLoading = true;
        },
        [getRentRequests.fulfilled] : (state,action) => {
            const rentRequestsForJoin = [];
            const rentRequestsForRent = [];
            state.isLoading = false;
            state.listOfRentRequests = action.payload;
            state.numberOfRentRequests = action.payload.length;

            action.payload.forEach(rentRequest => {
                if (rentRequest.status === 'For Join') {
                    rentRequestsForJoin.push(rentRequest);
                } else if (rentRequest.status === 'For Rent') {
                    rentRequestsForRent.push(rentRequest);
                } 
            });

            state.rentRequestsForJoin = rentRequestsForJoin;
            state.numberOfRentRequestsForJoin = rentRequestsForJoin.length;
            state.rentRequestsForRent = rentRequestsForRent;
            state.numberOfRentRequestsForRent = rentRequestsForRent.length;
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
        },
        [getOwnRentRequests.pending] : (state)=> {
            state.isProcessing = true;
        },
        [getOwnRentRequests.fulfilled] : (state,action) => {
            state.isProcessing = false;
            state.ownedRentRequests = action.payload;
            state.numberOfOwnedRentRequests = action.payload.length;
        },
        [getOwnRentRequests.rejected] : (state) => {
            state.isProcessing = false;
        },
    }
});

export const { 
    updateSelectedRentRequest,
} = rentRequestSlice.actions;
export default rentRequestSlice.reducer;