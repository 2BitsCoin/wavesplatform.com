import React from 'react';

import { Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import injectSheet from 'react-jss';

const styles = theme => ({
  numberWrapper: {
    marginBottom: theme.spacing.unit * 4,
  },
});

const ColNumber = injectSheet(styles)(({ classes, children }) => (
  <div className={classes.numberWrapper}>
    {children}
  </div>
));

const NumbersMain = ({ wavesBtcRate, dexVolume, dexWallets, dexAssets, ...rest }) =>
  wavesBtcRate && dexVolume && dexWallets && dexAssets ? (
    <Col xs={12} md={4} {...rest}>
      <ColNumber>
        <Typography type="numeral">
          ฿ <FormattedNumber value={wavesBtcRate} maximumFractionDigits={8} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.wavesPrice" defaultMessage="waves price" />
        </Typography>
      </ColNumber>
      <ColNumber>
        <Typography type="numeral">
          $ <FormattedNumber value={dexVolume} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.dexVolume" defaultMessage="24h DEX volume" />
        </Typography>
      </ColNumber>
      <ColNumber>
        <Typography type="numeral">
          <FormattedNumber value={dexWallets} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.wallets" defaultMessage="wallets created" />
        </Typography>
      </ColNumber>
      <ColNumber>
        <Typography type="numeral">
          <FormattedNumber value={dexAssets} />
        </Typography>
        <Typography type="body">
          <FormattedMessage id="home.numbers.tokens" defaultMessage="tokens issued" />
        </Typography>
      </ColNumber>
    </Col>
  ) : null;

export default NumbersMain;
