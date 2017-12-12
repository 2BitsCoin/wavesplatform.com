import React from 'react';

// components
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import Background from 'src/common/components/Background';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import ContentContainer from 'src/common/components/ContentContainer';
import HowToWallet from 'src/common/components/HowToWallet';

// lib
import MainScreen from './lib/MainScreen';
import Exchanges from './lib/Exchanges';
import WalletText from './lib/WalletText';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ classes }) => (
  <Layout>
    <BackgroundMainScreen
      type="image"
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
    >
      <ContentContainer>
        <MainScreen />
      </ContentContainer>
    </BackgroundMainScreen>

    <Section size={3}>
      <ContentContainer>
        <HowToWallet eventPage="get-waves" eventSource="buy_waves_in_client">
          <WalletText />
        </HowToWallet>
      </ContentContainer>
    </Section>

    <Background className={classes.bgExchanges} skewed={true}>
      <Section size={4}>
        <ContentContainer>
          <Exchanges />
        </ContentContainer>
      </Section>
    </Background>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);

export default App;
