import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
// import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';
import Margin from 'src/common/components/Margin';



// lib
import MainScreen from './lib/MainScreen';
import Wallet from './lib/Wallet';
import Interest from './lib/Interest';
import MobileWallet from './lib/MobileWallet';
import OnlineWallet from './lib/OnlineWallet';
import HowToStart from './lib/HowToStart';

// DEX blocks
import DEX from './lib/DEX';
import DEXFeatures from './lib/DEXFeatures';
import DEXTopPairs from './lib/DEXTopPairs';


import Feedback from './lib/Feedback';
import Facts from './lib/Facts';
// import PlannedFeatures from './lib/PlannedFeatures';
// import JoinUs from './lib/JoinUs';
// import Subscribe from './lib/Subscribe';



// styles
import injectSheet from 'react-jss';
import cn from 'classnames';


const styles = theme => ({
    padded: {
        padding: theme.spacing.getSpacing(5, 0)
    },
    backgroundColor: {
        background: theme.palette.gray[50]
    },
    backgroundGradient: {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0) 25%, ${theme.palette.gray[50]})`
    },
    centered: {
        textAlign: 'center'
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0), ${theme.palette.gray[300]} 50%, rgba(255,255,255,0));`
    },
})


const PageLayout = ({ classes }) => (
    <Layout>
        <MainScreen />
        <Wallet />

        <Interest />

        <MobileWallet />
        <OnlineWallet />

        <Background className={cn(classes.backgroundGradient, classes.padded)}>
            <HowToStart />
        </Background>


        <Background className={cn(classes.backgroundColor, classes.padded)}>
            <DEX />

            <Margin bottom={4} />
            <div className={classes.divider} />
            <Margin bottom={3} />

            <Row>
                <Col xs={12} md={8}>
                    <DEXFeatures />
                </Col>
                <Col xs={12} md={4}>
                     <DEXTopPairs /> 
                </Col>
            </Row>

        </Background>

        <br />
        <br />
        <br />
        <br />

        <Background className={cn(classes.backgroundColor, classes.padded)}>
            <Feedback
                image={<div style={{ height: '100%', background: 'lightblue' }} />}
                logo={<div style={{ height: 20, width: 100, background: 'red' }} />}
                description="Worldwide coworking spaces for Tech Community"
                website="primalbase.com"
                title="Primalbase crowdsale ends after one day and over 3 000 BTC raised"
                quote="We are very grateful to all who participated early and provided strong support to this project. If you were unable to secure your token in time, please stay subscribed to our mailing list to keep informed about project developments and expansions. Although no further PBT sale will ever be carried out, related complementary projects will be launched to help increase the value of PBT for existing investors as well as provide upsides for any new participants"
                signature="Primalbase Team"
                avatar={<div style={{ height: 90, background: 'red' }} />}
            />
            <Facts />
            <Feedback
                image={<div style={{ height: '100%', background: 'lightgreen' }} />}
                logo={<div style={{ height: 20, width: 100, background: 'lightgreen' }} />}
                description="The Crypto-Centric Mobile Gaming Platform and Store"
                website="mobilego.io"
                title="MobileGo becomes largest blockchain crowdsale in history!"
                quote="	There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution. Modern advances with the LCD computer monitors have changed"
                signature="MobileGo Team"
                avatar={<div style={{ height: 90, background: 'green' }} />}
            />
        </Background>
    </Layout>
);


const Page = injectSheet(styles)(PageLayout);
// const Page = PageLayout;


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;