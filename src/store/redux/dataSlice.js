import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVideos, addVideo, updateVideo, deleteVideo } from '../../services/api'; // Import API kamu

// Thunk untuk fetch semua data
export const fetchVideos = createAsyncThunk('data/fetchVideos', async () => {
  const response = await getVideos();
  return response.data; // Sesuaikan kalau perlu response.data atau langsung response
});

// Thunk untuk tambah data
export const addNewVideo = createAsyncThunk('data/addNewVideo', async (newVideo) => {
  const response = await addVideo(newVideo);
  return response.data;
});

// Thunk untuk edit data
export const editVideo = createAsyncThunk('data/editVideo', async ({ id, updatedVideo }) => {
  const response = await updateVideo(id, updatedVideo);
  return response.data;
});

// Thunk untuk hapus data
export const removeVideo = createAsyncThunk('data/removeVideo', async (id) => {
  await deleteVideo(id);
  return id;
});

// Initial State
const initialState = {
  videos: [],
  status: 'idle',
  error: null,
};

// Slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {}, // kalau perlu reducer tambahan bisa diisi nanti
  extraReducers: (builder) => {
    builder
      // Fetch Videos
      .addCase(fetchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add Video
      .addCase(addNewVideo.fulfilled, (state, action) => {
        state.videos.push(action.payload);
      })
      // Edit Video
      .addCase(editVideo.fulfilled, (state, action) => {
        const index = state.videos.findIndex((video) => video.id === action.payload.id);
        if (index !== -1) {
          state.videos[index] = action.payload;
        }
      })
      // Delete Video
      .addCase(removeVideo.fulfilled, (state, action) => {
        state.videos = state.videos.filter((video) => video.id !== action.payload);
      });
  },
});

export default dataSlice.reducer;
