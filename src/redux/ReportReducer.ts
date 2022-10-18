//types

export type transformerType = {
    id: string
    count: number
    type: string
    number: string
    class: string
    load: string
    current: string
    data: number[]
}

export type RepotReducerType = {
    transformer: transformerType[]
}

//state
const initialStateRepot: RepotReducerType = {
    transformer: []
    // id: '1',
    // count: 1,
    // type: 'ТОП-0,66-1-5-У3',
    // number: '1',
    // class: '0.5S',
    // load: '10',
    // current: '300/5',
    // data: [0.75, 10, 0.35, 8, 0.11, 5, 0.08, 4, 0.05, 4, 0.33, 7]
}

//reducer

export const RepotReducer = (state: RepotReducerType = initialStateRepot, action: MainActionType): RepotReducerType => {
    switch (action.type) {
        case 'REPORT/SET-NUMBER': {
            return {...state,[action.id] : state.transformer.map(tr => tr.id === action.id ? {...tr, number: action.number} : tr)}
        }
        
        default:
            return state
    }
}

export type MainActionType = setNumberACTupe

export type setNumberACTupe = ReturnType<typeof setNumberAC>


export const setNumberAC = (id: string, number: string) => ({type: 'REPORT/SET-NUMBER', id, number} as const)