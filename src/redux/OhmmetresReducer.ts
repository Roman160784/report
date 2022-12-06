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
    ohmmetr:  [{id: Date.now().toString(),
        count: 1,
        type: 'ЭС0202/2-г',
        number: '1111',
        class: '15',
        visual: 'Соответствует',
        test: 'Соответствует',
        infelicity: 'Основная погрешность не превышает допускаемое значение',
        result: 'Соответствует ОМТ',
        stigma: 15000}],

        standardsOhmmetres: [{
        id: Date.now().toString(),
        name: 'Магазин сопротивлений',
        type: 'МСР-63',
        number: '1111',
        class: '0,05',
        controlDate: '11.11.2022',
    },
    {
        id: Date.now().toString(),
        name: 'Магазин сопротивления',
        type: 'Р4830/2',
        number: '1111',
        class: '0,02',
        controlDate: '11.11.2022',
    },
    {
        id: Date.now().toString(),
        name: 'Магазин сопротивления',
        type: 'Р40116',
        number: '21',
        class: '0,01',
        controlDate: '11.11.2022',
    },
    {
        id: Date.now().toString(),
        name: 'Магазин сопротивления',
        type: 'Р4830/1',
        number: '21',
        class: '0,02',
        controlDate: '11.11.2022',
    },
],
}]

export const OhmmetresReducer = (state: ohmmetresReducerType[] = initialStateOhmmetres, action: MainActionType):ohmmetresReducerType[] => {
    switch (action){
        default:
            return state
    }
} 

export type MainActionType = ''