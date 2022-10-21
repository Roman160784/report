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
    custumer: 'Гомельский ЦСМС',
    reportNumber: '1111',
    receipt: '123',
    date: '11.11.2021',
    voltage: '228.0',
    hz: '50',
    temperature: '20.4',
    wet: '53.0',
    kPa: '100',
    standarts: 'Трансформатор тока СА535/2 №117 кл.т 0,02; компоратор СА507 №826,  ±0,005%; магазин нагрузок СА5018-5 № 257, ±4% ',
    user: 'Инженер I категории Р. С. Матвеенко',

}

export const HeaderReducer = (state: HeaderReducerType = initialStateHeader, action: MainActionType): HeaderReducerType => {
    switch (action.type) {
        case 'HEADER/SET-CUSTUMER': {
            return {...state, custumer: action.title}
        }
        case 'HEADER/SET-REPORT-NUMBER': {
            return {...state, reportNumber: action.title}
        }
        case 'HEADER/SET-RECEIPT': {
            return {...state, receipt: action.title}
        }
        case 'HEADER/SET-DATE': {
            return {...state, date: action.title}
        }
        case 'HEADER/SET-VOLTAGE': {
            return {...state, voltage: action.title}
        }
        case 'HEADER/SET-HZ': {
            return {...state, hz: action.title}
        }
        case 'HEADER/SET-TEMPERATURE': {
            return {...state, temperature: action.title}
        }
        case 'HEADER/SET-WET': {
            return {...state, wet: action.title}
        }
        case 'HEADER/SET-KPA': {
            return {...state, kPa: action.title}
        }
        case 'HEADER/SET-STANDARTS': {
            return {...state, standarts: action.title}
        }
        case 'HEADER/SET-USER': {
            return {...state, user: action.title}
        }
        
        default:
            return state
    }
}

export type MainActionType = setCustumerACTupe | setReportNumberACTupe | setReceiptACTupe | setDateACTupe | setVoltageACTupe 
| setHzACTupe | setTemperatureACTupe | setWetACTupe | setkPaACTupe | setStandartsACTupe | setUserACTupe

export type setCustumerACTupe = ReturnType<typeof setCustumerAC>
export type setReportNumberACTupe = ReturnType<typeof setReportNumberAC>
export type setReceiptACTupe = ReturnType<typeof setReceiptAC>
export type setDateACTupe = ReturnType<typeof setDateAC>
export type setVoltageACTupe = ReturnType<typeof setVoltageAC>
export type setHzACTupe = ReturnType<typeof setHzAC>
export type setTemperatureACTupe = ReturnType<typeof setTemperatureAC>
export type setWetACTupe = ReturnType<typeof setWetAC>
export type setkPaACTupe = ReturnType<typeof setkPaAC>
export type setStandartsACTupe = ReturnType<typeof setStandartsAC>
export type setUserACTupe = ReturnType<typeof setUserAC>


export const setCustumerAC = (title: string) => ({type: 'HEADER/SET-CUSTUMER', title} as const)
export const setReportNumberAC = (title: string) => ({type: 'HEADER/SET-REPORT-NUMBER', title} as const)
export const setReceiptAC = (title: string) => ({type: 'HEADER/SET-RECEIPT', title} as const)
export const setDateAC = (title: string) => ({type: 'HEADER/SET-DATE', title} as const)
export const setVoltageAC = (title: string) => ({type: 'HEADER/SET-VOLTAGE', title} as const)
export const setHzAC = (title: string) => ({type: 'HEADER/SET-HZ', title} as const)
export const setTemperatureAC = (title: string) => ({type: 'HEADER/SET-TEMPERATURE', title} as const)
export const setWetAC = (title: string) => ({type: 'HEADER/SET-WET', title} as const)
export const setkPaAC = (title: string) => ({type: 'HEADER/SET-KPA', title} as const)
export const setStandartsAC = (title: string) => ({type: 'HEADER/SET-STANDARTS', title} as const)
export const setUserAC = (title: string) => ({type: 'HEADER/SET-USER', title} as const)
