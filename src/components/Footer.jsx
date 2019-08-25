import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  max-width: ${props => props.theme.maxWidth};
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.colors.white4};
  a {
    color: ${props => props.theme.colors.white4};

  }
`;

class Footer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ width: '100%', height: '100%', background: 'black' }}>
        <StyledFooter>{children}</StyledFooter>
      </div>
    );
  }
}

export default Footer;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
