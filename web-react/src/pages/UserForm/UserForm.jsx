import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import * as Fields from './userFields'
import * as Inputs from '../../components/inputs'

const UserForm = () => {
  return (
    <>
      <h1>New User</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          roles: '',
          engineeringSkills: '',
          designAbilities: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'Check the box to confirm Project creation.'),
          // jobType: Yup.string()
          //     .oneOf(
          //         ['designer', 'development', 'product', 'other'],
          //         'Invalid job type'
          //     )
          //     .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form>
          <Inputs.MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Cory"
          />

          <Inputs.MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Spicer"
          />

          {Fields.projectFields.map((f) => (
            <Inputs.MySelect key={f.name} label={f.name} name={f.value}>
              <option value=""></option>
              {f.selections.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Inputs.MySelect>
          ))}

          <Inputs.MyCheckBox name="acceptedTerms">
            I am ready to sign up.
          </Inputs.MyCheckBox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default UserForm
