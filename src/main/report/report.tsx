
import React from 'react';
import { DataInput } from '../../common/input/dataInput';


export const Report = () => {
   
    const seveData = (data: number[]) => {
        console.log(data);
        
    }


    return (
        <div>
            <div>
            Заказчик
            
            </div>
            Тип
            Заводской номер
            Класс точности 
            Нагрузка V/A 
            Первичный/вторричный ток 
            <br />
           Данные <DataInput setData={ seveData}   /> 
            <br />
            
        </div>
    )
}


