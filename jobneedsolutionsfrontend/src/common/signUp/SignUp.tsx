import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { addEmployer } from "../../redux/slice/userSlice";

const defaultTheme = createTheme();

export default function SignUp() {
  const [signUpData, setSignUpData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const value = e.target.value;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSignUpClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);

    const payload = {
      firstName: signUpData.firstName,
      lastName: signUpData.lastName,
      email: signUpData.email,
      phone: signUpData.mobile,
      dob: null,
      password: signUpData.password,
      gender: signUpData.gender,
      resumeData: "",
      address: null,
      role: "USER",
    };

    dispatch(addEmployer(payload));
    navigate("/");
  };

  return (
    <div className='sign-up-container'>
      <ThemeProvider theme={defaultTheme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Box component='form' noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete='given-name'
                    name='firstName'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                    value={signUpData.firstName}
                    onChange={(e) => handleChange(e, "firstName")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='family-name'
                    value={signUpData.lastName}
                    onChange={(e) => handleChange(e, "lastName")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    value={signUpData.email}
                    onChange={(e) => handleChange(e, "email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    value={signUpData.password}
                    onChange={(e) => handleChange(e, "password")}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='mobile'
                    label='mobile'
                    type='text'
                    id='mobile'
                    autoComplete='mobile'
                    value={signUpData.mobile}
                    onChange={(e) => handleChange(e, "mobile")}
                  />
                </Grid>

                <FormControl className='sign-up-gender'>
                  <FormLabel id='demo-row-radio-buttons-group-label'>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby='demo-controlled-radio-buttons-group'
                    name='controlled-radio-buttons-group'
                    value={signUpData.gender}
                    onChange={(e) => handleChange(e, "gender")}
                  >
                    <FormControlLabel
                      value='female'
                      control={<Radio />}
                      label='Female'
                    />
                    <FormControlLabel
                      value='male'
                      control={<Radio />}
                      label='Male'
                    />
                  </RadioGroup>
                </FormControl>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label='I want to receive inspiration, marketing promotions and updates via email.'
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => handleSignUpClick(e)}
              >
                Sign Up
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='#' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
