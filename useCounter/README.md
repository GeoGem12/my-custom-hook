## useCounter Hook

The useCounter hook is a custom React hook that allows you to handle a counter. This hook uses React's useState hook to maintain the state of the counter.

## Use

```
    import { useCounter } from "./useCounter";

    const MyComponent = () => {
        const { counter, increment, decrement } = useCounter(10);

        return (
            <div>
                <p>Contador: {counter}</p>
                <button onClick={increment}>Incrementar</button>
                <button onClick={decrement}>Decrementar</button>
                <button onClick={reset}>Reset</button>
            </div>
        );
    };
```