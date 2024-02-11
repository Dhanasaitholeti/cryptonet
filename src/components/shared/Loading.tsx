const Loading = () => {
  const arr20 = [];
  for (let i = 0; i < 20; i++) {
    arr20.push(i); // Or any other initial value you want
  }

  return (
    <div className="grid grid-cols-4 w-full mx-auto justify-center items-center px-16 py-4 ">
      {arr20.map((each) => (
        <div
          className="max-w-sm rounded-lg shadow-md w-full min-h-36 bg-gray-700 animate-pulse m-4 p-2 "
          key={each}
        ></div>
      ))}
    </div>
  );
};

export default Loading;
