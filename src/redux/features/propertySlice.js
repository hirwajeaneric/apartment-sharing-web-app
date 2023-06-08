import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { links } from '../../utils/APIS';

const initialState = {
    listOfImages: [],
    selectedImage: {},
    favoriteImages: [], 
    total: 0,
    isLoading: false,
    isProcessing: false
}

export const getImages = createAsyncThunk(
    'image/getImages',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(links.list);
            thunkAPI.dispatch({ type: 'image/generateTotal', payload: response.data.images.length });
            return response.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const getImageDetails = createAsyncThunk(
    'image/getImageDetails',
    async (imageId, thunkAPI) => {
        try {
            const response = await axios.get(links.findById+imageId);    
            return response.data.image; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const addImage = createAsyncThunk(
    'image/addImage',
    async ( image, thunkAPI) => {
        try {
            const config = { headers: { "Content-Type":"multipart/form-data" } }
            const response = await axios.post(links.add, image, config);
            thunkAPI.dispatch(getImages());
            thunkAPI.dispatch({ type: 'image/generateTotal', payload: response.data.images.length });
            console.log(response.data);
            return response.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

export const updateImage = createAsyncThunk(
    'image/updateImage',
    async ( update, thunkAPI) => {
        try {
            const { id, image } = update;
            const config = { headers: { "Content-Type":"multipart/form-data" } }
            var response = {};
            if (!image.name) {
                response = await axios.put(links.update+id, image);
            } else {
                response = await axios.put(links.update+id, image, config);
            }
            thunkAPI.dispatch({ type: 'image/updateSelectedImage', payload: response.data });
            thunkAPI.dispatch(getImages());
            return response.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        updateSelectedImage: (state, action) => {
            state.selectedImage = action.payload.image;
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
            state.total = action.payload;
        },
        generateTotalFavorites: {

        }
    },
    extraReducers: {
        [getImages.pending] : (state)=> {
            state.isLoading = true;
        },
        [getImages.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.listOfImages = action.payload;
        },
        [getImages.rejected] : (state) => {
            state.isLoading = false;
        },
        [getImageDetails.pending] : (state)=> {
            state.isLoading = true;
        },
        [getImageDetails.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.selectedImage = action.payload;
        },
        [getImageDetails.rejected] : (state) => {
            state.isLoading = false;
        },
        [addImage.pending] : (state)=> {
            state.isProcessing = true;
        },
        [addImage.fulfilled] : (state,action) => {
            state.isProcessing = false;
        },
        [addImage.rejected] : (state) => {
            state.isProcessing = false;
        },
        [updateImage.pending] : (state)=> {
            state.isProcessing = true;
        },
        [updateImage.fulfilled] : (state,action) => {
            state.isProcessing = false;
        },
        [updateImage.rejected] : (state) => {
            state.isProcessing = false;
        },
    }
});

export const { listAll, addNew, edit, trash, trashAll, generateTotal, generateTotalFavorites  } = imageSlice.actions;
export default imageSlice.reducer;