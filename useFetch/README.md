## useFetch Hook

The useFetch hook is a custom React hook that allows you to fetch data from a provided URL. This hook uses React's useState and useEffect hooks to manage the state of the fetched data.

## Usage 

```
    import { useFetch } from "./useFetch";

    const MyComponent = () => {
        const { data, loading, error } = useFetch("https://api.example.com/data");

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
            <div>
            <p>Data: {data}</p>
            </div>
        );
    };
```