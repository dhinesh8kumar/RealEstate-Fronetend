import "../styles/Addprop.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";
//import {Link} from "react-router-dom";


const purpose = [
  { label: 'Sell', value: 'sell' },
  { label: 'Lease', value: 'Lease' },
  { label: 'CD Units', value: 'cdunits' },
];
export default function Addprop(){

  
  const schema = Yup.object().shape({

    propname: Yup.string()
      .required("Please Enter your Property Name"),

    reg: Yup.string()
      .required("Registration Number is required")
      .min(11,"Invalid Registration Number")
      .max(11, "Invalid Registration Number"),

    ownername: Yup.string()
      .required("Please enter your Name"),

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
    
    pimage: Yup.string()
      .required("Please upload image of the Property"),

    pdoc: Yup.string()
    .required("Property document is required")
  
  });


  return (
    <>
    <Formik
    validationSchema={schema}
    initialValues={{ 
      propname: "", 
      reg: "", 
      ownername: "", 
      address: "", 
      value:"",
      area:"",
      desc:"",
      purpose:"",
      pimage:"",
      pdoc:""
    }}
    onSubmit={(values) => {
      // Alert the input values of the form that we filled
      alert(JSON.stringify(values));
      window.location.reload();
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
                <label style={{float:"left", marginLeft:"15px",fontSize:"15px"}}>Property Images</label>
                <input
                  type="file"
                  name="pimage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pimage}
                  // placeholder="Contact Number "
                  className="form-control inp_text"
                  id="pimage"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.pimage && touched.pimage && errors.pimage}
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