## useForm Hook

The useForm is a custom React hook that helps manage form state. It is designed to simplify the process of using forms in your React application.

## Use

```
import useForm from './useForm';

function MyFormComponent() {
  const [values, handleInputChange, reset] = useForm({ name: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={values.name} onChange={handleInputChange} />
      <input name="email" value={values.email} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```