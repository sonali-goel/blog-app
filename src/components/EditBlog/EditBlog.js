import React from 'react';
import { useSelector } from 'react-redux';
import EditBlogForm from './EditBlogForm';
import { useParams } from 'react-router-dom';


const EditBlog = () => {

  const { id } = useParams();
  const blogs = useSelector(state => state.blogs);
  const blog = blogs.find(blog => blog.id === id);

  console.log('id:', id);
  console.log('state:', blogs);


  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <EditBlogForm blog={blog} />
    </div>
  );
};

export default EditBlog;
