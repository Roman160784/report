import { v1 } from 'uuid';
//types

export type ampermetrType = {
    id: string
    count: number
    type: string
    number: string
    class: string
    visual: string
    test: string
    infelicity: string
    result: string
    stigma: number
}

export type standardsAmpermetresType = {
    id: string
    name: string
    type: string
    number: string
    class: string
    controlDate: string
}

export type ampermetresReducerType = {
    ampermetr: ampermetrType[]
    standardsAmpermetres: standardsAmpermetresType[]
}

const initialStateAmpermetres: ampermetresReducerType[] = [{
    
    ampermetr:  [
        {id: v1(),
        count: 1,
        type: 'Э59',
        number: '1111',
        class: '1',
        visual: 'Соответствует',
        test: 'Соответствует',
        infelicity: 'Основная погрешность не превышает допускаемое значение',
        result: 'Соответствует ОМТ',
        stigma: 15000}],

    standardsAmpermetres: [
        {id: v1(),
        name: 'Ампервольтметр',
        type: 'Ц4311',
        number: '2058',
        class: '0,5 / 1',
        controlDate: '02.2022',
    },
    {
        id: v1(),
        name: 'Установка',
        type: 'У300',
        number: '1169',
        class: 'Согласно ТО',
        controlDate: '07.2022',
    },
    {
        id: v1(),
        name: 'Вольтметр',
        type: 'ЦВ8500/3',
        number: '037',
        class: '0,1',
        controlDate: '10.2022',
    },
    {
        id: v1(),
        name: 'Амперметр',
        type: 'ЦА8500/1',
        number: '043',
        class: '0,1',
        controlDate: '10.2022',
    },
    {
        id: v1(),
        name: 'Амперметр',
        type: 'ЦА8500/2',
        number: '047',
        class: '0,1',
        controlDate: '07.2022',
    },
],
}]

export const AmpermetresReducer = (state: ampermetresReducerType[] = initialStateAmpermetres, action: MainActionType):ampermetresReducerType[] => {
    switch (action.type){

        case 'AMPERMETR/CHENGE-STANDARD-PARAMETHR' : {
            return state.map(st => ({ ...st, 
               standardsAmpermetres: st.standardsAmpermetres.map(s => s.id === action.id ? {...s, [action.key] : action.title} : s)
            }) )
        }
        
        case 'AMPERMETR/REMOVE-STANDARD' : {
            return state.map(st => ({...st, standardsAmpermetres: st.standardsAmpermetres.filter(s => s.id !== action.id)}))
        }

        case 'AMPERMETR/ADD-STANDARD' : {
            const arrayStandards = state[0].standardsAmpermetres
            const lastObj = arrayStandards[arrayStandards.length - 1]
            const newObj = {...lastObj, id: v1(), number: action.title}
            const copyState = [...state]
            copyState[0].standardsAmpermetres.unshift(newObj)

            return copyState  
        }

        case 'AMPERMETR/CHENGE-AMPERMETRES-PARAMETHR' : {
            return state.map(st => ({...st, ampermetr: st.ampermetr.map(a => a.id === action.id ? {...a, [action.key] : action.title} : a)}))
        }

        case 'AMPERMETR/CHENGE-STIGMA-NUMBER' : {
            return state.map(st => ({...st, ampermetr: st.ampermetr.map(a => a.id === action.id ? {...a, stigma : action.num} : a)}))
        }

        case 'AMPERMETR/REMOVE-AMPERMETR' : {
            return state.map(st => ({...st, ampermetr: st.ampermetr.filter(a => a.id !== action.id)}))
        }

        case 'AMPERMETR/ADD-AMPERMETR' : {
            const arrayAmpermetres = state[0].ampermetr
            const lastAmpermetr = arrayAmpermetres[arrayAmpermetres.length -1]
            const newAmpermetr = {...lastAmpermetr, id: v1(), number: action.title, stigma: lastAmpermetr.stigma + 1}
            const copyState = [...state]
            copyState[0].ampermetr.push(newAmpermetr)

            return copyState
        }
        
        default:
            return state
    }
} 

export type MainActionType = chengeStandardTitleACType | removeStandardACType | addStandardACType 
| chengeAmpermetresTitleACType| chengeStigmaNumberACType | removeAmpermetrACType | addAmpermetrACType

export type chengeStandardTitleACType = ReturnType<typeof chengeStandardTitleAC>
export type removeStandardACType = ReturnType<typeof removeStandardAC>
export type addStandardACType = ReturnType<typeof addStandardAC>
export type chengeAmpermetresTitleACType = ReturnType<typeof chengeAmpermetresTitleAC>
export type chengeStigmaNumberACType = ReturnType<typeof chengeStigmaNumberAC>
export type removeAmpermetrACType = ReturnType<typeof removeAmpermetrAC>
export type addAmpermetrACType = ReturnType<typeof addAmpermetrAC>


export const chengeStandardTitleAC = (id: string, title: string, key: string) => (
    { type: 'AMPERMETR/CHENGE-STANDARD-PARAMETHR', id, title, key } as const)
export const removeStandardAC = (id: string,) => ({ type: 'AMPERMETR/REMOVE-STANDARD', id } as const)   
export const addStandardAC = (title: string) => ({type: 'AMPERMETR/ADD-STANDARD', title} as const)

export const chengeAmpermetresTitleAC = (id: string, title: string, key: string) => (
    { type: 'AMPERMETR/CHENGE-AMPERMETRES-PARAMETHR', id, title, key } as const)
export const chengeStigmaNumberAC = (id: string, num: number) => ({type: 'AMPERMETR/CHENGE-STIGMA-NUMBER', id, num} as const)
export const removeAmpermetrAC = (id: string,) => ({ type: 'AMPERMETR/REMOVE-AMPERMETR', id } as const)
export const addAmpermetrAC = (title: string) => ({type: 'AMPERMETR/ADD-AMPERMETR', title} as const) 