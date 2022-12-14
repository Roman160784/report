import React from 'react';


type ButtonType = {
onClickCallBack: () => void
}

export const ButtonNavigation = ({onClickCallBack, ...props}: ButtonType) => {

    const onClickHandler = () => {
        onClickCallBack()
    }

    return (
        <>
        <button onClick={onClickHandler}>Основное меню</button>
        </>
    )
}