import { combineReducers, createStore } from "redux";
import { HeaderReducer } from "./HeaderReducer";
import { RepotReducer } from "./ReportReducer";


const rootReducer = combineReducers({
    report: RepotReducer,
    header: HeaderReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)