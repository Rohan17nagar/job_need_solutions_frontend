import React from "react";
import JobPost from "../JobPost/JobPost";
import "./JobPosts.scss";
import { useAppDispatch } from "../../redux/store";
import { applyForJob } from "../../redux/slice/jobsSlice";

type ItemType = {
  jobTitle: string;
  experienceRange: string;
  companyName: string;
  salaryRange: string;
  location: string;
  jobDescription: string;
  jobId: number;
};

type MyCallbackType = (arg1: ItemType | object) => void;

type JobPostPropTypes = {
  data: Array<ItemType>;
  handleJobPostClick: MyCallbackType;
};

const JobPosts: React.FC<JobPostPropTypes> = (props: JobPostPropTypes) => {
  const dispatch = useAppDispatch();

  const handleJobPostClick = (item: ItemType | object) => {
    props.handleJobPostClick(item);
  };

  const handleApplyClick = (jobId: number) => {
    console.log(jobId);
    dispatch(applyForJob({ arg1: jobId, arg2: 2 }));
  };

  return (
    <div className='job-posts-container'>
      {props?.data?.map((item: ItemType) => {
        return (
          <div onClick={() => handleJobPostClick(item)}>
            <JobPost
              item={item}
              handleApplyClick={(jobId) => handleApplyClick(jobId)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default JobPosts;
