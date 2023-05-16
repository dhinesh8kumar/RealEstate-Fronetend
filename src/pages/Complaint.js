// import "../style/Complaint.css";
import "../styles/Complaint.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Newnavbar";
import axios from 'axios';



function Complaint(){
  const name = localStorage.getItem("Name");
  const x= localStorage.getItem("data");
  const schema = Yup.object().shape({

    fullname: Yup.string()
      .required("Please Enter your Full Name"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),

    id: Yup.string()
    .required("Enter your ID"),
    issueid: Yup.string()
    .required("This field is required"),

    subject: Yup.string()
    .required("Enter the subject"),

    descrp: Yup.string()
    .required("Describe your issue"),
    
  });
  return (
    <>
       <Navbar/>  
    <Formik
     validationSchema={schema}
     initialValues={{ 
       fullname: "", 
       email: "", 
       id: x,
       issueid: "",
       subject: "",
       descrp:""
     }}
     onSubmit={(values) => {
      axios.post("https://realestate-backend-b20k.onrender.com/complaint",{values}).then(()=>{
        console.log("success");
        window.location.reload(false);
        alert("Your data sent successfully for the review.");
        });
     }}>

{({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="bgcomplaint">
          <div className="signup" style={{paddingTop:"100px"}}>
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <div id="head"> Complaint Form</div>
                <div id="cap">Philippines Real Estate - Raise your request</div>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="text"
                  // disabled={true}
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
                  type="text"
                  name="id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.id}
                  disabled={true}
                  placeholder="Your ID "
                  className="form-control inp_text"
                  id="id"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.id && touched.id && errors.id}
                </p>

                <input
                  type="text"
                  name="issueid"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.issueid}
                  placeholder=" Attorney ID / Property ID / Payment ID"
                  className="form-control inp_text"
                  id="id"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.issueid && touched.issueid && errors.issueid}
                </p>



                <input
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  placeholder="Subject "
                  className="form-control inp_text"
                  id="subject"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.subject && touched.subject && errors.subject}
                </p>

                {/* <input
                  type="textarea"
                  name="desc"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.desc}
                  placeholder="Description "
                  className="form-control inp_text"
                  id="desc"
                /> */}
                {/* <label id="label">Description</label> */}
                <textarea 
                  style={{backgroundColor: "#f2f2f2",marginBottom:"15px"}}
                  type="textarea"
                  name="descrp"
                  placeholder="Desciption"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.descrp}
                  className="form-control inp_text texta"
                  id="desc">
                    </textarea>
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.descrp && touched.descrp && errors.descrp}
                </p>
                
                <button type="submit">Submit</button>
                <div><a href="contactus" id="help">Need help?</a></div>
              </form>
            </div>
          </div>
          </div>
        )}


    </Formik>

    </>
  );
}

export default Complaint;