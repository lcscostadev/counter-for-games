// eslint-disable-next-line no-unused-vars
import React from 'react';
import bgSvg from './assets/bg.svg';
import { Navbar, Counter } from './components';
import PropTypes from 'prop-types';

const AppWrapper = ({ children }) => {
  const styles = {
    backgroundImage: `url(${bgSvg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
  };

  return <div style={styles}>{children}</div>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <>
      <AppWrapper>
        <Navbar />
        <Counter />
        {/* Your other components go here */}
      </AppWrapper>
    </>
  );
};

export default App;
