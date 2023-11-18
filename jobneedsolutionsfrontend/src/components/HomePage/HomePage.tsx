import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import CommonButton from "../../common/Button/CommonButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { add, fetchData } from "../../redux/slice/HomeSlice";

// import axios from "axios";
const HomePage: React.FC = () => {
  const [showLoginButton, setShowLoginButton] = useState(true);

  const navigate = useNavigate();

  const handleButtonClick = (name: string) => {
    navigate(name);
  };

  // useEffect(() => {
  //   const data = {
  //     companyName: "infosys",
  //     companyDescription: "Infosys compnay",
  //     location: "India",
  //     contactInfo: "NA",
  //   };
  //   // const url: string = "http://localhost:8080/employer/addEmployer";
  //   // axios.post(url, data).then((res) => {
  //   //   console.log(res.data);
  //   // });

  //   dispatch(postData(data));
  // }, []);

  const numOfCakes = useAppSelector((state) => state.HomeSlice.numOfCakes);
  const data = useAppSelector((state) => state.HomeSlice.data);

  const dispatch = useAppDispatch();
  console.log(numOfCakes, "numOfCakes");

  useEffect(() => {
    dispatch(add(10));

    dispatch(fetchData(""));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const userdata: string = sessionStorage.getItem("user") ?? "";

    if (userdata !== "" && JSON.parse(userdata)?.jwtToken?.length > 0) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  }, [sessionStorage.getItem("user")]);

  return (
    <div className='home-container'>
      <h1 className='home-heading'>Find your dream job here</h1>

      {!showLoginButton ? (
        <div>Hello</div>
      ) : (
        <div className='home-buttons'>
          <CommonButton
            name='Sign Up'
            onClick={() => handleButtonClick("signup")}
          />
          <CommonButton
            name='Login'
            onClick={() => handleButtonClick("login")}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
