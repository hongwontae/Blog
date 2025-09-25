import { motion } from "framer-motion";
import { useCounterStore } from "../zustand-store/store";

function Test() {
  const { count, decrease, increase } = useCounterStore();

  return (
    <>
      <div className="text-white flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            margin: "50px auto",
          }}
        ></motion.div>
        <div>Hello!</div>

        <div>{count}</div>
        <button className="text-3xl text-red-400" onClick={increase}>
          +
        </button>
        <button className="text-3xl text-red-400" onClick={decrease}>
          -
        </button>

        <div className="text-avocado-100">Hello-World</div>
        <div className="text-4xl font-pretendard">안녕하세요</div>
      </div>
    </>
  );
}

export default Test;
