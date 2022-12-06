import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderReducerType, setCustumerAC, setDateAC, setHzAC, setkPaAC, setReceiptAC, setTemperatureAC, setVoltageAC, setWetAC } from '../redux/HeaderReducer';
import { RootReducerType } from '../redux/store';
import { EditableSpan } from './input/editableSpan';


export const DataHeader = () => {

    const headerData = useSelector<RootReducerType, HeaderReducerType>(state => state.header)

    const dispatch = useDispatch()

    const custumerHandler = (custumer: string) => {
        dispatch(setCustumerAC(custumer));
    }

    const receiptHandler = (receipt: string) => {
        dispatch(setReceiptAC(receipt));
    }

    const dateHandler = (date: string) => {
        dispatch(setDateAC(date));
    }

    const voltageHandler = (volt: string) => {
        dispatch(setVoltageAC(volt));
    }

    const hzHandler = (hz: string) => {
        dispatch(setHzAC(hz));
    }

    const temperatureHandler = (temperature: string) => {
        dispatch(setTemperatureAC(temperature));
    }

    const wetHandler = (wet: string) => {
        dispatch(setWetAC(wet));
    }

    const kPaHandler = (kPa: string) => {
        dispatch(setkPaAC(kPa));
    }

    return(
    <div>
        <div>
                Наименование организации заказчика: <EditableSpan title={headerData.custumer} changeTitle={custumerHandler} />
            </div>
            <div>
                номер квитанции-счёт: 2160-<EditableSpan title={headerData.receipt} changeTitle={receiptHandler} />
            </div>
            <div>
                Дата проведения поверки начало/окончание: <EditableSpan title={headerData.date} changeTitle={dateHandler} />
            </div>
            <div>
                Условия проведения поверки: напряжение питающей сети, В - <EditableSpan title={headerData.voltage} changeTitle={voltageHandler} />;
                частота питающей сети, ГЦ - <EditableSpan title={headerData.hz} changeTitle={hzHandler} />;
                <br />
                температура окружающей среды, С - <EditableSpan title={headerData.temperature} changeTitle={temperatureHandler} />;
                относительная влажность воздуха, % - <EditableSpan title={headerData.wet} changeTitle={wetHandler} />,
                атмосферное давление, кПа - <EditableSpan title={headerData.kPa} changeTitle={kPaHandler} />
            </div>
    </div>
    )
}