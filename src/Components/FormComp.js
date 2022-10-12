import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const ValidationSchema = yup.object().shape({
    firstName: yup.string().required("*Campo requerido").min(2, "*Mínimo 2 caracteres"),
    lastName: yup.string().required("*Campo requerido").min(2, "*Mínimo 2 caracteres"),
    email: yup
    .string()
    .required("*Campo requerido")
    .email("*Email inválido"),
    phoneNumber: yup.string().required("*Campo requerido")
});

export const FormComp = ({ onSubmit, onCancel }) => {
  return (
    <Formik initialValues={{firstName: "", lastName: "", email: "", phoneNumber: ""}}
    validationSchema={ValidationSchema}
    onSubmit={onSubmit}>
      {
        ({errors, touched}) => (
          <Form className="form">
            <div>
              <Field name="firstName" placeholder="Nombre" className="formIn"/>
              {errors.firstName && touched.firstName ? (
             <div className="formErr">{errors.firstName}</div>
           ) : null}
            </div>
            <div>
              <Field name="lastName" placeholder="Apellido" className="formIn"/>
              {errors.lastName && touched.lastName ? (
             <div className="formErr">{errors.lastName}</div>
           ) : null}
            </div>
            <div>
              <Field name="email" placeholder="Email" className="formIn" />
              {errors.email && touched.email ? (
             <div className="formErr">{errors.email}</div>
           ) : null}
            </div>
            <div>
              <Field name="phoneNumber" placeholder="Número de teléfono" className="formIn" />
              {errors.phoneNumber && touched.phoneNumber ? (
             <div className="formErr">{errors.phoneNumber}</div>
           ) : null}
            </div>

            <div className="formCont">
              <button className="formBtt" onClick={onCancel} type="button">
                Cancelar
              </button>
              <button
                className="formBtt"
                type="submit"
              >
                Comprar
              </button>
            </div>
          </Form>
        )
      }
    </Formik>
  );
};