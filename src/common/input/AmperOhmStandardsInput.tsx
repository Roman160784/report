import React, { ChangeEvent, useState } from 'react';

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

    return (
        <>
        <input value={value} type="text" onChange={onChangeHandler} onBlur={onBlurHandler} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </>
    )
}


