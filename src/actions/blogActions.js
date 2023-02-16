
export const createBlog = (title, content,category) => {
    return {
      type: 'CREATE_BLOG',
      payload: { title, content,category }
    };
  };
  
  export const updateBlog = (id, title, content,category) => {
    return {
      type: 'UPDATE_BLOG',
      payload: { id, title, content,category }
    };
  };
  
  export const deleteBlog = (id) => {
    return {
      type: 'DELETE_BLOG',
      payload: { id }
    };
  };
  export const likeBlog = ( id, likes) => {
    return{ type: "LIKE_BLOG", payload: { id, likes } };
  };
  