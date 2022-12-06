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
    ampermetr:  [{id: Date.now().toString(),
        count: 1,
        type: 'Э59',
        number: '1111',
        class: '1',
        visual: 'Соответствует',
        test: 'Соответствует',
        infelicity: 'Основная погрешность не превышает допускаемое значение',
        result: 'Соответствует ОМТ',
        stigma: 15000}],

    standardsAmpermetres: [{
        id: Date.now().toString(),
        name: 'Ампервольтметр',
        type: 'Ц4311',
        number: '1111',
        class: '0,5 / 1',
        controlDate: '11.11.2022',
    },
    {
        id: Date.now().toString(),
        name: 'Установка',
        type: 'У300',
        number: '21',
        class: 'Согласно ТО',
        controlDate: '11.11.2022',
    },
    {
        id: Date.now().toString(),
        name: 'Вольтметр',
        type: 'ЦВ8500/3',
        number: '21',
        class: '0,1',
        controlDate: '11.11.2022',
    },
    {
        id: Date.now().toString(),
        name: 'Амперметр',
        type: 'ЦА8500/1',
        number: '21',
        class: '0,1',
        controlDate: '11.11.2022',
    },
],
}]

export const AmpermetresReducer = (state: ampermetresReducerType[] = initialStateAmpermetres, action: MainActionType):ampermetresReducerType[] => {
    switch (action){
        default:
            return state
    }
} 

export type MainActionType = ''