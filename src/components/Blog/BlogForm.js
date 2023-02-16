import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createBlog} from '../../actions/blogActions';
import { useNavigate ,Link} from 'react-router-dom';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlog(title, content,category));
    setTitle('');
    setContent('');
    setCategory('');
    navigate('/');
  };

  return (
    <div  className="MainDiv">

    <div  className="firstDiv">
      <Link to ="/" className='link1'>Back to Index</Link>


    </div>
    <div  className="secDiv">
      <form onSubmit={handleSubmit}>
      
        <label htmlFor="title" className='titlelabel'>Title:</label>
        <p></p>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title"
        />
        <p>
        </p>
        <label htmlFor="category" className='categorylabel'>Category:</label>
        <p></p>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category"
        />
      
       <p>

       </p>
        <label htmlFor="content" className='contentlabel'>Content:</label>
        <p></p>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="content"
        ></textarea>
        <p></p>
     
      <button type="submit" className="button">Create</button>
    </form>

      </div>
    </div>
    
  );
};

export default BlogForm;
