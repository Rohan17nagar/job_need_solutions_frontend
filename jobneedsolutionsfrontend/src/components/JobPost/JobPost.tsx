import React from "react";
import "./JobPost.scss";
import Button from "@mui/material/Button";

type Item = {
  jobTitle: string;
  experienceRange: string;
  companyName: string;
  salaryRange: string;
  location: string;
  jobDescription: string;
  jobId: number;
};

type JobPostPropsType = {
  item: Item;
  handleApplyClick: (arg: number) => void;
};

const JobPost: React.FC<JobPostPropsType> = (props: JobPostPropsType) => {
  return (
    <div className='job-post'>
      <div className='job-post-title'>{props.item.jobTitle}</div>
      <div className='job-post-name'>{props.item.companyName}</div>

      <div className='job-post-e-s-l'>
        <div className='job-post-e'>
          <img />
          <span>{props.item.experienceRange}</span>
        </div>

        <div className='job-post-s'>
          <img />
          <span>{props.item.salaryRange}</span>
        </div>

        <div className='job-post-l'>
          <img />
          <span>{props.item.location}</span>
        </div>
      </div>

      <div className='job-post-description'>
        <img />
        <div>{props.item.jobDescription}</div>
      </div>

      <div className='job-post-apply'>
        <Button onClick={() => props.handleApplyClick(props.item.jobId)}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default JobPost;
