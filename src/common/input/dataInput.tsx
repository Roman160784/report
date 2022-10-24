import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

export type DataInputPropsType = {
    setData: (data: number[]) => void
}


export const DataInput = ({ setData, ...props }: DataInputPropsType) => {


    const [value, setValue] = useState('')

    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError(null)
    }

    const addDataHandler = () => {
        if (value.trim() !== '' && !(value.match(/[a-z]/) || value.match(/[A-Z]/) || value.match(/[А-Я]/) || value.match(/[а-я]/))) {
            setData(value.replaceAll("\t"," ").replaceAll(',', '.').split(' ').map(e => Number(e)))
        } else {
            setError('Не верные данные')
        }
    }

    const onBlurHandler = () => {
        addDataHandler()
        setValue('')
    }

    // pattern={"(-)?\d{1,}|(-)?\d{1,}(\.)\d{1,}|(-)?\d{1,}(\s)(-)?\d{1,}|(-)?\d{1,}(\s)(-)?\d{1,}(\s)(-)?\d{1,}"}

    return (
        <>
            <input value={value} type="text" onChange={onChangeHandler} onBlur={onBlurHandler} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </>
    )

}