import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import LogReg from "./pages/auth/LogReg.js";
import SendEmailResetPassword from "./pages/auth/SendEmailResetPassword.js";
import ResetPassword from "./pages/auth/ResetPassword.js";
import Dashboard from "./pages/Dashboard.js";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<LogReg/>}/>
        <Route path="sendemailresetpassword" element={<SendEmailResetPassword/>}/>
        <Route path="reset" element={<ResetPassword/>}/>

        
      </Route>
      
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<h1>Error 404 Page not Found!!</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
