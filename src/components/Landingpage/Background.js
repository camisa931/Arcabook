import React, { useState } from 'react';
// import image1 from '../../images/bgimage1.jpg'
import image2 from '../../images/bgimage2.jpg'
import image3 from '../../images/bgimage3.jpg'
import image4 from '../../images/bgimage4.jpg'

import DescriptionPanel from './DescriptionPanel';
import ImageWButton from './ImageWButton';
import Modal from '../UI/Modal';

import classes from './Background.module.css';

const Background = (props) => {
    const [displayModal, setDisplayModal] = useState(false);

    const openModalToggleHandler = () => {
        console.log('!!!!');
        setDisplayModal(!displayModal);
    }

    return (
        <React.Fragment>
            {displayModal ?
                <Modal onCloseModal={openModalToggleHandler} />
                : ''
            }
            <div className={classes.background}>
                <div className={classes.bg_square}>
                    <ul>
                        <li>Arcabook</li>
                        <li>Arcabook</li>
                        <li>Arcabook</li>
                        <li>Arcabook</li>
                    </ul>
                </div>

                <ImageWButton onOpenModal={openModalToggleHandler} image={image2}>Register</ImageWButton>

                <DescriptionPanel />

                <img className={classes.bg_img} src={image3} alt="image3" />
                <div className={classes.bg_square}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem nulla nesciunt earum vitae adipisci id ipsum, quam et possimus fuga eaque illo molestiae assumenda quis repudiandae natus? Totam, architecto.</p>
                </div>

                <div className={classes.bg_square}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem nulla nesciunt earum vitae adipisci id ipsum, quam et possimus fuga eaque illo molestiae assumenda quis repudiandae natus? Totam, architecto.</p>
                </div>
                <img className={classes.bg_img} src={image4} alt="image4" />
            </div>
        </React.Fragment>
    );
};

export default Background;