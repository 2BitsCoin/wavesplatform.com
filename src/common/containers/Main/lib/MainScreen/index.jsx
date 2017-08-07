import React from 'react';

import Typography from 'src/common/components/Typography';
import TitleTextCTA from 'src/common/components/TitleTextCTA';

import { Row, Col } from 'src/common/components/Grid';

import Button from 'src/common/components/Button';

import NumbersMain from 'src/common/containers/NumbersMain';



import injectSheet from 'react-jss';
import styles from './styles';




const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} md={6}>

            <div className={classes.titleTextCtaWrapper}>
                <TitleTextCTA
                    title="Decentralized blockchain platform"
                    text="Waves gives all the necessary infrastructure for the production, storage, management, sale and analysis of your digital assets"
                    buttons={[
                        <Button key="main_cta_button">Get Client</Button>,
                        <Button key="secondary_cta_button" color="gray-50">Get Waves</Button>
                    ]}
                />
            </div>

            <NumbersMain />
        </Col>
        <Col xs={12} md={6}>
            <Row>
                <Col xs={12} className={classes.swappedToBottom}>
                    <div className={classes.deloitte}>
                        <div className={classes.deloitteLogo} />
                        <Typography type="quote" color="gray-300">
                            <div>In cooperation with our strategic partner Deloitte, we are changing the future of blockchain and creating the new economy</div>
                        </Typography>
                    </div>

                </Col>
                <Col xs={12} className={classes.swappedToTop + ' ' + classes.imageWrapper}>
                    <div className={classes.image} />
                </Col>
            </Row>
        </Col>
    </Row>
);


export default injectSheet(styles)(MainScreen);