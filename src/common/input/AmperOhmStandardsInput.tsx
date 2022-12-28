import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

export type AmprOhmStandardsInputType = {
    setDataForAmperOhm: (data: string) => void
}


export const AmprOhmStandardsInput = ({setDataForAmperOhm, ...props}: AmprOhmStandardsInputType) => {

    const [value, setValue] = useState('')

    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError(null)
    }

    const addDataHandler = () => {
        if (value.trim() !== '' ) {
            setDataForAmperOhm(value)
        } else {
            setError('Не верные данные')
        }
    }

    const onBlurHandler = () => {
        addDataHandler()
        setValue('')
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addDataHandler()
            setValue('')
        }
    }

    return (
        <>
        <input value={value} type="text" onChange={onChangeHandler} onBlur={onBlurHandler} onKeyDown={onKeyDownHandler}/>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </>
    )
}


