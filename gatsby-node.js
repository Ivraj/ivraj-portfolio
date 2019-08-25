const _ = require('lodash');

// GraphQL function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve('./src/templates/post.jsx');

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  );

  const postsList = result.data.allPrismicPost.edges;

  postsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    if (edge.node.uid !== 'template-post') {
      createPage({
        path: `/${edge.node.uid}`,
        component: postTemplate,
        context: {
          // Pass the unique ID (uid) through context so the template can filter by it
          uid: edge.node.uid,
        },
      });
    }
  });
};
