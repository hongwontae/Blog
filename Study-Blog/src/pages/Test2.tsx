function Test2() {
  return (
    <>
      <div
        className=" gap-2 text-white border-[1px] border-white h-[19rem]
       grid grid-cols-[200px_200px_200px] grid-rows-[50px_50px_50px_50px] justify-end"
      >
        <div className="border-[1px]">1</div>
        <div className="border-[1px]">2</div>
        <div className="border-[1px]">3</div>
        <div className="border-[1px]">4</div>
        <div className="border-[1px]">5</div>
        <div className="border-[1px]">6</div>
        <div className="border-[1px]">7</div>
        <div className="border-[1px]">8</div>
        <div className="border-[1px]">9</div>
        <div className="border-[1px]">10</div>
      </div>
      <div className="flex flex-col border-[1px] border-white text-white mt-10 mb-10">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-white text-center mb-10">
        <div className="bg-blue-500 col-span-2 h-12">1</div>
        <div className="bg-green-500 h-12">2</div>
        <div className="bg-red-500 h-12">3</div>
        <div className="bg-yellow-500 h-12">4</div>
        <div className="bg-pink-500 h-12">5</div>
      </div>

      <div className="grid grid-cols-3 grid-flow-row-dense gap-2 text-white text-center">
  <div className="bg-blue-500 col-span-2 h-12">1</div>
  <div className="bg-green-500 h-12">2</div>
  <div className="bg-red-500 col-span-2 h-12">3</div>
  <div className="bg-yellow-500 h-12">4</div>
  <div className="bg-pink-500 h-12">5</div>
</div>
    </>
  );
}

export default Test2;
