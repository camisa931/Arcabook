import React from 'react';

import descImg1 from '../../images/descriptionimg1.jpg'
import descImg2 from '../../images/descriptionimg2.jpg'
import descImg3 from '../../images/descriptionimg3.jpg'
import descImg4 from '../../images/descriptionimg4.jpg'

import Card from '../UI/Card';
import classes from './DescriptionPanel.module.css';

const DescriptionPanel = (props) => {
    return (
        <Card className={classes.panel}>
            <img src={descImg1} alt="descrp_img-1" />
            <img src={descImg2} alt="descrp_img-2" />
            <img src={descImg3} alt="descrp_img-3" />
            <img src={descImg4} alt="descrp_img-4" />
        </Card>
    );
};

export default DescriptionPanel;