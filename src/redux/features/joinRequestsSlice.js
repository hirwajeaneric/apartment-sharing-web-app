import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { APIS } from '../../utils/APIS';

const initialState = {
    listOfJoinRequests: [],
    numberOfJoinRequests: 0,
    recentJoinRequests: [],
    selectedJoinRequest: {},
    myJoinRequests: [],
    isLoading: false,
    isProcessing: false,
}

export const getJoinRequests = createAsyncThunk(
    'joinRequest/getJoinRequests',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.joinRequestApis.list);
            thunkAPI.dispatch({ type: 'joinRequest/getOwnJoinRequests', payload: { user: userId, joinRequests: response.data.joinRequests} });
            return response.data.joinRequests; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getJoinRequestDetails = createAsyncThunk(
    'joinRequest/getJoinRequestDetails',
    async (joinRequestId, thunkAPI) => {
        try {
            const response = await axios.get(APIS.joinRequestApis.findById+joinRequestId);    
            return response.data.joinRequest; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const updateJoinRequest = createAsyncThunk(
    'joinRequest/updateJoinRequest',
    async ( update, thunkAPI) => {
        try {
            const { id, joinRequest } = update;
            var response = await axios.put(APIS.joinRequestApis.update+id, joinRequest);
            thunkAPI.dispatch({ type: 'joinRequest/updateSelectedJoinRequest', payload: response.data.joinRequest });
            thunkAPI.dispatch(getJoinRequests());
            return response.data.joinRequest; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

const joinRequestSlice = createSlice({
    name: 'joinRequest',
    initialState,
    reducers: {
        updateSelectedJoinRequest: (state, action) => {
            state.selectedJoinRequest = action.payload.joinRequest;
        },
        getOwnJoinRequests: (state, action) => {
            let requests = [];
            action.payload.joinRequests.forEach(element => {
                if (element.propertyOwnerId === action.payload.user) {
                    requests.push(element);
                }
            });
            state.myJoinRequests = requests;
        }
    },
    extraReducers: {
        [getJoinRequests.pending] : (state)=> {
            state.isLoading = true;
        },
        [getJoinRequests.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.listOfJoinRequests = action.payload;
            state.numberOfJoinRequests = action.payload.length;
        },
        [getJoinRequests.rejected] : (state) => {
            state.isLoading = false;
        },
        [getJoinRequestDetails.pending] : (state)=> {
            state.isLoading = true;
        },
        [getJoinRequestDetails.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.selectedJoinRequest = action.payload;
        },
        [getJoinRequestDetails.rejected] : (state) => {
            state.isLoading = false;
        },
        [updateJoinRequest.pending] : (state)=> {
            state.isProcessing = true;
        },
        [updateJoinRequest.fulfilled] : (state,action) => {
            state.isProcessing = false;
        },
        [updateJoinRequest.rejected] : (state) => {
            state.isProcessing = false;
        }
    }
});

export const { 
    updateSelectedJoinRequest,
    getOwnJoinRequests
} = joinRequestSlice.actions;
export default joinRequestSlice.reducer;