/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import './src/styles/global.css'

export const onInitialClientRender = () => {
  document.querySelector('meta[name="viewport"]').setAttribute(
    'content',
    'width=device-width, initial-scale=0.7'
  );
};
