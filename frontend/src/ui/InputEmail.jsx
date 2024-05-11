import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { MdArrowRightAlt } from "react-icons/md";

const initialValues = {
    email : ""
}

function InputEmail(){

   

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Required'),
        })}
            onSubmit={(values,actions)=> {
                console.log(values);
                actions.resetForm({
                    values: {
                        email: ''
                        
                    }
                });
                
            }}
        
        >
            <Form>
                <div className="flex justify-between border-b border-b-black">
                    <div className="mb-2">
                        <Field name="email" type="text" placeholder="Email address" className="text-sm placeholder:text-black border-0 bg-[#fbf8f1] hover:outline-none active:outline-none" />
                        <span className="text-red-500 text-sm"><ErrorMessage name="email" /></span>
                    </div>
                    <button type="submit" className="mb-2">
                        <MdArrowRightAlt size={25} />
                    </button>
                </div>
                   
           
            </Form>
        </Formik>
    )

}


export default InputEmail;