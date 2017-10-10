// import { connect } from 'react-redux';
import React from 'react';

import { FormattedMessage } from 'react-intl';


import Panel from 'src/common/components/Panel';
import Divider from 'src/common/components/Divider';
import Article from 'src/common/components/Article';
import Margin from 'src/common/components/Margin';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';


// import StressTest from 'src/common/containers/StressTest';
import Preview from './Preview';
// import Countdown from './Countdown';




import injectSheet from 'react-jss';
const styles = ({ breakpoints }) => ({
    chartWrapper: {
        height: 150,
    },
    [breakpoints.up('md')]: {
        chartWrapper: {
            height: 180,
        },
    },
    [breakpoints.up('lg')]: {
        chartWrapper: {
            height: 220,
        },
    }
})



const StressTestSection = ({ classes }) => (
    <div>
        <Typography type="display3" align="center">
            <FormattedMessage
                id="wavesNG.stressTest.title"
                defaultMessage="Waves-NG activation stages"
            />
        </Typography>

        <Margin bottom={4} />

        <Panel>

            <Margin top={2} bottom={4}>
                {/* <Countdown /> */}
                <Preview />
                {/* <StressTest /> */}
            </Margin>

            <Divider />
            <Margin bottom={4} />

            <Row direction="row-reverse">
                <Col xs={12} sm={5} lg={4}>
                    <Article
                        title={
                            <FormattedMessage
                                id="wavesNG.stressTest.chart1.title"
                                defaultMessage="UtxPool size"
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.stressTest.chart1.text"
                                defaultMessage="Numeber of transaction waiting in queue for confirmation. The more trasnsactions are processed by network within a minute, the faster it decreases."
                            />
                        }
                    />
                    <Margin bottom={2} />
                </Col>
                <Col xs={12} sm={7} lg={8}>
                    <div className={classes.chartWrapper}>
                        <iframe src="//grafana.wavesnodes.com/dashboard-solo/db/stress-test?orgId=2&from=now-5m&to=now&refresh=3s&panelId=1&theme=light" width="100%" height="100%" frameBorder="0" />
                    </div>

                </Col>
            </Row>

            <Margin bottom={4} />

            <Row direction="row-reverse">
                <Col xs={12} sm={5} lg={4}>
                    <Article
                        title={
                            <FormattedMessage
                                id="wavesNG.stressTest.chart2.title"
                                defaultMessage="Transaction throughput"
                            />
                        }
                        text={
                            <FormattedMessage
                                id="wavesNG.stressTest.chart2.text"
                                defaultMessage="Number of transactions mined (confirmed) by the blockchain per minute."
                            />
                        }
                    />
                    <Margin bottom={2} />
                </Col>
                <Col xs={12} sm={7} lg={8}>
                    <div className={classes.chartWrapper}>
                        <iframe src="http://grafana.wavesnodes.com/dashboard-solo/db/stress-test?orgId=2&from=now-5m&to=now&refresh=3s&theme=light&panelId=2" width="100%" height="100%" frameBorder="0" />
                    </div>
                </Col>
            </Row>
        </Panel>
    </div>
)

export default injectSheet(styles)(StressTestSection);