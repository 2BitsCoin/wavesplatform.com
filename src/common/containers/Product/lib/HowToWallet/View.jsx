import React from 'react';

import Link from 'src/common/components/Link';
import IconProduct from 'src/common/components/IconProduct';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import HowToBlock from 'src/common/components/HowToBlock';

const HowToStart = ({ onGetClientClick }) => (
  <HowToBlock
    title={
      <FormattedMessage
        id="product.howToWallet.title"
        defaultMessage="How do I start using my Waves wallet?"
      />
    }
    steps={[
      {
        avatar: <IconProduct name="cloud" />,
        text: (
          <div>
            <FormattedHTMLMessage
              id="product.howToWallet.step1"
              defaultMessage="First, install the <br/> Waves client"
            />
            <br/>
            <Link
              onClick={onGetClientClick}
              key="main_cta_button"
              target="_blank"
              href="https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm"
              textDecoration={false}
            >
              <FormattedMessage id="cta.getClient" />
            </Link>
          </div>
        ),
      },
      {
        avatar: <IconProduct name="coins" />,
        text: (
          <FormattedMessage
            id="product.howToWallet.step2"
            defaultMessage="Fill your wallet with bitcoins, ethereum, ethereum classic, US dollars or Euros."
          />
        ),
      },
      {
        avatar: <IconProduct name="dex" />,
        text: (
          <FormattedMessage
            id="product.howToWallet.step3"
            defaultMessage="You can convert them to Waves tokens using the decentralized exchange, which you can find on the Waves client."
          />
        ),
      },
    ]}
  />
);

export default HowToStart;
