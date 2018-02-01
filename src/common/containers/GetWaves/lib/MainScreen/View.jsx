import React from 'react';
import { FormattedMessage } from 'react-intl';
import url from 'src/common/utils/url';

import DownloadClientDropdown from 'src/common/components/DownloadClientDropdown';
import Button from 'src/common/components/Button';
import MainScreen from 'src/common/components/MainScreen';

const GetWavesMainScreen = ({ logSettings, onNewClientClick }) => (
  <MainScreen
    title={<FormattedMessage id="getWaves.title" />}
    buttons={[
      <DownloadClientDropdown
        key="main_cta_button"
        logSettings={logSettings}
      />,
      <Button
        onClick={onNewClientClick}
        href={url('online-client(beta)')}
        key="main_cta_button2"
        bordered
      >
        <FormattedMessage id="cta.onlineClient" />
      </Button>,
    ]}
  />
);

export default GetWavesMainScreen;
