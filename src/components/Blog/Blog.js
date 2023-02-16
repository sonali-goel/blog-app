import React from 'react';
import { useSelector } from 'react-redux';
import BlogList from './BlogList';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const blogs = useSelector(state => state.blogs);
  const navigate = useNavigate();
  const handlePost = e => {
    e.preventDefault();
    navigate('/createBlog');
    
  };
  return (
    
    <div className="MainDiv">
      <div className="firstDiv">
      
         <button onClick={handlePost} className="button1"> New Blog</button>

      </div>
      <div className="secDiv">

      
     
      
      <BlogList blogs={blogs} />
        
      </div>
      
    </div>
  );
};

export default Blog;