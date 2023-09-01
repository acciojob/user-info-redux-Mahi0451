import { changeReducers } from "./reducer/changeReducers.js";
import { createStore } from "redux";



export let store= createStore(changeReducers)