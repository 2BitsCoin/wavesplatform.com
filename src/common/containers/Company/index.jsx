import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';



// lib
import MainScreen from './lib/MainScreen';
import Team from './lib/Team';
import Whitepaper from './lib/Whitepaper';
import Media from './lib/Media';
import Careers from './lib/Careers';



// @todo remove
// --== MOCK ==--
import members from './__mocks/members';



// styles
import injectSheet from 'react-jss';
import styles from './styles';




const PageLayout = ({ classes }) => (
    <Layout activeLink="Company">


        <MainScreenBackground>
            <MainScreen />
        </MainScreenBackground>


        <div className={classes.sectionWide}>
            <Team members={members} />
        </div>


        <Background className={classes.bgWhitepaper} skewed={true}>
            <div className={classes.sectionWide}>
                <Whitepaper />
            </div>
        </Background>


        <div className={classes.sectionWide}>
            <Media members={members} />
        </div>



        <Background className={classes.bgCareers} skewed={true}>
            <Section size={4} className={classes.footerMarginCompensate}>
                <Careers />
            </Section>
        </Background>

    </Layout>
);


const Page = injectSheet(styles)(PageLayout);


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;