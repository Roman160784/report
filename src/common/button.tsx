import React from 'react';


type ButtonType = {
onClickCallBack: () => void
}

export const Button = ({onClickCallBack, ...props}: ButtonType) => {

    const onClickHandler = () => {
        onClickCallBack()
    }

    return (
        <>
        <button onClick={onClickHandler}>x</button>
        </>
    )
}