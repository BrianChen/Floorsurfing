import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import ListingIndex from './listing_index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
