import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
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
                    <th>Вторичная нагрузка</th>
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
                    <tr className={classes.size}>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td >
                            <td className={classes.sizeData}>0.34</td>
                            <td className={classes.sizeData}>75</td>
                            <td className={classes.sizeData}>0.34</td>
                            <td className={classes.sizeData}>11</td>
                            <td className={classes.sizeData}>0.34</td>
                            <td className={classes.sizeData}>11</td>
                            <td className={classes.sizeData}>0.34</td>
                            <td className={classes.sizeData}>75</td>
                            <td className={classes.sizeData}>0.34</td>
                            <td className={classes.sizeData}>75</td>
                            <td className={classes.sizeData}>0.34</td>
                            <td className={classes.sizeData}>75</td>
                          
                        </td>
                        <td>Годен</td>
                        <td>Годен</td>
                    </tr>
                </table>

            </div>

            <br />
           
        </div>
    )
}