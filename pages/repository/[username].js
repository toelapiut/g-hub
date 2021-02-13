import PropTypes from 'prop-types';
import axios from 'axios';
import Repository from '../../src/screens/Repository';
import {http} from '../../src/helper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookmarkDeleteAction, bookmarkSaveAction} from '../../src/actions';

export const Index = ({response, user, query, bookmarkDeleteAction, bookmarks, bookmarkSaveAction}) => {
  const onBookmark = (item, status) => {
    if(status){
      bookmarkDeleteAction(item);
    }
    bookmarkSaveAction(item);
  };

  return (
    <Repository
      bookmarks={Object.keys(bookmarks)}
      onBookmark={onBookmark}
      user={user}
      username={query?.username}
      results={response}
    />
  );
};


Index.propTypes = {
  response: PropTypes.array,
  user: PropTypes.object,
  bookmarks: PropTypes.object,
  query: PropTypes.object,
  bookmarkDeleteAction: PropTypes.func.isRequired,
  bookmarkSaveAction: PropTypes.func.isRequired,
};

export const getServerSideProps = async (ctx) => {
  const {query} = ctx;

  let repo = await http.get(`/users/${query.username}/repos?sort=created&direction=desc`);
  let user = await http.get(`/users/${query.username}`);

  let [response, res] = await axios.all([repo, user]);

  return {
    props: {
      query,
      user: res.data,
      meta: {
        status: response.status
      },
      response: response.data
    }
  };
};


const actionCreators = {
  bookmarkDeleteAction,
  bookmarkSaveAction,

};

const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);