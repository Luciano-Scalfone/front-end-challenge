import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const state = { posts, setPosts };

  return (
    <MyContext.Provider value={ state }>
      {children}
    </MyContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default AppProvider;
