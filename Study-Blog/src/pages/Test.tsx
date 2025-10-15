import { motion } from "framer-motion";
import { useCounterStore } from "../zustand-store/store";

function Test() {
  const { count, decrease, increase } = useCounterStore();

  return (
    <>
      <div className="text-white flex flex-col items-center">
        <motion.div
          initial={{borderWidth : '12px', borderColor : "#de222a"}}
          animate={{ borderWidth : '1px' }}
          transition={{ duration: 1 }}
        >Hello-World</motion.div>
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
