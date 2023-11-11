import React from "react";
import { useLocation } from "react-router-dom";

const PostDetailPage: React.FC = (props) => {
  const location = useLocation();
  console.log(location.state.item);
  return <div className='post-detail-page-container'></div>;
};

export default PostDetailPage;
