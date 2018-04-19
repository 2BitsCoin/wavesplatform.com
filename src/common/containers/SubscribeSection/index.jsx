import React from 'react';

import Typography from 'src/common/components/Typography';

import SubscriptionForm from 'src/common/containers/SubscriptionForm';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';

const Subscribe = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.textCentered}>
      <Typography type="body2" inverted align="center">
        <FormattedMessage id="home.subscribe.title" />
      </Typography>
      <Typography type="body" inverted align="center">
        <FormattedMessage id="home.subscribe.text" />
      </Typography>
    </div>

    <div className={classes.formWrapper}>
      <SubscriptionForm />
    </div>
  </div>
);

export default injectSheet(styles)(Subscribe);
