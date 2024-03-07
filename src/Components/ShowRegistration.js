import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowRegistration = () => {



const [values,setValues] = useState([]);

useEffect(()=>{

    axios
    .get('http://localhost:8001/api/studb/getstudents')
    .then(data=> setValues(data.data))
    .catch(error=>console.log(error));
    
},[]);


const deletData = (id)=>{
   
async function DelData(){
    await axios.delete('http://localhost:8001/api/studb/deletestudentbyid/'+id);
    alert("Do you want to delet id no: "+id);
    window.location.reload();
}

DelData();

}


  return (
    <>
     
     <div className=" bg-[#4587b3] h-screen flex justify-center items-center">

        <div className="table">

            
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 mb-20">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Registered Students.
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of All the Students who registered are shown here and you can also perform various operations on them.</p>
                    </caption>

                    <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S no
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date OF Birth
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fathers Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone No.
                            </th>
                            
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                        {values.map((stu,index)=>{
                            return (

                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                        <th scope="row" className="px-6 py-4" key={index}>
                                            {index+1}
                                        </th>
                                        
                                        <th scope="row" className="px-6 py-4">
                                            {stu.first_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {stu.last_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {stu.gender}
                                        </td>
                                        <td className="px-6 py-4">
                                            {stu.dob}
                                        </td>
                                        <td className="px-6 py-4">
                                           {stu.father_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {stu.phone_no}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link to={`/updatedata/${stu.id}${"aF45F=bGUcfy-gbh:"}`} className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link> 

                                            <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deletData(stu.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>

                            )})} 

                    
                </table>
            </div>


        </div>

     </div>
    </>
  )
}

export default ShowRegistration
