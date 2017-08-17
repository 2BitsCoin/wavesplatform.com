import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import NumeralDemo from 'src/common/components/NumeralDemo';


import injectSheet from 'react-jss';


const styles = theme => ({
    numberWrapper: {
        marginBottom: theme.spacing.unit*4
    }
})


const ColNumber = injectSheet(styles)(({ classes, children }) => 
    <Col className={classes.numberWrapper} xs={6}>{ children }</Col>)



const NumbersMain = ({
    wavesBtcRate,
    dexVolume,
    dexWallets,
    dexAssets,
}) => wavesBtcRate && dexVolume && dexWallets && dexAssets ? (
    <Row>
        <ColNumber >
            <NumeralDemo
                number={wavesBtcRate}
                text="Waves token value"
            />
        </ColNumber>
        <ColNumber xs={12} md={6}>
            <NumeralDemo
                number={dexVolume}
                text="24h DEX volume"
            />
        </ColNumber>
        <ColNumber xs={12} md={6}>
            <NumeralDemo
                number={dexWallets}
                text="Wallets created"
            />
        </ColNumber>
        <ColNumber xs={12} md={6}>
            <NumeralDemo
                number={dexAssets}
                text="tokens issued"
            />
        </ColNumber>
    </Row>
) : null;


export default NumbersMain;