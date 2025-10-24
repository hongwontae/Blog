function Test2(){

     return (
    <div className="min-h-screen font-pretendard bg-gray-100 flex flex-col items-center justify-center p-6 space-y-10 rounded-2xl">
      {/* 1️⃣ FLEX 예제 */}
      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Flex Layout</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[150px] bg-blue-200 p-4 rounded-lg text-center">
            Box 1
          </div>
          <div className="flex-1 min-w-[150px] bg-blue-300 p-4 rounded-lg text-center">
            Box 2
          </div>
          <div className="flex-1 min-w-[150px] bg-blue-400 p-4 rounded-lg text-center">
            Box 3
          </div>
        </div>
      </section>

      {/* 2️⃣ GRID 예제 */}
      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Grid Layout</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-pink-200 p-4 rounded-lg text-center">Item 1</div>
          <div className="bg-pink-300 p-4 rounded-lg text-center">Item 2</div>
          <div className="bg-pink-400 p-4 rounded-lg text-center">Item 3</div>
          <div className="bg-pink-500 p-4 rounded-lg text-center">Item 4</div>
          <div className="bg-pink-600 p-4 rounded-lg text-center">Item 5</div>
          <div className="bg-pink-700 p-4 rounded-lg text-center">Item 6</div>
        </div>
      </section>

      {/* 3️⃣ GRID 고급 (fr, minmax, auto-fit, auto-fill) */}
      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Grid (fr / minmax)</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-green-300 p-4 rounded-lg text-center font-medium"
            >
              Card {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ 단위 실험 */}
      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Responsive Units</h2>
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
          <div className="bg-yellow-200 w-[300px] sm:w-[50%] md:w-[30vw] p-[clamp(0.5rem, 2vw, 2rem)] rounded-lg text-center">
            <p>width: clamp(300px → 30vw)</p>
          </div>
          <div className="bg-yellow-300 w-[min(80%,600px)] p-[2vh] rounded-lg text-center">
            <p>width: min(80%, 600px)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test2;