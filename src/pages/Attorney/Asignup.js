import "../../styles/Asignup.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';
import { padding, style } from "@mui/system";


function Asignup() {

  const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  const schema = Yup.object().shape({
    fullname: Yup.string().required("Please Enter your Full Name"),

    email: Yup.string().required("Email is required").email("Invalid email"),

    mob: Yup.string()
      .required("Enter your Phone number")
      .min(10, "Enter a Valid Phone number")
      .max(11, "Enter a Valid Phone number"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "password length must be 8"),
    confirmPassword: Yup.string()
      .required("Confirm Your Password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

    address: Yup.string().required("Address is required"),

    passport: Yup.string()
      .required("Passport number is required")
      .min(12, "Invalid Passport number")
      .max(12, "Invalid Passport number"),

    pfile: Yup.string().required("Please upload your Passport"),

    lfile: Yup.string().required("Please upload your certificate"),

    profile: Yup.string().matches(URL, 'Enter your profile picture URL').required("Enter your profile picture URL")
  });
  const exceptThisSymbols = ["e", "E", "-", "."];
  return (
    <>
      <Navbar />
        <Formik
          validationSchema={schema}
          initialValues={{
            fullname: "",
            email: "",
            mob: "",
            password: "",
            confirmPassword: "",
            address: "",
            passport: "",
            pfile: "",
            lfile: "",
            profile: "",
          }}
          onSubmit={(values) => {
            axios.post("https://realestate-backend-b20k.onrender.com/Asignup", { values }).then(() => {
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
            <div className="bga" style={{ left: "0px", padding: "50px" }}>
              <div className="signup">
                <div className="form">

                  <form noValidate onSubmit={handleSubmit}>
                    <div id="head"> Sign Up</div>
                    <div id="cap">Philippines Real Estate - Attorney</div>
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
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>

                    <input
                      type="number"
                      onKeyDown={(e) =>
                        exceptThisSymbols.includes(e.key) && e.preventDefault()
                      }
                      name="mob"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mob}
                      placeholder="Contact Number "
                      className="form-control inp_text"
                      id="mob"
                    />
                    <p className="error">
                      {errors.mob && touched.mob && errors.mob}
                    </p>
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
                          //value={values.confirmPassword}
                          placeholder="Confirm Passowrd"
                          className="form-control"
                        />
                        <p className="error">
                          {errors.confirmPassword &&
                            touched.confirmPassword &&
                            errors.confirmPassword}
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
                    <p className="error">
                      {errors.address && touched.address && errors.address}
                    </p>

                    <input
                      type="text"
                      name="passport"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.passport}
                      style={{
                        marginBottom: "10px",
                        padding: "10px 15px 10px 15px",
                      }}
                      placeholder="Passport Number "
                      className="form-control inp_text"
                      id="passport"
                    />
                    <p className="error">
                      {errors.passport && touched.passport && errors.passport}
                    </p>

                    <div className="pass">Passport</div>
                    <input
                      type="file"
                      name="pfile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pfile}
                      style={{
                        marginBottom: "8px",
                        padding: "10px 15px 10px 15px",
                      }}
                      className="file_edit"
                      id="pfile"
                    />

                    <p className="error">
                      {errors.pfile && touched.pfile && errors.pfile}
                    </p>

                    <div className="pass">Attorney Certificate</div>
                    <input
                      type="file"
                      name="lfile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lfile}
                      className="file_edit"
                      id="lfile"
                    />

                    <p className="error">
                      {errors.lfile && touched.lfile && errors.lfile}
                    </p>

                    <input
                      type="text"
                      name="profile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.profile}
                      placeholder="Profile URL "
                      className="form-control inp_text"
                      id="fullname"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.profile && touched.profile && errors.profile}
                    </p>

                  
                    <button type="submit">Sign Up</button>
                    <div>
                    <Link to="/help" id="help">Need Help?</Link>
                  </div>
                  </form>
                  <br></br>{" "}
                  <div className="fck">
                    Already have the account?{" "}
                    <Link to="/LogIn" id="alogin">Sign In</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
    </>
  );
}

export default Asignup;
