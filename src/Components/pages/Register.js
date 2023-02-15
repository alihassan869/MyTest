import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function Register() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
    Cpassword: '',
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

  const Register = (e) => {
    e.preventDefault();
    const { name, email, password, Cpassword, Checkbox } = user;
    if (name && email && password && password === Cpassword && Checkbox) {
      axios.post('http://localhost:250/Register', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    }
  };
  return (
    <>
      <Header />
      <div className="container py-5 " style={{ minHeight: '80vh' }}>
        <div className="row py-5">
          <Form>
            <Form.Group className="mb-3">
              <input
                type="text"
                placeholder="Name"
                className=" input w-100 py-2 outline-none"
                required
                name="name"
                value={user.name}
                onChange={handladata}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <input
                type="email"
                placeholder=" Email "
                className="input  w-100 py-2 outline-none"
                required
                name="email"
                value={user.email}
                onChange={handladata}
              />
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicPassword">
              <input
                type="password"
                placeholder="Password"
                className=" input  w-100 py-2 outline-none"
                required
                name="password"
                value={user.password}
                onChange={handladata}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <input
                type="password"
                placeholder="Confirm Password"
                className=" input  w-100 py-2 outline-none"
                required
                name="Cpassword"
                value={user.Cpassword}
                onChange={handladata}
              />
            </Form.Group>
            <Form.Group className="my-4" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree all statements in Terms of service"
                required
                name="Checkbox"
                value={user.Checkbox}
                onChange={handladata}
              />
            </Form.Group>

            <button
              type="submit"
              className=" w-100 py-2 bg-red-800 text-white  "
              onClick={Register}
            >
              Register
            </button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
