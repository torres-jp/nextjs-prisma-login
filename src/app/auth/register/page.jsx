'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert('Password does not')
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    })

    if (res.ok) {
      router.push('/auth/login')
    }
    console.log(errors)
  })

  return (
    <div className='h-screen flex items-center justify-center'>
      <form onSubmit={onSubmit} className='w-1/4'>
        <h1 className='text-slate-200 font-bold text-4xl mb-4'>Register</h1>

        <label htmlFor='username' className='text-slate-500 mb-2 block text-sm'>
          Username
        </label>
        <input
          type='text'
          {...register('username', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          placeholder='user name'
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
        />
        {errors.username && (
          <span className='text-red-500 text-sm'>
            {errors.username.message}
          </span>
        )}

        <label htmlFor='email' className='text-slate-500 mb-2 block text-sm'>
          Email
        </label>
        <input
          type='email'
          {...register('email', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          placeholder='example@email.com'
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
        />
        {errors.email && (
          <span className='text-red-500 text-sm'>{errors.email.message}</span>
        )}

        <label htmlFor='password' className='text-slate-500 mb-2 block text-sm'>
          Password
        </label>
        <input
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          placeholder='********'
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
        />
        {errors.password && (
          <span className='text-red-500 text-sm'>
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor='confirmPassword'
          className='text-slate-500 mb-2 block text-sm'
        >
          Confirm Password
        </label>
        <input
          type='password'
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          placeholder='********'
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
        />
        {errors.confirmPassword && (
          <span className='text-red-500 text-sm'>
            {errors.confirmPassword.message}
          </span>
        )}

        <button className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 mt-2'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
