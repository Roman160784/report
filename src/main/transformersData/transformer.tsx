import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button } from '../../common/button';
import { EditableSpan } from '../../common/input/editableSpan';
import { EditableSpanForTransformersNumber } from '../../common/input/editableSpanForTransformerNumber';
import { EditableSpanNumbers } from '../../common/input/editableSpanNumbers';
import { chengeClassTAC, chengeCoafficientAC, chengeInfelicityAC, chengeLoadAC, chengeStigmalAC, chengeTypeAC, remuveTransformerAC, setNumberAC, transformerType, visualAC } from '../../redux/ReportReducer';
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

    const remuveTransformerHandler = (id: string) => {
        dispatch(remuveTransformerAC(id))
    }


    const infelicityOHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));
    }

    const infelicityFHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }

    const infelicitySHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }

    const infelicityTHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));
    }

    const infelicityFourHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));
    }

    const infelicityFiveHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }

    const infelicitySixHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }
    const infelicitySevenHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }
    const infelicityEightHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }
    const infelicityNineHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }
    const infelicityTenHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }
    const infelicityElevenHandler = (id: string, i: number, num: number) => {
        dispatch(chengeInfelicityAC(id, i, num));;
    }



    return (
        <>
            {
                transformer.map((tr, i) => {
                    return (
                        <tr key={tr.id} className={classes.size}>
                            <td>{i+1}</td>

                            <td><EditableSpan title={tr.type} changeTitle={(typeTr) => { typeHandler(tr.id, typeTr) }} /></td>
                            <td><EditableSpanForTransformersNumber title={tr.number} changeTitle={(serialNumber) => { serialNumberHandler(tr.id, serialNumber) }} /></td>
                            <td><EditableSpan title={tr.current} changeTitle={(coefficient) => { coefficientHandler(tr.id, coefficient) }} /></td>
                            <td><EditableSpan title={tr.class} changeTitle={(clas) => { clasTHandler(tr.id, clas) }} /></td>
                            <td><EditableSpan title={tr.load} changeTitle={(load) => { loadHandler(tr.id, load) }} /></td>
                            <td><EditableSpan title={tr.visual} changeTitle={(visual) => { visualHandler(tr.id, visual) }} /></td>

                            <td className={+tr.infelicity[0] > infelicity.oneP
                                || +tr.infelicity[0] < infelicity.oneM ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[0]}
                                    changeNumber={(num) => { infelicityOHandler(tr.id, 0, num) }} /></td>

                            <td className={+tr.infelicity[1] < infelicity.oneMCorner
                                || +tr.infelicity[1] > infelicity.onePCorner ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[1]}
                                    changeNumber={(num) => { infelicityFHandler(tr.id, 1, num) }} /></td>

                            <td className={+tr.infelicity[2] < infelicity.fiveM
                                || +tr.infelicity[2]> infelicity.fiveP ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[2]}
                                    changeNumber={(num) => { infelicitySHandler(tr.id, 2, num) }} /></td>

                            <td className={+tr.infelicity[3] < infelicity.fiveMCorner
                                || +tr.infelicity[3] > infelicity.fivePCorner ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[3]}
                                    changeNumber={(num) => { infelicityTHandler(tr.id, 3, num) }} /></td>

                            <td className={+tr.infelicity[4] < infelicity.otherM
                                || +tr.infelicity[4] > infelicity.otherP ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[4]}
                                    changeNumber={(num) => { infelicityFourHandler(tr.id, 4, num) }} /></td>

                            <td className={+tr.infelicity[5] < infelicity.otherMCorner
                                || +tr.infelicity[5] > infelicity.otherPCorner ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[5]}
                                    changeNumber={(num) => { infelicityFiveHandler(tr.id, 5, num) }} /></td>

                            <td className={+tr.infelicity[6] < infelicity.otherM
                                || +tr.infelicity[6] > infelicity.otherP ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[6]}
                                    changeNumber={(num) => { infelicitySixHandler(tr.id, 6, num) }} /></td>

                            <td className={+tr.infelicity[7] < infelicity.otherMCorner
                                || +tr.infelicity[7] > infelicity.otherPCorner ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[7]}
                                    changeNumber={(num) => { infelicitySevenHandler(tr.id, 7, num) }} /></td>

                            <td className={+tr.infelicity[8] < infelicity.otherM
                                || +tr.infelicity[8] > infelicity.otherP ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[8]}
                                    changeNumber={(num) => { infelicityEightHandler(tr.id, 8, num) }} /></td>

                            <td className={+tr.infelicity[9] < infelicity.otherMCorner
                                || +tr.infelicity[9] > infelicity.otherPCorner ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[9]}
                                    changeNumber={(num) => { infelicityNineHandler(tr.id, 9, num) }} /></td>

                            <td className={+tr.infelicity[10] < infelicity.otherM
                                || +tr.infelicity[10] > infelicity.otherP ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[10]}
                                    changeNumber={(num) => { infelicityTenHandler(tr.id, 10, num) }} /></td>

                            <td className={+tr.infelicity[11] < infelicity.otherMCorner
                                || +tr.infelicity[11] > infelicity.otherPCorner ? classes.colorData : ''}>
                                <EditableSpanNumbers title={+tr.infelicity[11]}
                                    changeNumber={(num) => { infelicityElevenHandler(tr.id, 11, num) }} /></td>

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

                            <td>  {infelicity.good ? <EditableSpanNumbers title={tr.stigma} changeNumber={(stigma) => { stigmaHandler(tr.id, stigma) }} /> : 0}</td>
                            <Button onClickCallBack={()=> {remuveTransformerHandler(tr.id)}}/>
                        </tr>
                    )
                }


                )
            }

        </>
    )
}