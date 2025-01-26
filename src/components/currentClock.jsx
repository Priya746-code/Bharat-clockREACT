
function Clock() { 
  let time = new Date();
  return (
    <p className="fs-1">
      This is the Current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
}

export default Clock;
