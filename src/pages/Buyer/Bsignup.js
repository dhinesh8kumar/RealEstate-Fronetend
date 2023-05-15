import "../../styles/Bsignup.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Navbar from "../../components/Navbar"
import {Link} from "react-router-dom";
import axios from "axios";


function Bsignup() {
  const [uploadFile, setUploadFile] = useState(false);

  const handleOptionChange = (event) => {
    if (event.target.value === 'yes') {
      setUploadFile(true);
      schema['pfile']=Yup.string()
      .required("Please upload your fromer Phillipines residency proof");
    } else {
      setUploadFile(false);
    }
  }

  const schema = Yup.object().shape({

    fullname: Yup.string()
      .required("Please Enter your Full Name"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),

    mob: Yup.string()
      .required("Enter your Phone number")
      .min(10,"Enter a Valid Phone number")
      .max(11,"Enter a Valid Phone number"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "password length must be 8"),
    confirmPassword: Yup.string()
      .required("Confirm Your Password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

    address: Yup.string()
      .required("Address is required"),

    passport: Yup.string()
      .required("Passport is required")
      .min(12, "Invalid Passport number")
      .max(12, "Invalid Passport number"),

    file: Yup.string()
      .required("Please upload your Passport"),
      // pfile: Yup.string()
      // .required("Please upload your fromer Phillipines residency proof"),
     
    // pfile: Yup.string().when('option',{
    //   is:'yes',
    //   then: () => string().required("Required")
    // }),

    
  });

  
  const exceptThisSymbols = ["e", "E", "-", "."];

   


  

  return (
    <>
    <Navbar/>
      <Formik
      

        validationSchema={schema}
        initialValues={{ fullname: "", email: "", mob: "", password: "", confirmPassword: "", address: "", passport: "", file: "",pfile: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
            axios.post("http://localhost:9091/Bsignup",{
            values
        }).then(()=>{
            console.log("success");
            window.location.reload(false);
            alert("Your data sent successfully for the review.");

        });
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="bgb" style={{padding:"50px"}}>
          <div className="signup">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <div id="head"> Sign Up</div>
                <div id="cap">Philippines Real Estate - Sign Up to Buy</div>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  placeholder="Full Name "
                  className="form-control inp_text"
                  id="fullname"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.fullname && touched.fullname && errors.fullname}
                </p>


                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email "
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  // type="number"
                  type="number"
                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                  name="mob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mob}
                  placeholder="Contact Number "
                  className="form-control inp_text"
                  id="mob"
                />
                {/* If validation is not passed show errors */}
              
                <p className="error">
                  {errors.mob && touched.mob && errors.mob}
                </p>
                


                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <div className="form-row">
                  <div className="col">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password"
                      className="form-control"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      placeholder="Confirm Passowrd"
                      className="form-control"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                    </p>

                  </div>
                </div>



                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  placeholder="Address"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.address && touched.address && errors.address}
                </p>

                <input
                  type="text"
                  name="passport"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passport}
                  placeholder="Passport Number "
                  className="form-control inp_text"
                  id="passport"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.passport && touched.passport && errors.passport}
                </p>

                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.file}
                  // placeholder="Contact Number "
                  className="form-control inp_text"
                  id="file"
                />
                
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.file && touched.file && errors.file}
                </p>
                

               


                {/* <span>Agree to the terms & conditions</span> */} 


                {/* If validation is not passed show errors */}
                {/* Click on submit button to submit the form */}
                <button type="submit">Sign Up</button>
                <div><a href="contactus" id="bhelp">Need help?</a></div>
              </form>
              <br></br> <div className="fck">Already have the account? <Link to="/LogIn" id="blogin">Sign In</Link></div>
            </div>
          </div>
          </div>
        )}
        

      </Formik>
      

    </>
  );
}

export default Bsignup;