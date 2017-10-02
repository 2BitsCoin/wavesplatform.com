import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import MainScreen from 'src/common/components/MainScreen';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';


<<<<<<< HEAD


// lib
// import Team from './lib/Team';
import FeedbackForm from './lib/FeedbackForm';
=======
// lib
import Vacancies from './lib/Vacancies';
>>>>>>> 6f0fc6f91f1c23a75cad5be521ff004b61040008
import Whitepaper from './lib/Whitepaper';
import Media from './lib/Media';
// import Careers from './lib/Careers';


// styles
import injectSheet from 'react-jss';
import styles from './styles';

import { FormattedMessage } from 'react-intl';

// import teamMembers from './team';



const PageLayout = ({ classes }) => (
    <Layout activeLink="company">

        <MainScreenBackground>
            <MainScreen
                title={
                    <FormattedMessage
                        id="company.title"
                        defaultMessage="We create the economics of free, perfect and instant"
                    />
                }
                text={
                    <FormattedMessage
                        id="company.text"
                        defaultMessage="The Waves Platform is a global public blockchain platform, founded in 2016. Waves Platform’s mission is to reinvent the DNA of entrepreneurship around the world by providing a shared infrastructure, offering easy-to-use, highly functional tools to make blockchain available to every person or organisation that can benefit from it."
                    />
                }
            />
        </MainScreenBackground>

        {/* <Section> 
            <Team members={teamMembers} />
        </Section> */}

        {/* <Background className={classes.bgWhitepaper} skewed={true}> */}
        <Section top={3} bottom={2}>
            <Whitepaper />
        </Section>
        {/* </Background> */}


        <div className={classes.sectionWide}>
            <Media />
        </div>



        <Background className={classes.bgLight} skewed={true}>
            <Section size={4}>
                <Vacancies />
            </Section>
        </Background>



        <Background className={classes.bgDark} skewed={true}>
            <Section size={4} className={classes.footerMarginCompensate}>
                <FeedbackForm onSubmit={val => console.log(val)} />
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