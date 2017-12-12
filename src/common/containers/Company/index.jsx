import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import MainScreen from 'src/common/components/MainScreen';
import Background from 'src/common/components/Background';
import MainScreenBackground from 'src/common/components/Background/MainScreen';
import Typography from 'src/common/components/Typography';

import AnchorScroll from 'src/public/components/AnchorScroll';
import ContentContainer from 'src/common/components/ContentContainer';

// lib
import Team from './lib/Team';
import FeedbackForm from './lib/FeedbackForm';
import Vacancies from './lib/Vacancies';
import Whitepaper from './lib/Whitepaper';
import AboutDescription from './lib/AboutDescription';
import Media from './lib/Media';
import Branding from './lib/Branding';
// import Careers from './lib/Careers';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

import { FormattedMessage } from 'react-intl';
import teamMembers from './team';

const PageLayout = ({ classes }) => (
    <Layout activeLink="company">

        <MainScreenBackground
            type="image"
            src={require('./img/Artboard.jpg')}
            srcSet={`${require('./img/Artboard.jpg')} 3x`}
        >
            <MainScreen
                title={
                    <Typography type={"display5"} className={classes.titleStyle} inverted>
                        <FormattedMessage
                            id="company.title"
                            defaultMessage="We create the economics of free, perfect and instant"
                        />
                    </Typography>
                }
                //titleType={"display5"}
                /*title={
                    {<FormattedMessage
                        id="company.title"
                        defaultMessage="We create the economics of free, perfect and instant"
                    />}
                }*/
                /*text={
                    <FormattedMessage
                        id="company.text"
                        defaultMessage="The Waves Platform is a global public blockchain platform, founded in 2016. Waves Platform’s mission is to reinvent the DNA of entrepreneurship around the world by providing a shared infrastructure, offering easy-to-use, highly functional tools to make blockchain available to every person or organisation that can benefit from it."
                    />
                }*/
            />
        </MainScreenBackground>

        {/* <Background className={classes.bgWhitepaper} skewed={true}> */}
        <Section top={2} bottom={2}>
            <ContentContainer>
                <AboutDescription />
            </ContentContainer>
        </Section>
        <Section top={1} bottom={2}>
            <ContentContainer>
                <Team members={teamMembers} />
            </ContentContainer>
        </Section>
        <Section top={1} bottom={2}>
            <ContentContainer>
                <Whitepaper />
            </ContentContainer>
        </Section>
        {/* </Background> */}

        <Section top={1} bottom={2}>
            <ContentContainer>
                <Media />
            </ContentContainer>
        </Section>

        <Section top={1} bottom={2}>
            <ContentContainer>
                <Branding />
            </ContentContainer>
        </Section>


        <Background className={classes.bgLight} skewed={true}>
            <Section size={4}>
                <AnchorScroll anchor="careers">
                    <Vacancies />
                </AnchorScroll>
            </Section>
        </Background>


        {/*<AnchorScroll anchor="contact">
            <Background className={classes.bgDark} skewed={true}>
                <Section size={4} className={classes.footerMarginCompensate}>
                    <FeedbackForm />
                </Section>
            </Background>
        </AnchorScroll>*/}

    </Layout>
);



const Page = injectSheet(styles)(PageLayout);



const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;