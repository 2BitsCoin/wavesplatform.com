import React from 'react';

import Typography from 'src/common/components/Typography';
import ButtonGetApp from 'src/common/components/ButtonGetApp';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const MainScreen = ({ classes, onAndroidClientClick, onIosClientClick }) => (
  <Row className={classes.root} alignItems="center">
    <Col xs={12} sm={8} md={6}>
      <Row>
        <Col xs={12} sm={10}>
          <Typography type="display3Inverted">
            <FormattedMessage id="product.mobileWallet.title" />
          </Typography>
        </Col>
        <Col xs={12} sm={8}>
          <Margin top={2} xsOnly />
          <Typography type="body">
            <FormattedMessage id="product.mobileWallet.text" />
          </Typography>
        </Col>
      </Row>

      <Margin bottom={5} />

      <Margin bottom={1} right={1} className={classes.buttonWrapper}>
        <ButtonGetApp onClick={onAndroidClientClick} type="google-play" />
      </Margin>
      <Margin bottom={1} right={1} className={classes.buttonWrapper}>
        <ButtonGetApp onClick={onIosClientClick} type="app-store" />
      </Margin>
    </Col>
    <Col xs={12} sm={4} md={6} className={classes.imageCol}>
      <div className={classes.imageWrapper}>
        <img
          src={require('./img/hand@1x.jpg')}
          srcSet={`${require('./img/hand@1x.jpg')} 1x, ${require('./img/hand@2x.jpg')} 2x`}
          alt=""
          className={classes.image}
        />
      </div>
    </Col>
  </Row>
);

export default injectSheet(styles)(MainScreen);
