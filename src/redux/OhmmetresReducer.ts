import { title } from 'process';
import { v1 } from 'uuid';
//types

export type ohmmetrType = {
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

export type standardsOhmmetresType = {
    id: string
    name: string
    type: string
    number: string
    class: string
    controlDate: string
}

export type ohmmetresReducerType = {
    ohmmetr: ohmmetrType[]
    standardsOhmmetres: standardsOhmmetresType[]
}

const initialStateOhmmetres: ohmmetresReducerType[] = [{
    ohmmetr:  [{id: v1(),
        count: 1,
        type: 'ЭС0202/2-Г',
        number: '1111',
        class: '15',
        visual: 'Соответствует',
        test: 'Соответствует',
        infelicity: 'Основная погрешность не превышает допускаемое значение',
        result: 'Соответствует ОМТ',
        stigma: 15000}],

        standardsOhmmetres: [{
        id: v1(),
        name: 'Магазин сопротивлений',
        type: 'МСР-63',
        number: '04782',
        class: '0,05',
        controlDate: '04.2022',
    },
    {
        id: v1(),
        name: 'Магазин сопротивления',
        type: 'Р4830/2',
        number: '0173',
        class: '0,05',
        controlDate: '10.2022',
    },
    {
        id: v1(),
        name: 'Мера имитатор',
        type: 'Р40116',
        number: '090',
        class: 'согласно ТО',
        controlDate: '11.2022',
    },
    {
        id: v1(),
        name: 'Магазин сопротивления',
        type: 'Р4830/1',
        number: '4404',
        class: '0,05',
        controlDate: '10.2022',
    },
    {
        id: v1(),
        name: 'Магазин сопротивления',
        type: 'Р4002',
        number: '3111',
        class: '0,05',
        controlDate: '12.2022',
    },
    {
        id: v1(),
        name: 'Магазин сопротивления',
        type: 'Р4007',
        number: '4142',
        class: '0,02',
        controlDate: '05.2022',
    },
    {
        id: v1(),
        name: 'Магазин сопротивления',
        type: 'Р40114',
        number: '1065',
        class: '0,05',
        controlDate: '05.2022',
    },
    {
        id: v1(),
        name: 'Магазин сопротивления',
        type: 'Р40115',
        number: '115',
        class: '0,02',
        controlDate: '12.2022',
    },
],
}]

export const OhmmetresReducer = (state: ohmmetresReducerType[] = initialStateOhmmetres, action: MainActionType):ohmmetresReducerType[] => {
    switch (action.type){
        case 'OHMETR/CHENGE-STANDARD-PARAMETHR' : {
            return state.map(st => 
                ({...st, standardsOhmmetres: st.standardsOhmmetres.map(s => s.id === action.id 
                    ? {...s, [action.key] : action.title} : s )}))
        }
        case 'OHMETR/REMOVE-STANDARD': {
            return state.map(st => ({...st, standardsOhmmetres: st.standardsOhmmetres.filter(s => s.id !== action.id)}))
        }
        case 'OHMETR/ADD-STANDARD' : {
            const arrayStandardsOhmetres = state[0].standardsOhmmetres
            const lastOhmetrStandard = arrayStandardsOhmetres[arrayStandardsOhmetres.length - 1]
            const newStandardOhmetr = {...lastOhmetrStandard, id: v1(), number: action.title}
            const copyState = [...state]
            copyState[0].standardsOhmmetres.unshift(newStandardOhmetr)
            return copyState
        }
        case 'OHMETR/CHENGE-OHMETR-PARAMETHR' : {
            return state.map(st => ({...st, ohmmetr: st.ohmmetr.map(o => o.id === action.id ? {...o, [action.key] : action.title} : o)}))
        }
        case 'OHMETR/CHENGE-STIGMA-NUMBER' : {
            return state.map(st => ({...st, ohmmetr: st.ohmmetr.map(o => o.id === action.id ? {...o, stigma : action.num} : o)}))
        }
        case 'OHMETR/REMOVE-OHMETR' : {
            return state.map(st => ({...st, ohmmetr: st.ohmmetr.filter(o => o.id !== action.id)}))
        }
        case 'OHMETR/ADD-OHMETR' : {
            const arrayOhmetres = state[0].ohmmetr
            const lastOhmetr = arrayOhmetres[arrayOhmetres.length - 1]
            const newOhmetr = {...lastOhmetr, id: v1(), number: action.title, stigma : lastOhmetr.stigma + 1}
            const copyState = [...state]
            copyState[0].ohmmetr.push(newOhmetr)
            return copyState
        }
        default:
            return state
    }
} 

export type MainActionType = chengeStandardOhmetrTitleACType | removeStandardOhmetresACType | chengeOhmetresTitleACType
| chengeStigmaNumberOhmetrACType | removeOhmetrACType | addStandardForOhmetrACType | addOhmetrACType


export type chengeStandardOhmetrTitleACType = ReturnType<typeof chengeStandardOhmetrTitleAC>
export type removeStandardOhmetresACType = ReturnType<typeof removeStandardOhmetresAC>
export type addStandardForOhmetrACType = ReturnType<typeof addStandardForOhmetrAC>
export type chengeOhmetresTitleACType = ReturnType<typeof chengeOhmetresTitleAC>
export type chengeStigmaNumberOhmetrACType = ReturnType<typeof chengeStigmaNumberOhmetrAC>
export type removeOhmetrACType = ReturnType<typeof removeOhmetrAC>
export type addOhmetrACType = ReturnType<typeof addOhmetrAC>

export const chengeStandardOhmetrTitleAC = (id: string, title: string, key: string) => (
    { type: 'OHMETR/CHENGE-STANDARD-PARAMETHR', id, title, key } as const)

export const removeStandardOhmetresAC = (id: string,) => ({ type: 'OHMETR/REMOVE-STANDARD', id } as const)
export const addStandardForOhmetrAC = (title: string) => ({ type: 'OHMETR/ADD-STANDARD', title } as const)

export const chengeOhmetresTitleAC = (id: string, title: string, key: string) => (
    { type: 'OHMETR/CHENGE-OHMETR-PARAMETHR', id, title, key } as const) 
    
export const chengeStigmaNumberOhmetrAC = (id: string, num: number) => ({type: 'OHMETR/CHENGE-STIGMA-NUMBER', id, num} as const)  
export const removeOhmetrAC = (id: string,) => ({ type: 'OHMETR/REMOVE-OHMETR', id } as const)  
export const addOhmetrAC = (title: string,) => ({ type: 'OHMETR/ADD-OHMETR', title } as const)  