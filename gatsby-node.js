exports.onCreateWebpackConfig = ({ getConfig, actions, stage }) => {
  if (getConfig().mode === 'production' || stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};
