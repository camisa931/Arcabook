import React from 'react';

import classes from './ImageWButton.module.css';

import Button from '../UI/Button';

const ImageWButton = (props) => {
    return (
        <div className={classes.imagewbutton}>
            <img src={props.image} alt='image2' />
            <Button onClick={props.onOpenModal}>{props.children}</Button>
        </div>
    );
};

export default ImageWButton;