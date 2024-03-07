import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

const Update = () => {
    // const searchQuery = useSearchParams();
    // const [searchParams] = useSearchParams();
    // const slug = searchParams.get('slug');// 'name'

    // console.log(slug)

  let styleInput =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

  let styleLabel =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  let styleBtn =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[28rem] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#7e7ee0] dark:focus:ring-blue-800 mt-5 mb-2";


const [values,setValues] = useState([]);
const {id}=useParams()
const nevigate = useNavigate()

useEffect(()=>{
    
    axios
    .get('http://localhost:8001/api/studb/getstudentbyid/'+id)
    .then(data=> setValues(data.data))
    .catch(error=>console.log(error));
    
},[]);


const Formik = useFormik({
    initialValues:values[0],
    enableReinitialize: true,
    onSubmit: (values)=>{
        
        axios.put('http://localhost:8001/api/studb/updatestudentbyid/'+id,values)
        .then(response => {
            console.log(response)
            alert("Data Update Successfull..!")
            nevigate('/showdata')
        })
        .catch((err) => {
            console.log("Exception while Submitting the form", err);
        });

    }
});



  return (
    <>
      <div className="screen bg-[#4587b3] h-screen flex justify-center items-center">
        <div className="bg-[white] w-[32rem] rounded-xl ">
          <center>
            <h1 className="text-[2rem] pt-[1rem]">Update data</h1>
          </center>

          <form className="max-w-md mx-auto mt-5 mb-5" onSubmit={Formik.handleSubmit} >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className={`${styleInput}`}
                placeholder=" "
                value={Formik.values?.first_name}
                onChange={Formik.handleChange}
                
              />
              <label htmlFor="floating_email" className={`${styleLabel}`}>
                First Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className={`${styleInput}`}
                placeholder=" "
                value={Formik.values?.last_name}
                onChange={Formik.handleChange}
                
              />
              <label htmlFor="floating_email" className={`${styleLabel}`}>
                Last Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="floating_email" className="text-[gray]">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className={`${styleInput}`}
                placeholder="Gender"
                value={Formik.values?.gender}
                onChange={Formik.handleChange}
                
              >
                <option>~~ Select your gender ~~</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>



            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="dob"
                id="dob"
                className={`${styleInput}`}
                placeholder=" "
                value={Formik.values?.dob}
                onChange={Formik.handleChange}
              />
              <label htmlFor="floating_email" className={`${styleLabel}`}>
                Date of Birth
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="father_name"
                id="father_name"
                className={`${styleInput}`}
                placeholder=" "
                value={Formik.values?.father_name}
                onChange={Formik.handleChange}
              />
              <label htmlFor="floating_email" className={`${styleLabel}`}>
                Father's Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="phone_no"
                id="phone_no"
                className={`${styleInput}`}
                placeholder=" "
                value={Formik.values?.phone_no}
                onChange={Formik.handleChange}
              />
              <label htmlFor="floating_email" className={`${styleLabel}`}>
                Phone Number
              </label>
            </div>

            <button type="submit" className={`${styleBtn}`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Update
