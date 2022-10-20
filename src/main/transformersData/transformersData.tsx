import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { Transformer } from './transformer';
import classes from './transformerData.module.css'


export const TransformersData = () => {
    return (
        <div>
            <div>
                <table border={1}>


                    <th>№ п/п</th>
                    <th>Тип трансформатора тока</th>
                    <th>Заводской номер</th>
                    <th>Коэфициент трансф.</th>
                    <th>Класс точности</th>
                    <th>Вторичная нагрузка V/A</th>
                    <th>Внешний осмотр</th>
                    <th>Значение первичного тока, % от номинального значения
                        <th>1%
                            <th>f,%</th>
                            <th>δ,'</th>
                        </th>
                        <th>5%
                            <th>f,%</th>
                            <th>δ,'</th>
                        </th>
                        <th>20%
                            <th>f,%</th>
                            <th>δ,'</th>
                        </th>
                        <th>100%
                            <th>f,%</th>
                            <th>δ,'</th>
                        </th>
                        <th>120%
                            <th>f,%</th>
                            <th>δ,'</th>
                        </th>
                        <th>120% при 0,25 от ном.нагр
                            <th>f,%</th>
                            <th>δ,'</th>
                        </th>

                    </th>
                    <th>Заключение</th>
                    <th>№ кл.-наклейки</th>
                    <Transformer/>
                </table>

            </div>

            <br />

        </div>
    )
}
