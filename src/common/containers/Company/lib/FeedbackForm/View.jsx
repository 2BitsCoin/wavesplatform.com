import React from 'react';

import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';

import FeedbackForm from 'src/common/containers/FeedbackForm';


import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';



const FeedbackFormSection = () => (
    <Row centered>
        <Col xs={12} md={8}>
            <Row centered>
                <Col xs={12} md={10}>
                    <Typography type="display3" inverted align="center">
                        <FormattedMessage
                            id="company.feedback.title"
                            defaultMessage="Contact us"
                        />
                    </Typography>
                    <Typography type="body" inverted align="center">
                        <FormattedMessage
                            id="company.feedback.text"
                            defaultMessage="Use this form for any media, events or partnership inquiries. If you are experiencing problems with any of Waves' products, please contact {link}."
                            values={{
                                link: <Link><FormattedMessage id="company.feedback.supportLink" defaultMessage="support" /></Link>
                            }}
                        />
                    </Typography>
                </Col>
            </Row>

            <Margin bottom={3} />

            <FeedbackForm initialValues={{ reason: '', email: '', message: '' }} />
        </Col>
    </Row>
);


export default injectSheet(styles)(FeedbackFormSection);