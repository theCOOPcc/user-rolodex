import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import * as Fields from './projectFields'
import * as Inputs from '../../components/inputs'
import './styles.css'

const ProjectForm = () => {
  // TODO: This is eventually going to dynamically fill the initialValues with the names of the fields and an empty string that gets taken from the inputs.js
  // function formValues() {
  //   let arr = []
  //   Fields.projectFields.forEach((field) => {
  //     const object = {}
  //     Object.defineProperty(object, `${field.name}`, {
  //       value: ' ',
  //       writable: true,
  //     })
  //     arr.push(
  //       object
  //       // (`${field.name}: ""`)
  //     )
  //   })
  //   return arr
  // }
  // const initValues = formValues()

  return (
    <>
      <h1>Create a Project</h1>
      <Formik
        initialValues={{
          name: '',
          description: '',
          objectives: '',
          targetAudiences: '',
          successCriteria: '',
          implementations: '',
          scopes: '',
          scopeTiming: '',
          Timings: '',
          engineeringSkills: '',
          engineeringTechnologies: '',
          designSkills: '',
          designAbilities: '',
          dependencies: '',
          risks: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
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
            label="Project Name"
            name="name"
            type="text"
            placeholder="User Rolodex"
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
            I am ready to create my new project.
          </Inputs.MyCheckBox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default ProjectForm
