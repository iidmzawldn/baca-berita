const CardSkeleton = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="skeleton w-[300px] h-[50px]"></div>
      <div className="grid md:grid-cols-4 md:auto-rows-[400px] gap-4 p-4">
      <div className="skeleton w-[650px] h-[400px]"></div>
      <div className=""></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton w-[650px] h-[400px]"></div>
      <div className=""></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
