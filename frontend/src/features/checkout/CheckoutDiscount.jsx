import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import Button from "../../ui/Button";

function CheckoutDiscount(){

    return (
        <Formik
            initialValues={{
                discount: '',
            }}
            validationSchema={Yup.object({
                discount: Yup.string().required('Required'),
            })}
            onSubmit={(values)=> console.log(values)}
        
        >
            <Form className="border-b border-[#c2c2c2] ">
                <div className="grid grid-cols-[0.8fr_0.2fr] gap-4 mb-10">
                <div>
                <Field type="text" name='discount' className="bg-[#fbf9f2] w-full h-12 p-2 border border-[#d5d3cd] rounded-md" placeholder="Discount code or gift code" />
                <ErrorMessage name="discount" />
                </div>
                <button type="submit" className="h-12 p-2 bg-black text-white rounded-md">Apply</button>
                </div>
            </Form>
        </Formik>
    )

}

export default CheckoutDiscount;