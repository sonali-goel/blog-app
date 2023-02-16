import React, { createContext, useReducer } from "react";
const initialState = {
    blogs: [ { 
      id: '1',
      title: '5 Productivity Hacks to Boost Your Workday Efficiency',
      content:"Are you feeling overwhelmed by your workload and struggling to stay on top of your tasks? If so, you're not alone. Many people find it challenging to stay productive throughout the day, especially with so many distractions around us. However, there are several productivity hacks that you can use to boost your workday efficiency and get more done in less time. In this blog post, we'll explore five of the most effective hacks that you can start using today.Plan Your Day the Night Before One of the most effective ways to boost your productivity is to plan your day in advance. Take a few minutes before you go to bed to make a to-do list of the most important tasks that you need to complete the following day. This will help you stay organized and focused, and prevent you from wasting time in the morning trying to figure out what to do.The Pomodoro Technique is a time management method that can help you stay focused and productive throughout the day. The technique involves working on a task for 25 minutes, followed by a five-minute break. After four Pomodoros, take a longer break of 20-30 minutes. This method can help you avoid burnout, stay focused, and get more done in less time.",
      category: 'Productivity',
      likes:0
    },
    { 
      id: '2',
      title: '5 Key Trends in Social Media Marketing to Watch in 2023',
      content: "Social media marketing is an ever-evolving field, and it can be challenging to keep up with the latest trends and best practices. In this blog post, you could explore five key trends in social media marketing that are set to take off in 2023. Some possible trends that you could cover include:The rise of short-form video content, such as TikTok and Instagram Reels The growing importance of social media influencers and micro-influencers The increased use of augmented reality (AR) and virtual reality (VR) in social media campaigns The importance of creating a cohesive and consistent brand across all social media channels The continued growth of social commerce, including the rise of shoppable posts and social media marketplaces. You could discuss each trend in detail, and offer practical tips and examples for how businesses can take advantage of these trends in their social media marketing strategies. By offering valuable insights and actionable advice, your blog post could help your readers stay ahead of the curve in 2023."
    , category: 'Blogs',
      likes:0
    },
    { 
      id: '3',
      title: 'The Importance of Data Privacy in 2023',
      content: 'Data privacy has become a growing concern for individuals and businesses alike, as more and more personal information is shared and stored online. In this blog post, you could explore the importance of data privacy in 2023 and the steps that individuals and businesses can take to protect their data. Some possible topics that you could cover include:The latest data privacy regulations and laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) The risks and consequences of data breaches, including financial loss and reputational damageThe importance of strong passwords, two-factor authentication, and other security measures to protect personal and business data  The rise of data tracking and analytics, and the need for transparency and consent in data collection The role of individuals and businesses in promoting data privacy and protecting personal information',
      category: 'Blogs',
      likes:0
    }
  ]
 
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_BLOG':
        const newBlog = {
          id: Date.now().toString(),
          title: action.payload.title,
          content: action.payload.content,
          category: action.payload.category,
          likes: 0
        };
        return { blogs: [...state.blogs, newBlog] };
      case 'UPDATE_BLOG':
        return {
          blogs: state.blogs.map(blog => {
            if (blog.id === action.payload.id) {
              return {
                ...blog,
                title: action.payload.title,
                content: action.payload.content,
                category:action.payload.category
              };
            } else {
              return blog;
            }
          })
        };
      case 'DELETE_BLOG':
        return {
          blogs: state.blogs.filter(blog => blog.id !== action.payload.id)
        };
      case "LIKE_BLOG":
          return {
            blogs: state.blogs.map(blog => {
              if (blog.id === action.payload.id) {
                return {
                  ...blog,
                  likes: action.payload.likes+1          
                }
              } else {
                return blog;
              }
          })
        }
        
      default:
        return state;
    }
  };

export default blogReducer;
export const BlogContext = createContext(initialState);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
  
