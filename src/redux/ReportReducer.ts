

//types

export type transformerType = {
    id: string
    count: number
    type: string
    number: string
    class: string
    load: string
    current: string
    visual: string
    infelicity: number[]
    result: string
    stigma: number
}

// export type RepotReducerType = {
//     transformer: transformerType
// }

//state
const initialStateRepot: transformerType[] = [
    {
        id: Date.now().toString(),
        count: 1,
        type: 'ТОП-0,66-1-5-У3',
        number: '1111',
        class: '0.5S',
        load: '10',
        visual: 'Соответствует',
        current: '300/5',
        infelicity: [0.75, 90, 0.35, 8, 0.11, 5, 0.08, 4, 0.05, 4, 0.33, 7],
        result: 'Годен',
        stigma: 7520
    }
]

//reducer

export const RepotReducer = (state: transformerType[] = initialStateRepot, action: MainActionType): transformerType[] => {
    switch (action.type) {
       
        case 'REPORT/SET-TRANSFORMER' : {

            const lastIndexItem = state.length - 1;
            
            const newTransformer:transformerType = {
                id: Date.now().toString(),
                count: state[lastIndexItem].count + 1,
                type: state[lastIndexItem].type,
                number: state[lastIndexItem].number,
                class: state[lastIndexItem].class,
                load: state[lastIndexItem].load,
                visual: state[lastIndexItem].visual,
                current: state[lastIndexItem].current,
                infelicity: [...action.data],
                result:state[lastIndexItem].result,
                stigma: state[lastIndexItem].stigma + 1
            }
            return  [ ...state, {...newTransformer}] 
        }
        case 'REPORT/SET-NUMBER': {
            return state.map(t => t.id === action.id ? {...t, number: action.number} : t) 
        }
        case 'REPORT/CHENGE-TYPE': {
            return state.map(t => t.id === action.id ? {...t, type: action.types} : t) 
        }
        case 'REPORT/CHENGE-COAFFICIENT' : {
            return state.map(t => t.id === action.id ? {...t, current: action.coaff} : t) 
        }
        case 'REPORT/CHENGE-CLASS-T' : {
            return state.map(t => t.id === action.id ? {...t, class: action.classT} : t)  
        }
        case 'REPORT/CHENGE-LOAD' : {
            return state.map(t => t.id === action.id ? {...t, load: action.load} : t)  
        }

        default:
            return state
    }
}

export type MainActionType = setNumberACType | addTransformerACType | chengeTypeACType | chengeCoafficientACType 
| chengeClassTACType | chengeLoadACACType

export type setNumberACType = ReturnType<typeof setNumberAC>
export type addTransformerACType = ReturnType<typeof addTransformerAC>
export type chengeTypeACType = ReturnType<typeof chengeTypeAC>
export type chengeCoafficientACType = ReturnType<typeof chengeCoafficientAC>
export type chengeClassTACType = ReturnType<typeof chengeClassTAC>
export type chengeLoadACACType = ReturnType<typeof chengeLoadAC>


export const setNumberAC = (id: string, number: string) => ({ type: 'REPORT/SET-NUMBER', id, number } as const)
export const addTransformerAC = ( data: number[]) => ({ type: 'REPORT/SET-TRANSFORMER', data } as const)
export const chengeTypeAC = (id: string, types: string) => ({ type: 'REPORT/CHENGE-TYPE', id, types } as const)
export const chengeCoafficientAC = (id: string, coaff: string) => ({ type: 'REPORT/CHENGE-COAFFICIENT', id, coaff } as const)
export const chengeClassTAC = (id: string, classT: string) => ({ type: 'REPORT/CHENGE-CLASS-T', id, classT } as const)
export const chengeLoadAC = (id: string, load: string) => ({ type: 'REPORT/CHENGE-LOAD', id, load } as const)