'use client'
import { useForm } from 'react-hook-form'

function RegisterPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          {...register('username', {
            required: true,
            message: 'This field is required',
          })}
        />
        <input
          type='email'
          {...register('email', {
            required: true,
            message: 'This field is required',
          })}
        />
        <input
          type='password'
          {...register('password', {
            required: true,
            message: 'This field is required',
          })}
        />
        <input
          type='confirmPassword'
          {...register('confirmPassword', {
            required: true,
            message: 'This field is required',
          })}
        />

        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
