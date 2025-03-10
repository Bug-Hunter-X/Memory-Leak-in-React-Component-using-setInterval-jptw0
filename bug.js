```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to use setInterval
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    //Missing cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```