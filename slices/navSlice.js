import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    SET_ORIGIN: (state, action) => {
      state.origin = action.payload;
    },
    SET_DESTINATION: (state, action) => {
      state.destination = action.payload;
    },
    SET_TRAVEL_TIME_INFORMATION: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { SET_ORIGIN, SET_DESTINATION, SET_TRAVEL_TIME_INFORMATION } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
