import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { MdArrowDropDown } from "react-icons/md";

import CheckoutProgress from "./CheckoutProgress";
import { getShippingRate } from "../../services/apiShippingRates";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";


const initialValues = {
    email:  '',
    country: '',
    firstName:'',
    lastName:'',
    address: '',
    apartment: '',
    city:'',
    state:'',
    phone: '',
    pinCode: ''
};

function CheckoutInformation({setShippingRate}){

  const [value,setValue] = useLocalStorage("user",initialValues)

    const navigate = useNavigate();

  

    return (
        <Formik
            initialValues={
                value ? value : initialValues
            }
            validationSchema={Yup.object({
                firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              country: Yup.string().required('Required'),
              apartment: Yup.string(),
              city: Yup.string().required('Required'),
              state: Yup.string().required('Required'),
              phone: Yup.string().required('Required'),
              pinCode: Yup.string().required('Required'),
              address: Yup.string().required('Required'),
                
            })} 

            onSubmit={async(values)=> {
                const rates = await getShippingRate(values.pinCode);
                setShippingRate(rates.rate);
                setValue(values);
                navigate("/checkout?step=shipping_method");
                
                
                
            
            
            }

            }
        
        >
            <Form>
                <div className="mb-10">
                    <div className="mb-4 flex justify-between items-center">
                        <h2 className="text-lg">Contact</h2>
                        <p>Have an account? Log in</p>
                    </div>     
                    <Field name="email" type="text" placeholder="Email" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254]" />
                    <span className="text-red-500 text-sm"><ErrorMessage name="email" /></span>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg mb-4">Shipping address</h2>
                    <div className="flex flex-col gap-4 relative">
                          
                    <Field name="country" as="select" placeholder="Country/region" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md placeholder:p-2 text-sm placeholder:text-[#666254] appearance-none">
                        <option value='india'>India</option>
                        <option value='usa'>Usa</option>
                        <option value='uk'>Uk</option>
                     </Field>   
                     <span className="text-red-500 text-sm"><ErrorMessage name="country" /></span>
                    <MdArrowDropDown size={25} className="absolute top-3 right-2" color="#686868"/>
                
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Field name="firstName" type="text" placeholder="First Name" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254]  " />
                        <span className="text-red-500 text-sm"><ErrorMessage name="firstName" /></span>
                    </div>
                    <div>
                        <Field name="lastName" type="text" placeholder="Last Name" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254] "/>
                        <span className="text-red-500 text-sm"><ErrorMessage name="lastName" /></span>
                    </div>
                </div>
                <div>
                    <Field name="address" type="text" placeholder="Address" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254] "/>
                    <span className="text-red-500 text-sm"><ErrorMessage name="address" /></span>
                </div>
                <div>
                    <Field name="apartment" type="text" placeholder="Apartment,suite,etc.(optional)" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254] "/>
                    <span className="text-red-500 text-sm"><ErrorMessage name="apartment" /></span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                <div>
                    <Field name="city" type="text" placeholder="City" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254] "/>
                    <span className="text-red-500 text-sm"><ErrorMessage name="city" /></span>
                </div>
                <div className="relative">
                    <Field name="state" as="select" placeholder="State" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254] appearance-none">
                        <option value="karnataka">Karnataka</option>
                        <option value="up">Up</option>
                        <option value="west bengal">West Bengal</option>
                    </Field>
                    <span className="text-red-500 text-sm"><ErrorMessage name="state" /></span>
                    <MdArrowDropDown size={25} className="absolute top-3 right-2" color="#686868"/>
                </div>
                <div>
                    <Field name="pinCode" type="text" placeholder="PIN code" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254] "/>
                    <span className="text-red-500 text-sm"><ErrorMessage name="pinCode" /></span>
                </div>

                </div>
                <div>
                    <Field name="phone" type="text" placeholder="Phone" className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md text-sm placeholder:text-[#666254] "/>
                    <span className="text-red-500 text-sm"><ErrorMessage name="phone" /></span>
                </div>
                </div>
                </div>
               <CheckoutProgress checkoutButton="Continue to shipping" />
            </Form>

        </Formik>
    )

}


export default CheckoutInformation;