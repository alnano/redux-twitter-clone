import React from 'react';
import PropTypes from 'prop-types';
import { container, title, slogan} from './styles.css'

const Home = props => {
  return (
    <div className={container}>
      <p className={title}>{'ducr'}</p>
      <p className={slogan}>{'Real time social app. In the cloud' }</p>
    </div>
  );
};

Home.propTypes = {
  
};

export default Home;