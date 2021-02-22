import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import * as Fields from './mentorFields'
import * as Inputs from '../../components/inputs'

const MentorForm = () => {
  return (
    <>
      <h1>New Mentor</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          roles: '',
          engineeringSkills: '',
          designSkills: '',
          designAbilities: '',
          availability: '',
          participation: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'Check the box to confirm Project creation.'),
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

          <Inputs.MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="cory@spicer.com"
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

export default MentorForm
