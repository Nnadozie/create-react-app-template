import { useForm } from 'react-hook-form';
import Joi from 'joi';

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: { [key: string]: any }) => console.log(data);

  const schema = Joi.object({
    example: Joi.string(),
    exampleRequired: Joi.required(),
  });

  console.log(watch('example'));
  return (
    <>
      <p>React Hook Form</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('example')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default ReactHookForm;
