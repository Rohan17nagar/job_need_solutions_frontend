import React, { useState } from "react";
import { allImages } from "../../assets/images/allImages";
import "./AddEmployer.scss";
import { useNavigate } from "react-router-dom";
import SmallBanner from "../../common/SmallBanner/SmallBanner";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box } from "@mui/material";
import CommonButton from "../../common/Button/CommonButton";
const AddEmployer: React.FC = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-1);
  };
  const handleSubmitClick = () => {
    console.log(addEmployerObj);
  };

  const [addEmployerObj, setAddEmployerObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    designation: "",
    companyDescription: "",
    location: "",
    companyName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    setAddEmployerObj({
      ...addEmployerObj,
      [name]: e.target.value,
    });
  };

  return (
    <div className='add-employer-container'>
      <SmallBanner />
      <button className='add-employer-back' onClick={() => navigate(-1)}>
        <img src={allImages.BackButtonIcon} />
        <span>Back</span>
      </button>

      <div className='add-employer-input'>
        <div className='add-employer-left'>
          <div className='add-employer-field'>
            <TextField
              autoComplete='off'
              inputProps={{
                maxLength: 25,
              }}
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus={false}
              value={addEmployerObj.firstName}
              onChange={(e) => handleChange(e, "firstName")}
            />
          </div>
          <div className='add-employer-field'>
            <TextField
              autoComplete='off'
              name='lastName'
              required
              inputProps={{
                maxLength: 25,
              }}
              fullWidth
              id='lastName'
              label='Last Name'
              autoFocus={false}
              value={addEmployerObj.lastName}
              onChange={(e) => handleChange(e, "lastName")}
            />
          </div>
          <div className='add-employer-field'>
            <TextField
              autoComplete='off'
              name='email'
              required
              inputProps={{
                maxLength: 25,
              }}
              type='email'
              fullWidth
              id='email'
              label='Email'
              autoFocus={false}
              value={addEmployerObj.email}
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
          <div className='add-employer-field'>
            <TextField
              autoComplete='off'
              name='mobile'
              required
              inputProps={{
                maxLength: 10,
              }}
              fullWidth
              type='text'
              id='mobile'
              label='Mobile'
              autoFocus={false}
              value={addEmployerObj.mobile}
              onChange={(e) => handleChange(e, "mobile")}
            />
          </div>

          <div className='add-employer-field'>
            <Autocomplete
              id='country-select-demo'
              defaultValue={{ code: "IN", label: "India", phone: "91" }}
              disabled
              // sx={{ width: 300 }}
              options={countries}
              autoHighlight={false}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component='li'
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Choose a country'
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className='add-employer-right'>
          <div className='add-employer-field'>
            <TextField
              autoComplete='off'
              name='companyName'
              required
              fullWidth
              inputProps={{
                maxLength: 25,
              }}
              id='companyName'
              label='CompanyName'
              autoFocus={false}
              value={addEmployerObj.companyName}
              onChange={(e) => handleChange(e, "companyName")}
            />
          </div>
          <div className='add-employer-field'>
            <TextField
              autoComplete='off'
              name='designation'
              required
              fullWidth
              inputProps={{
                maxLength: 25,
              }}
              id='designation'
              label='designation'
              autoFocus={false}
              value={addEmployerObj.designation}
              onChange={(e) => handleChange(e, "designation")}
            />
          </div>

          <div className='add-employer-field'>
            <TextField
              autoComplete='off'
              name='companyDescription'
              rows={3}
              required
              fullWidth
              multiline
              inputProps={{
                maxLength: 300,
              }}
              id='companyDescription'
              label='companyDescription'
              autoFocus={false}
              value={addEmployerObj.companyDescription}
              onChange={(e) => handleChange(e, "companyDescription")}
            />
          </div>
        </div>
      </div>
      <div className='add-employer-buttons'>
        <CommonButton name='Cancel' onClick={() => handleCancelClick()} />
        <CommonButton name='Submit' onClick={() => handleSubmitClick()} />
      </div>
    </div>
  );
};

export default AddEmployer;

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
const countries: readonly CountryType[] = [
  { code: "IN", label: "India", phone: "91" },
];
