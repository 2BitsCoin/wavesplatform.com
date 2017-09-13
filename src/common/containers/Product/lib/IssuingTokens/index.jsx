import React from 'react';

import Typography from 'src/common/components/Typography';
import AvatarTitleText from 'src/common/components/AvatarTitleText';
import Margin from 'src/common/components/Margin';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';


import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';




const IssuingTokens = ({ classes }) => (
    <div>
        <Row>
            <Col xs={12}>
                <Typography type="display3" className={classes.title}>
                    <FormattedMessage
                        id="product.issuingTokens.title"
                        defaultMessage="Issuing Your Tokens and Token Sales"
                    />
                </Typography>
            </Col>
            <Col xs={12} sm={5} md={3}>
                <Typography type="body">
                    <FormattedMessage
                        id="product.issuingTokens.description.p1"
                        defaultMessage="Cryptographically secured blockchain tokens allow any business to issue its own internal digital currency on the blockchain to pay for goods and services within its project. The actual cost of tokens (Custom Application Tokens) is established using open market mechanisms."
                    />
                </Typography>
                <Margin bottom={4} />
            </Col>
            <Col xs={12} smOffset={1} sm={5} md={3} mdOffset={1}>
                <Typography type="body">
                    <FormattedMessage
                        id="product.issuingTokens.description.p2"
                        defaultMessage="The role of the token is determined by the nature of each individual project and can be integrated into it not only as an internal currency but also as a token for decentralised voting, as a rating system, or loyalty program."
                    />
                </Typography>
                <Margin bottom={4} />
            </Col>
            <Col md={4} mdOffset={1}>
                <div className={classes.imageWrapper}>
                    <div className={classes.image} />
                </div>
            </Col>
        </Row>


        <Margin bottom={2} />

        <Row>
            <Col xs={12} sm={5}>
                <AvatarTitleText
                    avatar={<IconProduct name="target" circle />}
                    title={
                        <FormattedMessage
                            id="product.issuingTokens.raiseFunds.title"
                            defaultMessage="Raise funds for the development of your project"
                        />
                    }
                    text={
                        <FormattedMessage
                            id="product.issuingTokens.raiseFunds.text"
                            defaultMessage="By releasing blockchain tokens, you provide valuable services to network users, such as the possibility of transferring value in the form of certain convenient units, therefore attracting funds for the development of your project."
                        />
                    }
                />
                <Margin bottom={4} />
            </Col>
            <Col xs={12} smOffset={1} sm={5}>
                <AvatarTitleText
                    avatar={<IconProduct name="message" circle />}
                    title={
                        <FormattedMessage
                            id="product.issuingTokens.loyalUsers.title"
                            defaultMessage="Get loyal users of your product"
                        />
                    }
                    text={
                        <FormattedMessage
                            id="product.issuingTokens.loyalUsers.text"
                            defaultMessage="By holding an ICO not only do you receive money for development, but you also gain loyal users for your product who believe in the project and are ready to become its first followers as well as give honest feedback."
                        />
                    }
                />
                <Margin bottom={4} />
            </Col>
        </Row>
    </div>
);


export default injectSheet(styles)(IssuingTokens);