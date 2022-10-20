import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { useSelector } from 'react-redux';
import { EditableSpan } from '../../common/input/editableSpan';
import { EditableSpanNumbers } from '../../common/input/editableSpanNumbers';
import { transformerType } from '../../redux/ReportReducer';
import { RootReducerType } from '../../redux/store';
import { Transformer } from './transformer';
import classes from './transformerData.module.css'


export const TransformersData = () => {
    const transformer = useSelector<RootReducerType, transformerType[]>(state => state.report)
    return (
        <div>
            <div>
                <table border={1}>
                    <tr>
                        <th rowSpan={3}>№ п/п</th>
                        <th rowSpan={3}>Тип трансформатора тока</th>
                        <th rowSpan={3}>Заводской номер</th>
                        <th rowSpan={3}>Коэфициент трансф.</th>
                        <th rowSpan={3}>Класс точности</th>
                        <th rowSpan={3}>Вторичная нагрузка V/A</th>
                        <th rowSpan={3}>Внешний осмотр</th>
                        <th colSpan={12}>Значение первичного тока, % от номинального значения</th>
                        <th>Заключение</th>
                        <th>№ кл.-наклейки</th>
                    </tr>
                    <tr>
                        <th colSpan={2}>1%</th>
                        <th colSpan={2}>5%</th>
                        <th colSpan={2}>20%</th>
                        <th colSpan={2}>100%</th>
                        <th colSpan={2}>120%</th>
                        <th colSpan={2}>120% при 0,25 от ном.нагр</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>f,%</th>
                        <th>δ,'</th>

                        <th>f,%</th>
                        <th>δ,'</th>

                        <th>f,%</th>
                        <th>δ,'</th>

                        <th>f,%</th>
                        <th>δ,'</th>

                        <th>f,%</th>
                        <th>δ,'</th>

                        <th>f,%</th>
                        <th>δ,'</th>

                        <th></th>
                        <th></th>
                    </tr>
                    <Transformer />
                </table>

            </div>

            <br />

        </div>
    )
}
