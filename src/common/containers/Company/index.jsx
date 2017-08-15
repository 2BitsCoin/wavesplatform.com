import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Background from 'src/common/components/Background';
// import { Row, Col } from 'src/common/components/Grid';



// lib
import MainScreen from './lib/MainScreen';
import Team from './lib/Team';



// import FriendlyAPI from './lib/FriendlyAPI';
// import WavesNode from './lib/WavesNode';
// import DEX from './lib/DEX';
// import WavesNetwork from './lib/WavesNetwork';
// import Community from './lib/Community';



// @todo remove
// --== MOCK ==--
import members from './members';



// styles
import injectSheet from 'react-jss';
// import cn from 'classnames';


const styles = theme => ({
    section: {
        padding: theme.spacing.getSpacing(5, 0)
    },
    backgroundColor: {
        background: theme.palette.gray[50]
    },
    centered: {
        textAlign: 'center'
    },
})



const PageLayout = ({ classes }) => (
    <Layout>
        <div className={classes.section}>
            <MainScreen />
        </div>

        <Background className={classes.backgroundColor}>
            <div className={classes.section}>
                <Team members={members} />
            </div>
        </Background>


        {/* <div className={classes.section}>
            <WavesNode />
        </div>

        <div className={classes.section}>
            <DEX />
        </div>

        <div className={classes.section}>
            <WavesNetwork />
        </div>

        <div className={classes.section}>
            <Community />
        </div> */}

    </Layout>
);


const Page = injectSheet(styles)(PageLayout);


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;