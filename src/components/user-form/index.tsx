import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './user-form.css';

export function UserForm({ user, submitText, submitAction }: any) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: user || {},
    // https://react-hook-form.com/api/useform, see defaultValues: Record<string, any> = {}
  });

  const navigate = useNavigate();
  const back = () => navigate('/');

  return (
    <div>
      <form className="mt-4 max-w-md" onSubmit={handleSubmit(submitAction)}>
        {user && (
          <div className="field">
            <label htmlFor="id">User Id</label>
            <input type="text" name="id" value={user.id} disabled />
          </div>
        )}

        <div className="flex flex-col md:flex-row field">
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              {...register('first_name', { required: true })}
            />
            <span className="errors">
              {errors.first_name && 'First name is required'}
            </span>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" {...register('last_name', { required: true })} />
            <span className="errors">
              {errors.last_name && 'Last name is required'}
            </span>
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="errors">
            {errors.email &&
              errors.email.type === 'required' &&
              'Email is required'}
            {errors.email &&
              errors.email.type === 'pattern' &&
              'Provide a valid email address'}
          </span>
        </div>

        <div className="field">
          <label htmlFor="gender">Gender</label>
          <select {...register('gender', { required: true })}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <span className="errors">
            {errors.gender && 'Gender is required'}
          </span>
        </div>

        <div className="flex justify-between mt-8">
          <button
            className="text-white bg-teal-800 border-teal-800 shadow-md hover:text-teal-900 hover:bg-gray-100 hover:border-2 btn"
            type="submit"
          >
            {submitText}
          </button>
          <button
            className="text-gray-600 border-2 border-gray-600 shadow-md hover:text-gray-100 hover:bg-gray-600 btn"
            type="button"
            onClick={back}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
