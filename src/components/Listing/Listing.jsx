import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ListItem from './ListItem';

const List = styled.ul`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
`;

export default class Listing extends Component {
  render() {
    const { posts } = this.props;
    return (
      <List>
        {posts.map(post => {
          if (post.uid !== 'template-post') {
            console.log(post.uid);
            return <ListItem key={post.uid} node={post} />;
          }
          return <div />;
        })}
      </List>
    );
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
};
