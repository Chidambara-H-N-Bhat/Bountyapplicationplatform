import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    steps : {
        brief : {completed : false, data : {}},
        backer : {completed : false, data : {}},
        rewards : {completed : false, data : {}},
    },

    CurrentStep : "brief",
    
};

const stepsSlice = createSlice({
    name: "steps",
    initialState,
    reducers : {
        completeStep :(state, action)=>{
            state.steps[action.payload].completed = true;

        },

        setCurrentStep :(state, action)=>{
            state.CurrentStep = action.payload;

        },

        saveStepData:(state, action)=>{
            const { step, data } = action.payload;
            state.steps[step].data = data;

        },
    },
});

export const  { completeStep, setCurrentStep, saveStepData } = stepsSlice.actions;
export const store = configureStore({ 
    reducer: {
         steps: stepsSlice.reducer,
         },
     });