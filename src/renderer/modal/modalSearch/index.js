import { connect } from 'react-redux';
import { doCloseModal } from 'redux/actions/app';
import ModalSearch from './view';
import { doClearPublish } from 'redux/actions/publish';
import { doNavigate } from 'redux/actions/navigation';

const perform = dispatch => ({
  closeModal: () => dispatch(doCloseModal()),
  clearPublish: () => dispatch(doClearPublish()),
  navigate: (path, params) => dispatch(doNavigate(path, params)),
});

export default connect(null, perform)(ModalSearch);
