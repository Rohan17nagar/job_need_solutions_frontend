import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/header/Header";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./common/signUp/SignUp";
import Login from "./common/login/Login";
import Jobs from "./components/Jobs/Jobs";
import StickyFooter from "./common/StickyFooter/StickyFooter";
import PostDetailPage from "./components/PostDetailPage/PostDetailPage";

function App() {
  console.log("heom");
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/:postId' element={<PostDetailPage />} />
      </Routes>
      <StickyFooter />
    </>
  );
}

export default App;
