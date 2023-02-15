import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Contact() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: '',
    email: '',
    radio: '',
    City: '',
    Message: '',
    Checkbox: false,
  });
  const handledata = (e) => {
    const { name, value } = e.target;
    if (name == 'Checkbox') {
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
  const [image, setimage] = useState('');
  const handledatapic = (e) => {
    setimage(e.target.files[0]);
  };
  const Send = (e) => {
    e.preventDefault();
    const { name, email, radio, City, Message } = user;
    // console.log(Message);
    if (name && email && radio && City && Message) {
      axios.post('http://localhost:250/message', user).then((res) => {
        alert(res.data.message);
      });
    } else {
      alert('Please fill fields correctly');
    }
    const formData = new FormData();
    formData.append('image', image);
    const config = {
      headers: {
        'content-type': 'multipart/formdata',
      },
    };
    const url = 'http://localhost:250/upload';
    axios
      .post(url, formData, config)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log('err :>> ', err);
      });
    navigate('/');
  };
  return (
    <>
      <div className="container py-5" style={{ minHeight: '50vh' }}>
        <div className="text-title text-center">
          <h2> CONTACT US</h2>
          <hr className="w-50 mx-auto" />
        </div>
        <Form onSubmit={Send}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name "
              name="name"
              value={user.name}
              onChange={handledata}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={handledata}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Male</Form.Label>
            <input
              type="radio"
              name="radio"
              value="male"
              onChange={handledata}
              className="me-2"
            />
            <Form.Label>FEMALE</Form.Label>
            <input
              type="radio"
              name="radio"
              value="Female"
              onChange={handledata}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            className="mb-3 me-2"
            name="City"
            value={user.City}
            onChange={handledata}
            required
          >
            <option>City</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
            <option value="MULTAN">MULTAN</option>
            <option value="GUJRAT">GUJRAT</option>
            <option value="QUETTA">QUETTA</option>
            <option value="SIALKOT">SIALKOT</option>
          </Form.Select>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control
              type="file"
              name="image"
              className="input"
              onChange={handledatapic}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="Message"
              value={user.Message}
              onChange={handledata}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              name="Checkbox"
              value={user.Checkbox}
              onChange={handledata}
            />
          </Form.Group>
          <button type="submit " className="w-100 py-2 bg-red-800 text-white">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
}

export default Contact;
