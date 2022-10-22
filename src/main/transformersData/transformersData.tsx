import React, { ChangeEvent, useState, KeyboardEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { transformerType } from '../../redux/ReportReducer';
import { RootReducerType } from '../../redux/store';
import { Transformer } from './transformer';
import { useDownloadExcel } from 'react-export-table-to-excel';



export const TransformersData = () => {
    const transformer = useSelector<RootReducerType, transformerType[]>(state => state.report)

    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

    return (
        <div>
            <div>
                <table border={1} ref={tableRef}>
                    <tr>
                        <th rowSpan={3}>№ п/п</th>
                        <th rowSpan={3}>Тип трансформатора тока</th>
                        <th rowSpan={3}>Заводской номер</th>
                        <th rowSpan={3}>Коэфициент трансф., A</th>
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
                <button style={{color: 'green'}} onClick={onDownload}> Export excel </button>
            </div>

            <br />

        </div>
    )
}
