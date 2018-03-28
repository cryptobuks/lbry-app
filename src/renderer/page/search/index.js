import { connect } from 'react-redux';
import { doUpdateSearchQuery, selectIsSearching, selectSearchValue } from 'lbry-redux';
import { doNavigate } from 'redux/actions/navigation';
import SearchPage from './view';

const select = state => ({
  isSearching: selectIsSearching(state),
  query: selectSearchValue(state),
});

const perform = dispatch => ({
  navigate: path => dispatch(doNavigate(path)),
  updateSearchQuery: query => dispatch(doUpdateSearchQuery(query)),
});

export default connect(select, perform)(SearchPage);
