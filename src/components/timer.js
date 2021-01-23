import React, { useEffect, useState } from 'react';

const TimeoutExample = () => {
  const [count, setCount] = useState(0);
  const [countInTimeout, setCountInTimeout] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCountInTimeout(count); // count is 0 here
    }, 3000);
    setCount(5); // Update count to be 5 after timeout is scheduled
  }, []);

  return (
    <div>
      Count: {count}
      <br />
      setTimeout Count: {countInTimeout}
    </div>
  );
};

export default TimeoutExample;
