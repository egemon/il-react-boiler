class News extends React.Component {
  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.leaveHook,
    );
  }

  leaveHook(nextLocation) {
    console.log('leaving news for', nextLocation, this);
    return true;
  }

  render() {
    return (
      <div>
        <h1>News</h1>
      </div>
    );
  }
}

News.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

News.propTypes = {
  route: React.PropTypes.shape({}),
};

News.defaultProps = {
  route: '/',
};

export default News;
