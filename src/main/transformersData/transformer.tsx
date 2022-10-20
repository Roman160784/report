import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { EditableSpan } from '../../common/input/editableSpan';
import { EditableSpanNumbers } from '../../common/input/editableSpanNumbers';
import { chengeClassTAC, chengeCoafficientAC, chengeLoadAC, chengeStigmalAC, chengeTypeAC, setNumberAC, transformerType, visualAC } from '../../redux/ReportReducer';
import { RootReducerType } from '../../redux/store';
import classes from './transformerData.module.css'

enum infelicity {
    oneM = -1.5,
    oneP = 1.5,
    oneMCorner = -90,
    onePCorner = 90,
    fiveM = -0.75,
    fiveP = 0.75,
    fiveMCorner = -45,
    fivePCorner = 45,
    otherM = -0.5,
    otherP = 0.5,
    otherMCorner = -30,
    otherPCorner = 30,
    visual = 'Соответствует',
    good = 'Годен',
    bad = 'Не годен'
}

export const Transformer = () => {

    const dispatch = useDispatch()

    const transformer = useSelector<RootReducerType, transformerType[]>(state => state.report)

    const typeHandler = (id: string, typeTr: string) => {
        dispatch(chengeTypeAC(id, typeTr))
    }

    const serialNumberHandler = (id: string, serialNumber: string) => {
        dispatch(setNumberAC(id, serialNumber));
    }

    const coefficientHandler = (id: string, coefficient: string) => {
        dispatch(chengeCoafficientAC(id, coefficient));
    }

    const clasTHandler = (id: string, clas: string) => {
        dispatch(chengeClassTAC(id, clas))
    }

    const loadHandler = (id: string, load: string) => {
        dispatch(chengeLoadAC(id, load))
    }

    const visualHandler = (id: string, visual: string) => {
        dispatch(visualAC(id, visual))
    }

    const stigmaHandler = (id: string, stigma: number) => {
        dispatch(chengeStigmalAC(id, stigma))
    }




    const infelicityOHandler = (infelicity: number) => {
        console.log(infelicity);
    }

    const infelicityFHandler = (infelicity: number) => {
        console.log(infelicity);
    }

    const infelicitySHandler = (infelicity: number) => {
        console.log(infelicity);
    }

    const infelicityTHandler = (infelicity: number) => {
        console.log(infelicity);
    }

    const infelicityFourHandler = (infelicity: number) => {
        console.log(infelicity);
    }

    const infelicityFiveHandler = (infelicity: number) => {
        console.log(infelicity);
    }

    const infelicitySixHandler = (infelicity: number) => {
        console.log(infelicity);
    }
    const infelicitySevenHandler = (infelicity: number) => {
        console.log(infelicity);
    }
    const infelicityEightHandler = (infelicity: number) => {
        console.log(infelicity);
    }
    const infelicityNineHandler = (infelicity: number) => {
        console.log(infelicity);
    }
    const infelicityTenHandler = (infelicity: number) => {
        console.log(infelicity);
    }
    const infelicityElevenHandler = (infelicity: number) => {
        console.log(infelicity);
    }



    return (
        <>
            {
                transformer.map(tr => {
                    return (
                        <tr className={classes.size}>
                            <td>{tr.count}</td>

                            <td><EditableSpan title={tr.type} changeTitle={(typeTr) => { typeHandler(tr.id, typeTr) }} /></td>
                            <td><EditableSpan title={tr.number} changeTitle={(serialNumber) => { serialNumberHandler(tr.id, serialNumber) }} /></td>
                            <td><EditableSpan title={tr.current} changeTitle={(coefficient) => { coefficientHandler(tr.id, coefficient) }} /></td>
                            <td><EditableSpan title={tr.class} changeTitle={(clas) => { clasTHandler(tr.id, clas) }} /></td>
                            <td><EditableSpan title={tr.load} changeTitle={(load) => { loadHandler(tr.id, load) }} /></td>
                            <td><EditableSpan title={tr.visual} changeTitle={(visual) => { visualHandler(tr.id, visual) }} /></td>

                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[0].toFixed(2)} changeTitle={infelicityOHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[1].toFixed(1)} changeTitle={infelicityFHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[2].toFixed(2)} changeTitle={infelicitySHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[3].toFixed(1)} changeTitle={infelicityTHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[4].toFixed(2)} changeTitle={infelicityFourHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[5].toFixed(1)} changeTitle={infelicityFiveHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[6].toFixed(2)} changeTitle={infelicitySixHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[7].toFixed(1)} changeTitle={infelicitySevenHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[8].toFixed(2)} changeTitle={infelicityEightHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[9].toFixed(1)} changeTitle={infelicityNineHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[10].toFixed(2)} changeTitle={infelicityTenHandler} /></td>
                                <td className={classes.sizeData}>
                                    <EditableSpanNumbers title={+tr.infelicity[11].toFixed(1)} changeTitle={infelicityElevenHandler} /></td>
                            <td>{(tr.visual === infelicity.visual)
                                && (tr.infelicity[0] >= infelicity.oneM && tr.infelicity[0] <= infelicity.oneP)
                                && (tr.infelicity[1] >= infelicity.oneMCorner && tr.infelicity[1] <= infelicity.onePCorner)
                                && (tr.infelicity[2] >= infelicity.fiveM && tr.infelicity[2] <= infelicity.fiveP)
                                && (tr.infelicity[3] >= infelicity.fiveMCorner && tr.infelicity[3] <= infelicity.fivePCorner)
                                && (tr.infelicity[4] >= infelicity.otherM && tr.infelicity[4] <= infelicity.otherP)
                                && (tr.infelicity[5] >= infelicity.otherMCorner && tr.infelicity[5] <= infelicity.otherPCorner)
                                && (tr.infelicity[6] >= infelicity.otherM && tr.infelicity[6] <= infelicity.otherP)
                                && (tr.infelicity[7] >= infelicity.otherMCorner && tr.infelicity[7] <= infelicity.otherPCorner)
                                && (tr.infelicity[8] >= infelicity.otherM && tr.infelicity[8] <= infelicity.otherP)
                                && (tr.infelicity[9] >= infelicity.otherMCorner && tr.infelicity[9] <= infelicity.otherPCorner)
                                && (tr.infelicity[10] >= infelicity.otherM && tr.infelicity[10] <= infelicity.otherP)
                                && (tr.infelicity[11] >= infelicity.otherMCorner && tr.infelicity[11] <= infelicity.otherPCorner)
                                ? infelicity.good : infelicity.bad}</td>

                            <td>15 00  {infelicity.good ? <EditableSpanNumbers title={tr.stigma} changeTitle={(stigma) => { stigmaHandler(tr.id, stigma) }} /> : 0}</td>
                        </tr>
                    )
                }


                )
            }

        </>
    )
}