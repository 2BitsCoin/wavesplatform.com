import { connect } from 'react-redux';

import { changeAmount, changeTerm, amountBlur } from './ducks';

import View from './View';

const CalculatorRevenueContainer = connect(
    ({ calculatorRevenue }) => calculatorRevenue,
    (dispatch, { minWaves, maxWaves }) => ({
        onAmountChange: v => dispatch(changeAmount(v)),
        onTermChange: v => dispatch(changeTerm(v)),
        onAmountBlur: () => dispatch(amountBlur({ min: minWaves, max: maxWaves })),
    })
)(View);


CalculatorRevenueContainer.defaultProps = {
    minWaves: 0.02,
    maxWaves: 100000000,
};


export default CalculatorRevenueContainer;
