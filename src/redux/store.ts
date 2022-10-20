import { combineReducers, createStore } from "redux";
import { HeaderReducer } from "./HeaderReducer";
import { RepotReducer } from "./ReportReducer";


const rootReducer = combineReducers({
    report: RepotReducer,
    header: HeaderReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store;