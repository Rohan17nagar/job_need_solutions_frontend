import React, { useEffect } from "react";

import "./JobSection.scss";
import Filter from "../../common/Filter/Filter";
import Tooltip from "@mui/material/Tooltip";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllJobPosts } from "../../redux/slice/jobsSlice";
import JobPosts from "../JobPosts/JobPosts";
import { useNavigate } from "react-router-dom";

const JobSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const jobPosts = useAppSelector((state) => state.jobsReducer.jobPosts);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(jobPosts);
  }, [jobPosts]);

  useEffect(() => {
    dispatch(getAllJobPosts());

    console.log("check twice");
  }, []);

  const handleJobPostClick = (item: object) => {
    console.log(item);
    // navigate(`/jobs/:${item.jobId}`, { state: { item } });
  };

  return (
    <div className='job-section-container'>
      <Tooltip title='Filter development is in progress' followCursor>
        <div className='job-section-filter'>
          <Filter />
        </div>
      </Tooltip>
      <div className='job-section-jobposts'>
        <JobPosts
          data={jobPosts}
          handleJobPostClick={(item) => handleJobPostClick(item)}
        />
      </div>
      <div className='job-section-ads'>C</div>
    </div>
  );
};
export default React.memo(JobSection);
