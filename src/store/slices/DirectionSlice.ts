import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../api/Api';
import { DirectionType } from '../../types/index.dto';
import { LoadingStatus } from '../../types/types';
import { SliceDataType } from '../types';

export const getDirections = createAsyncThunk(
  'direction/getDirections',
  async () => {
    const response = await Api.direction.getAll();
    return response;
  }
);

export const getDirection = createAsyncThunk(
  'direction/getDirection',
  async (id: string) => {
    const responce = await Api.direction.get(id);
    return responce;
  }
);

interface StateType {
  directions: SliceDataType<DirectionType[]>;
  detailDirection: SliceDataType<DirectionType | null>;
}
const initialState: StateType = {
  directions: {
    loading: LoadingStatus.idle,
    result: [],
    error: null,
  },
  detailDirection: {
    loading: LoadingStatus.idle,
    result: null,
    error: null,
  },
};

const DirectionSlice = createSlice({
  name: 'direction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDirections.pending, (state) => {
      state.directions.loading = LoadingStatus.pending;
    });
    builder.addCase(getDirections.fulfilled, (state, action) => {
      state.directions.loading = LoadingStatus.succeeded;
      state.directions.result = action.payload;
    });
    builder.addCase(getDirections.rejected, (state, action) => {
      state.directions.loading = LoadingStatus.failed;
      state.directions.error = action.error;
    });
    builder.addCase(getDirection.pending, (state) => {
      state.detailDirection.loading = LoadingStatus.pending;
    });
    builder.addCase(getDirection.fulfilled, (state, action) => {
      state.detailDirection.loading = LoadingStatus.succeeded;
      state.detailDirection.result = action.payload;
    });
    builder.addCase(getDirection.rejected, (state, action) => {
      state.detailDirection.loading = LoadingStatus.failed;
      state.detailDirection.error = action.error;
    });
  },
});

export const root = DirectionSlice.actions;

export default DirectionSlice.reducer;
