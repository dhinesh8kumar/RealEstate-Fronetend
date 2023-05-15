import "../styles/Addprop.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";
//import {Link} from "react-router-dom";

import axios from 'axios';



const purpose = [
  { label: 'Sell', value: 'sell' },
  { label: 'Lease', value: 'Lease' },
  { label: 'CD Units', value: 'cdunits' },
];
export default function Addprop(){

  const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

  
  const schema = Yup.object().shape({

    propname: Yup.string()
      .required("Please Enter your Property Name"),

    reg: Yup.string()
      .required("Registration Number is required")
      .min(11,"Invalid Registration Number")
      .max(11, "Invalid Registration Number"),

    ownername: Yup.string()
      .required("Please enter your Name"),

    mob: Yup.string()
      .required("Enter your Phone number")
      .min(10, "Enter a Valid Phone number")
      .max(11, "Enter a Valid Phone number"),

    sellerid: Yup.string()
      .required("Enter your ID"),

    address: Yup.string()
      .required("Address is required"),

    value: Yup.string()
    .required("Value of the Property is required"),

    area: Yup.string()
    .required("Area of the Property is required"),

    desc:Yup.string()
    .required("Please describe your Property"),

    purpose:Yup.string()
    .required("Please select purpose"),

    image:Yup.string().matches(URL, 'Enter your profile picture URL').required("Enter your profile picture URL"),

    pdoc: Yup.string()
    .required("Property document is required")
  
  });

  const exceptThisSymbols = ["e", "E", "-", "."];

  return (
    <>
    <Formik
    validationSchema={schema}
    initialValues={{ 
      propname: "", 
      reg: "", 
      ownername: "", 
      mob:"",
      sellerid:"",
      address: "", 
      value:"",
      area:"",
      desc:"",
      purpose:"",
      image:"",
      pdoc:""
    }}
    onSubmit={(values) => {
      axios.post("http://localhost:9091/AddProperty",{values}).then(()=>{
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
          <div className="bgaddprop">
          <div className="signup">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <div id="head"> Property Listing</div>
                <div id="cap">Philippines Real Estate - Listout your property</div>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="text"
                  name="propname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.propname}
                  placeholder="Property Name "
                  className="form-control inp_text"
                  id="propname"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.propname && touched.propname && errors.propname}
                </p>


                <input
                  type="text"
                  name="reg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reg}
                  placeholder="Property Registration Number "
                  className="form-control inp_text"
                  id="reg"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.reg && touched.reg && errors.reg}
                </p>

                <input
                  type="text"
                  name="ownername"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ownername}
                  placeholder="Owner Name "
                  className="form-control inp_text"
                  id="ownername"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.ownername && touched.ownername && errors.ownername}
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
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.mob && touched.mob && errors.mob}
                </p>

                <input
                  type="text"
                  name="sellerid"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sellerid}
                  // disabled={true}
                  placeholder="Seller ID "
                  className="form-control inp_text"
                  id="id"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.sellerid && touched.sellerid && errors.sellerid}
                </p>


                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  placeholder="Property Address "
                  className="form-control inp_text"
                  id="address"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.address && touched.address && errors.address}
                </p>




                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="value"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.value}
                      placeholder="Price in $"
                      className="form-control"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.value && touched.value && errors.value}
                    </p>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="area"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.area}
                      placeholder="area in Sq.fts"
                      className="form-control"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.area && touched.area && errors.area}
                    </p>

                  </div>
                </div>

                <textarea 
                  style={{backgroundColor: "#f2f2f2"}}
                  type="textarea"
                  name="desc"
                  placeholder="Desciption"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.desc}
                  className="form-control inp_text texta"
                  id="desc">
                    </textarea>

                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.desc && touched.desc && errors.desc}
                </p>

                <label htmlFor="purpose" style={{float:"left",marginLeft:"15px", fontSize:"15px"}}>Purpose</label>
        <Field 
        style={{backgroundColor: "#f2f2f2"}}
        name="purpose" as="select"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.purpose}
        
        className="form-control inp_text"
        id="purpose">
          {purpose.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Field>
<br></br>

                  <input
                    type="text"
                    name="image"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.image}
                    placeholder="Property Image URL "
                    className="form-control inp_text"
                    id="fullname"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.image && touched.image && errors.image}
                  </p>

                <label style={{float:"left", marginLeft:"15px"}}>Property Document</label>
                <input
                  type="file"
                  name="pdoc"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pdoc}
                  // placeholder="Contact Number "
                  className="form-control inp_text"
                  id="pdoc"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.pdoc && touched.pdoc && errors.pdoc}
                </p>

              


                {/* If validation is not passed show errors */}
                {/* Click on submit button to submit the form */}
                <button type="submit">Sign Up</button>
                <div><a href="contactus" id="help">Need help?</a></div>
              </form>
            </div>
          </div>
          </div>
        )}

    </Formik>

    </>
  )
}