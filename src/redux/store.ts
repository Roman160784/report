import { combineReducers, legacy_createStore as createStore } from "redux";
import { AmpermetresReducer } from "./AmpermetresReducer";
import { HeaderReducer } from "./HeaderReducer";
import { OhmmetresReducer } from "./OhmmetresReducer";
import { RepotReducer } from "./ReportReducer";


const rootReducer = combineReducers({
    report: RepotReducer,
    header: HeaderReducer,
    ampermetres: AmpermetresReducer,
    ohmetres: OhmmetresReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store;