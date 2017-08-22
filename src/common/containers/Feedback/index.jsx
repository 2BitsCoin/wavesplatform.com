import React from 'react';

import Feedback from 'src/common/components/Feedback';
import Margin from 'src/common/components/Margin';


import injectSheet from 'react-jss';
import styles from './styles';


import primalbasePhoto from './img/primalbase_photo.jpg';
import mobileGoPhoto from './img/mobile_go_photo.jpg';


const FeedbackContainer = ({
    classes,
    children,
}) => (
    <div>
        <Feedback
            image={<img className={classes.image} src={primalbasePhoto} alt="primalbase"/>}
            logo={<div className={classes.primalbaseLogo} />}
            avatar={<div className={classes.primalbaseAva} />}
            description="Worldwide coworking spaces for Tech Community"
            title="Primalbase crowdsale ends after one day and over 3 000 BTC raised"
            quote="We are very grateful to all who participated early and provided strong support to this project. If you were unable to secure your token in time, please stay subscribed to our mailing list to keep informed about project developments and expansions. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants"
            signature="Primalbase Team"
        />

        <Margin bottom={4} />
        
        { children }

        <Margin bottom={4} />

        <Feedback
            image={<img className={classes.image} src={mobileGoPhoto} alt="mobile_go"/>}
            logo={<div className={classes.mobileGoLogo} />}
            avatar={<div className={classes.mobileGoAva} />}
            description="The Crypto-Centric Mobile Gaming Platform and Store"
            website="mobilego.io"
            title="MobileGo becomes largest blockchain crowdsale in history!"
            quote="	There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution. Modern advances with the LCD computer monitors have changed"
            signature="MobileGo Team"
        />
    </div>
);


export default injectSheet(styles)(FeedbackContainer);