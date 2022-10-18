export type HeaderReducerType = {
    custumer: string
    
}

const initialStateHeader: HeaderReducerType = {
    custumer: ''
}

export const HeaderReducer = (state: HeaderReducerType = initialStateHeader, action: MainActionType): HeaderReducerType => {
    switch (action.type) {
        case 'HEADER/SET-CUSTUMER': {
            return {...state, custumer: action.title}
        }
        
        default:
            return state
    }
}

export type MainActionType = setCustumerACTupe

export type setCustumerACTupe = ReturnType<typeof setCustumerAC>


export const setCustumerAC = (title: string) => ({type: 'HEADER/SET-CUSTUMER', title} as const)