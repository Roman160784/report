export type HeaderReducerType = {
    custumer: string
    reportNumber: string
    receipt: string
    date: string
    voltage: string
    hz: string
    temperature: string
    wet: string
    kPa: string
    standarts: string
    user: string
}

const initialStateHeader: HeaderReducerType = {
    custumer: '',
    reportNumber: '1111',
    receipt: '123',
    date: '11.11.2021',
    voltage: '228.0',
    hz: '50',
    temperature: '20.4',
    wet: '53.0',
    kPa: '100',
    standarts: 'Трансформатор тока СА535/2 №117 кл.т 0,02; компоратор СА507 №8',
    user: 'Инженер I категории Р. С. Матвеенко'

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