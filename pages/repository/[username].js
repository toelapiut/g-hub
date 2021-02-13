import Repository from '../../src/screens/Repository';
import {http} from '../../src/helper';
import axios from 'axios';
import PropTypes from 'prop-types';

export const Index = ({response, user, query}) => {

  return (
    <Repository
      user={user}
      username={query?.username}
      results={response}
    />
  );
};


Index.propTypes = {
  response: PropTypes.array,
  user: PropTypes.object,
  query: PropTypes.object,
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

export default Index;