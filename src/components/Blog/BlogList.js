import React from 'react';
import {Link} from "react-router-dom"

const BlogList = ({ blogs }) => {
  return (
    <div className="MainDiv">
    <ul>
    <h2 className='h2'>MY BLOGS</h2>
      {blogs.map(blog => (
         <table>
           <tr>
            <td> <Link to ={`/${blog.id}`}>{blog.title} </Link>
            </td> 
            </tr>
         </table>
        
      ))}
    </ul>
    </div>
  );
};

export default BlogList;