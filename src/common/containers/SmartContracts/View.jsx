import React from 'react';
import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import { Col, Row } from 'src/common/components/Grid';
import MainScreen from './lib/MainScreen';
import Typography from 'src/common/components/Typography';
import SCFeatures from './lib/Features';

import { FormattedMessage } from 'react-intl';
// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ onDownloadClient, onOnlineClientClick, classes }) => (
  <Layout inverted hideCredentials activeLink="dex">
    <BackgroundMainScreen
      type="image"
      src={require('./img/bg.jpg')}
      srcSet={`${require('./img/bg.jpg')} 1x, ${require('./img/bg@2x.jpg')} 2x`}
    >
      <ContentContainer>
        <MainScreen
          onDownloadChange={onDownloadClient}
          onOnlineClientClick={onOnlineClientClick}
        />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={4} bottom={4}>
        <ContentContainer>
          <Row>
            <Col xs={12} md={6}>
              <Typography inverted>
                <FormattedMessage id="smartContracts.block1.text1" />
              </Typography>
            </Col>
            <Col xs={12} md={6}>
              <Typography inverted>
                <FormattedMessage id="smartContracts.block1.text2" />
              </Typography>
            </Col>
          </Row>
        </ContentContainer>
      </Section>
      <Section className={classes.bgBlack} top={4}>
        <ContentContainer>
          <SCFeatures />
        </ContentContainer>
      </Section>
    </Wrapper>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = props => (
  <ThemeProvider>
    <Page {...props} />
  </ThemeProvider>
);

export default App;
