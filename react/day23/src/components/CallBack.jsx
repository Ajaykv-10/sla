import { useState, useCallback } from "react";

function CallBack() {
  const [count, setCount] = useState(0);
  const [show,setShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
    setShow(!show);
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
<p>{show?"Show":"Hide"}</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}
export default CallBack;