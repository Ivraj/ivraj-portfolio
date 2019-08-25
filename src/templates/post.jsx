import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Layout, Wrapper, SliceZone, SEO, Header } from '../components';
import website from '../../config/website';

const Hero = styled.header`
  background-color: ${props => props.theme.colors.black};
  padding-top: 1rem;
  padding-bottom: 4rem;
`;

const PostWrapper = Wrapper.withComponent('main');

const Post = ({ data: { prismicPost }, location }) => {
  const { data } = prismicPost;

  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPost}
        article
      />
      <Hero>
        <Wrapper>
          <Header />
          <h1 style={{ color: 'white' }}>{data.title.text}</h1>
        </Wrapper>
      </Hero>
      <div style={{ width: '100%', height: 'calc(100% - 212px)', background: 'black' }}>
        <PostWrapper id={website.skipNavId}>
          <SliceZone allSlices={data.body} />
        </PostWrapper>
      </div>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
};

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        date(formatString: "DD.MM.YYYY")
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }, filter: { uid: { ne: $uid } }) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`;
