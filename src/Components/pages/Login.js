import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
function Login({ setloginuser }) {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: '',
    password: '',
    Checkbox: false,
  });
  const handladata = (e) => {
    const { name, value } = e.target;

    if (name === 'Checkbox') {
      setuser({
        ...user,
        [name]: e.target.checked,
      });
    } else {
      setuser({
        ...user,
        [name]: value,
      });
    }
  };
  const Login = (e) => {
    e.preventDefault();
    const { email, password, Checkbox } = user;
    if (email && password && Checkbox) {
      axios.post('http://localhost:250/Login', user).then((res) => {
        alert(res.data.message);
        // console.log(user);
        setloginuser(res.data.user);
        navigate('/');
      });
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid py-5" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="row w-full py-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <input
                  type="email"
                  placeholder=" Email "
                  className="input w-100 py-2 outline-none "
                  required
                  name="email"
                  value={user.email}
                  onChange={handladata}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <input
                  type="password"
                  placeholder="Password"
                  className=" input w-100 py-2 ps-2 outline-none"
                  required
                  name="password"
                  value={user.password}
                  onChange={handladata}
                />
              </Form.Group>
              <Form.Group className="my-4 " controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  required
                  name="Checkbox"
                  value={user.Checkbox}
                  onChange={handladata}
                />
              </Form.Group>

              <button
                type="submit"
                className=" w-100 bg-red-800 py-2  text-white"
                onClick={Login}
              >
                LOGIN
              </button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
