import React,{ useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from  "../../reducers/blogReducer";
import { likeBlog } from "../../actions/blogActions";


const BlogContent = () => {

    
    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useContext(BlogContext);
    console.log(state);
    
    const blogs = useSelector(state => state.blogs);
    const blog = blogs.find(blog => blog.id === id);
    const dispatch = useDispatch();
    console.log('id:', id);
    console.log('state:', blogs);
    console.log('blog:', blog);
  
  
    if (!blog) {
      return <div>Blog not found</div>;
    }
    const handleDelete = () => {
        dispatch(deleteBlog(id));
        navigate('/');
      };
    const handleLike = () => {
        dispatch(likeBlog(blog.id, blog.likes));
        
      };
      const handleedit = () => {
        navigate(`/edit/${blog.id}`)
        
      };
  
    return (
     <div className="MainDiv">
        <div className="firstDiv">
            <Link to ="/" className='link1'>Back to Index  </Link>
            <button onClick={handleedit}  className='edit'>Edit Blog</button>
            <button onClick={handleLike}  className='like'>Like ({blog.likes})</button>
            <button onClick={handleDelete} className='delete'>Delete</button>
        </div>
        <div className="secDiv">
            <div className='blg'>   
            {blog.content}  
            </div>

        </div>

     </div>
      
    );
};
export default BlogContent;