import { connect } from 'react-redux';
import Display from '../components/Display';
import { getTitle, getSubtitle } from '../selectors/titles';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

export default connect(
  mapStateToProps
)(Display);
