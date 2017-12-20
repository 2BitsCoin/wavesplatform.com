import React from 'react';
import cx from 'classnames';
import styles from '../../styles';

import injectSheet from 'react-jss';

import Typography from 'src/common/components/Typography';

const FooterNav = ({ classes, links }) => (
  <div className={classes.navContainer}>
    {links.filter(link => !link.hideInFooter).map((link, index) => (
      <Typography
        className={cx(classes.navLinkContainer, {
          [classes.navLinkContainerXsOnly]: link.xsOnly,
        })}
        key={`desktop_nav_link${index}`}
        tagName="span"
        color="gray-50"
      >
        <a
          key={`desktop_nav_link${index}`}
          href={link.href}
          className={classes.link}
        >
          {link.text}
        </a>
      </Typography>
    ))}
  </div>
);

export default injectSheet(styles)(FooterNav);
