import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';




const Team = ({
    classes,
    onSubmitResumeClick
}) => (
        <Row>
            <Col xs={12} className={classes.centered}>
                <Typography type="display3" align="center" inverted dimmed>
                    <FormattedMessage
                        id="company.careers.title"
                        defaultMessage="Careers"
                    />
                </Typography>

                <Typography type="body2" align="center" inverted dimmed className={classes.narrow}>
                    <FormattedMessage
                        id="company.careers.text"
                        defaultMessage="We’d be happy to welcome you to our team. Come and change the world with us!"
                    />
                </Typography>

                <Margin bottom={3} />

                <Button
                    onClick={onSubmitResumeClick}
                    href="mailto:hr@wavesplatform.com"
                    secondary
                >
                    <FormattedMessage
                        id="cta.resume"
                        defaultMessage="Submit a resume"
                    />
                </Button>
            </Col>
        </Row>
    );


export default injectSheet(styles)(Team);