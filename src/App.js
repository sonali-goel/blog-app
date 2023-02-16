import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Blog from './components/Blog/Blog';
import EditBlog from './components/EditBlog/EditBlog';
import DeleteBlog from './components/DeleteBlog/DeleteBlog';
import BlogContent from './components/BlogContent/BlogContent';
import BlogForm from './components/Blog/BlogForm';

const App = () => {
  return (
    
    <Provider store={store}>
      <Router>
        <Routes>
          <Route  path="/" element={<Blog />} />
          <Route  path="/createBlog" element={<BlogForm />} />
          <Route path="/:id" element={<BlogContent />} />
          <Route  path="/edit/:id" element={<EditBlog  />} />
          <Route  path="/delete/:id" element={<DeleteBlog  />} />
        </Routes>
      </Router>
    </Provider>

  );
};

export default App;
