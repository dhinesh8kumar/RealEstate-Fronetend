import "../styles/login.css";

import { Formik } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
const currencies = [
  {
    value: "buyer",
    label: "Buyer",
  },
  {
    value: "attorney",
    label: "Attorney",
  },
  {
    value: "seller",
    label: "Seller",
  },
];
function Login() {
  // creating schema
  const navigate = useNavigate();
  if (localStorage.getItem("authToken") === "buyer") {
    navigate("/Properties");
  } else if (localStorage.getItem("authToken") === "seller") {
    navigate("/SDashboard/List");
  }
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string().required("Password is a required field"),

    type: Yup.string().required("Login Type is required"),
  });
  const x = localStorage.getItem("authToken");
  if (x === "buyer") {
    navigate("/Properties");
  } else if (x === "seller") {
    navigate("/SDashboard/List");
  }

  return (
    <>
      <Navbar />
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "", type: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          axios
            .post("http://localhost:9091/login", { values })
            .then((response) => {
              // window.location.reload(false);
              // Login successful, redirect to profile page
              if (values.type === "buyer") {
                if (response.data.verify === 1) {
                  navigate("/Properties");
                  localStorage.setItem("data", response.data.id);
                  localStorage.setItem("authToken", values.type);
                  localStorage.setItem("Name", response.data.Name);
                } else if (response.data.verify === -1) {
                  alert(
                    "Your verification is still in process. Try Logging in Later"
                  );
                } else if (response.data.verify === 0) {
                  alert("Your profile verification has been rejected");
                }
              } else if (values.type === "seller") {
                if (response.data.verify === 1) {
                  localStorage.setItem("data", response.data.id);
                  localStorage.setItem("authToken", values.type);
                  localStorage.setItem("Name", response.data.Name);
                  navigate("/SDashboard/List");
                } else if (response.data.verify === -1) {
                  alert(
                    "Your verification is still in process. Try Logging in Later"
                  );
                } else if (response.data.verify === 0) {
                  alert("Your profile verification has been rejected");
                }
              } else if (values.type === "attorney") {
                if (response.data.verify === 1) {
                  alert("Your profile has been approved and has been listed");
                } else if (response.data.verify === -1) {
                  alert(
                    "Your verification is still in process. Try Logging in Later"
                  );
                } else if (response.data.verify === 0) {
                  alert("Your profile verification has been rejected");
                }
              }
            })
            .catch((error) => {
              if (error.response && error.response.status === 404) {
                // Invalid credentials
                alert("Invalid username or password");
              }
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
          <div className="bgl">
            <div className="login">
              <div className="form1">
                {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                <form noValidate onSubmit={handleSubmit}>
                  <div id="head1"> Login</div>
                  <div id="cap">Philippines Real Estate</div>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

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
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
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

                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Login Type"
                    helperText="Please select your Login type"
                    name="type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                    style={{ width: "100%" }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.type && touched.type && errors.type}
                  </p>

                  {/* Click on submit button to submit the form */}
                  <button type="submit">Login</button>
                  <div>
                    <a href="contactus" id="help">
                      Need help?
                    </a>
                  </div>
                </form>
                <br></br>{" "}
                <div id="fck">
                  Don't have an account?{" "}
                  <a href="signup" id="signup">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
export default Login;
