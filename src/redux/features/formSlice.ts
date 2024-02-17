import { FormData } from "@/types/contactform-d";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { APIURL } from "../api";

interface FormState {
  formData: FormData;
  loading: boolean;
  user: string[];
  error: string;
  isSuccess: boolean;
}

const initialState: FormState = {
  formData: {
    name: "",
    email: "",
    message: "",
  },
  loading: false,
  user: [],
  error: "",
  isSuccess: false,
};

interface SubmitResponse {}
export const submitFormData = createAsyncThunk(
  "form/submitFormData",
  async (formData: FormData, thunkAPI) => {
    try {
      const response = await axios.post<SubmitResponse>(`${APIURL}/user/message`,
        formData
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitFormData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isSuccess = false;
    });
    builder.addCase(submitFormData.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;

      state.formData = initialState.formData;
    });
    builder.addCase(submitFormData.rejected, (state, action) => {
      state.loading = false;
      state.isSuccess = false;
      state.error = action.error.message ?? "An error occurred";
    });
  },
});

// export const {  } = formSlice.actions;
export default formSlice.reducer;
