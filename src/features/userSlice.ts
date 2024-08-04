import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserStatus } from "../enums/userStatus";

export type User = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};

type UserState = {
  users: User[];
  status: UserStatus.IDLE | UserStatus.LOADING | UserStatus.FAILED;
};

const initialState: UserState = {
  users: [],
  status: UserStatus.IDLE,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data as User[];
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = UserStatus.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = UserStatus.IDLE;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = UserStatus.FAILED;
      });
  },
});

export default userSlice.reducer;
