import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlog } from '../../actions/blogActions';
import { useParams,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditBlogForm = () => {
  const { id } = useParams();
  const blogs = useSelector(state => state.blogs);
  const blog = blogs.find(blog => blog.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [category, setCategory] = useState(blog.category);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBlog(id, title, content,category));
    navigate('/');
    
  };

  return (
    <div  className='MainDiv'>
      <div  className='firstDiv'>
      <Link to ="/" className='link1'>Back to Index</Link>
      

      </div>
    <div  className='secDiv'>
      <h2 className='h2'>Edit Blog</h2>
      
      


      <form onSubmit={handleSubmit}>

          <label className='titlelabel'>Title</label>
          <p></p>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)
           
            }
            className='title'
          />
          <p></p>
          <label className='categorylabel'>Category :</label>
          <p></p>
          <input
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)
           
            }
            className='title'
          />
        
        <p></p>
          <label  className='contentlabel'>Content</label>
          <p></p>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className='content'
          ></textarea>
        <p></p>
        <button type="submit"  className='button'>Save</button>
      </form>
      
    </div>

      </div>

  
    
  );
};

export default EditBlogForm;
