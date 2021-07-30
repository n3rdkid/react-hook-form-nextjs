Test out the following: 

- [ ] Need to be able to access value anywhere  (formik.values.[name])
    watch("Name")
    getValues("yourDetails") // Doesn't subscribe to changes or cause re-render
- [ ] Handle Blur events (So that we can show errors only after form itmes have been touched )
- [ ] Access to errors 
      - errors.[field_name] // single error
      - errors.[field_name].types.[validation_name] // single field multiple validation
- [ ] Validation with yup
- [ ] Set errors to form fields (formik.setFieldError("))
    - setError()
- [ ] Manual form validation
    - formik.validateAt() => trigger("FIELD_NAME)
    - formik.validateForm() => trigger();
