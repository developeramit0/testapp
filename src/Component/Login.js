import React, { useEffect, useState } from "react";
import logo from '../logo.svg';
import { Button, FormGroup, Label, Input } from "reactstrap";
import { decryptData, encryptData } from "../Utils";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getData = localStorage.getItem('token');
    setToken(getData)
    if (getData != null) {
      navigate("/PdfViewer");
      setToken(null)
    }
  }, [])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData(values => ({ ...values, [name]: value }))
  };
  const handleSubmit = async () => {
    if (loginData?.email && loginData?.password) {
      const data = encryptData(loginData)
      await localStorage.setItem('token', data);
      const getData = await localStorage.getItem('token');
      if (getData) {
        navigate("/PdfViewer");
      setToken(null)
      setLoginData({})
      }
    } else {
      alert("all Field Requerd")
    }
  }
  if (token==null) {
    return (
      <div className="background">
        <div className="login-box">
          <div className="container">
            <div class="row app-des">
              <div class="col left-background ">
                <h2>Test App</h2>
                <p>Powered by Test App</p>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div class="col login-form">
                <form>
                  <h2 className="font-weight-bold mb-4">Login</h2>
                  <FormGroup>
                    <Label className="font-weight-bold mb-2">Email</Label>
                    <Input
                      className="mb-3"
                      name="email"
                      type="email"
                      placeholder="John@example.com"
                      value={loginData.email || ""}
                      onChange={handleChange}
                    />
                    <Label className="font-weight-bold mb-2">Password</Label>
                    <Input
                      name="password"
                      className="mb-3"
                      type="password"
                      placeholder="At least 8 characters"
                      value={loginData.password || ""}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button onClick={handleSubmit} className="mt-3  btn">Login to your account</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return <div className="background" style={{ paddingTop: 300 }}>
      <h1>....Logding</h1>
    </div>
  }
}

export default Login;
