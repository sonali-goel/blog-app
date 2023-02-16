import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';


const DeleteBlog = ({ match, history }) => {
  const blogId = match.params.id;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(blogId));
    history.push('/');
  };

  return (
    <div>
      <p>Are you sure you want to delete this blog?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBlog;
