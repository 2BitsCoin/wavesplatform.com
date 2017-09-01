import { connect } from 'react-redux';

import { getClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onGetClientClick: () => getClientClick({ page: 'product', source: 'how_to_token' }),
})(View);