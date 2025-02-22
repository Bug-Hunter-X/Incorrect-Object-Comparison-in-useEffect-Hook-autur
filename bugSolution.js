```javascript
function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Compare objects using JSON.stringify
    if (JSON.stringify(props.someObject) !== JSON.stringify(prevProps.someObject)) {
      // ...
    }
  }, [props.someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```