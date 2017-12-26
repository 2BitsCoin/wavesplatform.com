import React from 'react';

import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Typography from 'src/common/components/Typography';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';
import ContentContainer from 'src/common/components/ContentContainer';

import Image1 from '!svg-react-loader!./img/start_leasing_download_client.svg';
import Image2 from '!svg-react-loader!./img/start.svg';
import Image3 from '!svg-react-loader!./img/start_leasing_choose_node.svg';
import Image4 from '!svg-react-loader!./img/start_leasing_done_leasing.svg';

import { FormattedMessage } from 'react-intl';

import url from 'src/common/utils/url';

import injectSheet from 'react-jss';
import styles from './styles';

const StartLeasing = ({ classes }) => (
    <div>
        <Row>
            <ContentContainer>
                <div className={classes.flexer}>

                        <Col xs={12} sm={6} lg={6} className={[classes.col, classes.colMargin]}>
                            <Typography className={classes.title}>
                                <FormattedMessage
                                    id="leasing.startLeasing.title"
                                    defaultMessage="Start leasing your funds"
                                />
                            </Typography>
                            <Typography className={classes.text}>
                                <FormattedMessage
                                    id="leasing.startLeasing.text"
                                    defaultMessage="You can lease any sum from 0.002 WAVES. Your funds remain in your wallet and you can cancel the lease and regain access to the WAVES at any time, with just two clicks. You can also set up your own node and start {miningLink} yourself if you have at least 10,000 WAVES."
                                    values={{
                                        miningLink: (
                                            <Link href={url('mining')}>
                                                <FormattedMessage
                                                    id="leasing.startLeasing.miningLink"
                                                    defaultMessage="mining"
                                                />
                                            </Link>
                                        ),
                                    }}
                                />
                            </Typography>
                            <Margin bottom={5} />
                            <Button
                                secondary
                                target="_blank"
                                href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
                            >
                                <FormattedMessage
                                    id="cta.getClient"
                                    defaultMessage="Get Client"
                                />
                            </Button>
                        </Col>

                        <Col xs={12} sm={6} lg={6} className={classes.col}>
                            <div className={classes.flexCol}>
                                <div className={classes.flexRow}>
                                    <div className={classes.imageWrapper}>
                                        <Image1 />
                                        {/*<div className={classes.arrow} />
                                         <div className={classes.arrowMobile} />*/}
                                    </div>
                                    <Typography
                                        tagName="div"
                                        align="center"
                                        className={classes.message}
                                    >
                                        <FormattedMessage
                                            id="leasing.startLeasing.p1.title"
                                            defaultMessage="1. Download Waves Client"
                                        />
                                    </Typography>
                                </div>
                                <div className={classes.arrowDiv}>
                                    <div className={classes.arrow} />
                                    <div className={classes.arrowMobile} />
                                </div>
                            </div>
                            <Margin bottom={5} />
                            <div className={classes.flexCol}>
                                <div className={classes.flexRow}>
                                    <div className={classes.imageWrapper}>
                                        <Image2 />
                                        {/*<div className={classes.arrow} />
                                        <div className={classes.arrowMobile} />*/}
                                    </div>
                                    <Typography
                                        tagName="div"
                                        align="center"
                                        className={classes.message}
                                    >
                                        <FormattedMessage
                                            id="leasing.startLeasing.p2.title"
                                            defaultMessage="2. Deposit WAVES to your account"
                                        />
                                    </Typography>
                                </div>
                                <div className={classes.arrowDiv}>
                                    <div className={classes.arrow} />
                                    <div className={classes.arrowMobile} />
                                </div>
                            </div>
                            {/*<Margin bottom={2} />
                            <Button
                                href={url('get-waves')}
                                withLoader
                                secondary
                            >
                                <FormattedMessage
                                    id="cta.getWaves"
                                    defaultMessage="Get Waves"
                                />
                            </Button>*/}
                            <Margin bottom={5} />
                            <div className={classes.flexCol}>
                                <div className={classes.flexRow}>
                                    <div className={classes.imageWrapper}>
                                        <Image3 />
                                      {/*  <div className={classes.arrow} />
                                        <div className={classes.arrowMobile} />*/}
                                    </div>
                                    <Typography
                                        tagName="div"
                                        align="center"
                                        className={classes.message}
                                    >
                                        <FormattedMessage
                                            id="leasing.startLeasing.p3.title"
                                            defaultMessage="3. Decide {nodesLink} to support with your WAVES. Paste the node’s address in the required field in the LEASING tab."
                                            values={{nodesLink: <Link pseudo href="#nodes">which node</Link>    }}
                                        />
                                    </Typography>
                                </div>
                                <div className={classes.arrowDiv}>
                                    <div className={classes.arrow} />
                                    <div className={classes.arrowMobile} />
                                </div>
                            </div>
                            <Margin bottom={5} />
                            <div className={classes.flexRow}>
                                <div className={classes.imageWrapper}>
                                    <Image4 />
                                </div>
                                <Typography
                                    tagName="div"
                                    align="center"
                                    className={classes.message}
                                >
                                    <FormattedMessage
                                        id="leasing.startLeasing.p4.title"
                                        defaultMessage="4. You’re done! Your balance will now generate income without even leaving your wallet. Payments are usually transferred once a week."
                                    />
                                </Typography>
                                <Margin bottom={2} />
                            </div>
                        </Col>

                </div>
            </ContentContainer>
        </Row>
    </div>
);

export default injectSheet(styles)(StartLeasing);
