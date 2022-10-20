

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
        id: '1',
        count: 1,
        type: 'ТОП-0,66-1-5-У3',
        number: '1',
        class: '0.5S',
        load: '10',
        visual: 'Соответствует',
        current: '300/5',
        infelicity: [0.75, 10, 0.35, 8, 0.11, 5, 0.08, 4, 0.05, 4, 0.33, 7],
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

        default:
            return state
    }
}

export type MainActionType = setNumberACTupe

export type setNumberACTupe = ReturnType<typeof setNumberAC>


export const setNumberAC = (id: string, number: string) => ({ type: 'REPORT/SET-NUMBER', id, number } as const)