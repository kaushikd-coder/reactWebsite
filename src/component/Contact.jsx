import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname:'',
    email:'',
    number:'',
    msg:'',
  });

  const inputEvent = (event) =>{

    const {name, value} = event.target
    setData((oldValue) =>{
      return {
        ...oldValue,
        [name] : value
      }
    })
  }

  const formSubmit = (e) =>{
        e.preventDefault();
        alert(
          `My name is ${data.fullname} and my Phone number is ${data.number}`
        );
        
  }
  return ( 
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>{" "}
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    {" "}
                    FullName{" "}
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={data.fullname}
                    name='fullname'
                    onChange = {inputEvent}
                    placeholder="Enter your name"
                  />
                </div>{" "}

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    {" "}
                    Email address{" "}
                  </label>{" "}
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={data.email}
                    name='email'
                    onChange = {inputEvent}
                    placeholder="name@example.com"
                  />
                </div>{" "}

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    {" "}
                    Phone
                  </label>{" "}
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={data.number}
                    name='number'
                    onChange = {inputEvent}
                    placeholder="mobile number"
                  />
                </div>{" "}

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    {" "}
                   Message
                  </label>{" "}
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={data.msg}
                    name='msg'
                    onChange = {inputEvent}
                    placeholder="mobile number"
                  >
                    {" "}
                  </textarea>{" "}
                </div>{" "}
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Contact;
