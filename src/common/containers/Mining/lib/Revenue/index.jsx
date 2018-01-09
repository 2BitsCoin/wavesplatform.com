import React from 'react';

// components
import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import AvatarTitle from 'src/common/components/AvatarTitle';
import IconProduct from 'src/common/components/IconProduct';
import Typography from 'src/common/components/Typography';
import { Row, Col } from 'src/common/components/Grid';

// containers
import Calculator from 'src/common/containers/CalculatorRevenue';

import { FormattedMessage } from 'react-intl';
const IncorrectAmountText = ({ min }) => (
  <Typography type="body">
    <FormattedMessage
      id="calcRevenue.incorrectAmount.mining"
      values={{ min }}
    />
  </Typography>
);

const StartMining = () => (
  <div>
    <SectionTitleText
      title={<FormattedMessage id="mining.revenue.title" />}
      text={<FormattedMessage id="mining.revenue.text" />}
    />

    <Row>
      <Col xs={12} sm={6}>
        <AvatarTitle
          avatar={<IconProduct name="leasing" />}
          title={<FormattedMessage id="mining.revenue.p1.title" />}
        />
        <Margin bottom={2} />
        <Typography type="body" cut>
          <FormattedMessage id="mining.revenue.p1.text1" />
        </Typography>
        <Typography type="body" cut>
          <FormattedMessage id="mining.revenue.p1.text2" />
        </Typography>
      </Col>

      <Col xs={12} sm={6}>
        <AvatarTitle
          avatar={<IconProduct name="mining" />}
          title={<FormattedMessage id="mining.revenue.p2.title" />}
        />
        <Margin bottom={2} />
        <Typography type="body" cut>
          <FormattedMessage id="mining.revenue.p2.text1" />
        </Typography>
        <Typography type="body" cut>
          <FormattedMessage id="mining.revenue.p2.text2" />
        </Typography>
      </Col>
    </Row>

    <Margin bottom={5} />

    <Typography type="display2" tagName="div">
      <FormattedMessage id="mining.revenue.calc.title" />
    </Typography>

    <Margin bottom={3} />

    <Row>
      <Col xs={12} md={9}>
        <Calculator minWaves={1000} IncorrectAmountText={IncorrectAmountText} />
      </Col>

      <Col xs={12} md={3}>
        <Margin top={4}>
          <Typography type="quote" tagName="div">
            <FormattedMessage id="mining.revenue.calc.description" />
          </Typography>
        </Margin>
      </Col>
    </Row>
  </div>
);

export default StartMining;
