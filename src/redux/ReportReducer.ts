

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
        case 'REPORT/SET-NUMBER': {
            return { ...state }
        }
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

        default:
            return state
    }
}

export type MainActionType = setNumberACTupe | addTransformerACTupe

export type setNumberACTupe = ReturnType<typeof setNumberAC>
export type addTransformerACTupe = ReturnType<typeof addTransformerAC>


export const setNumberAC = (id: string, number: string) => ({ type: 'REPORT/SET-NUMBER', id, number } as const)
export const addTransformerAC = ( data: number[]) => ({ type: 'REPORT/SET-TRANSFORMER', data } as const)