import Items from '../components/Items';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = props => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;
