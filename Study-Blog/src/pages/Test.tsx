import { motion } from "framer-motion";
import { useCounterStore } from "../zustand-store/store";

function Test() {
  const { count, decrease, increase } = useCounterStore();

  return (
    <>
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
      <button className="text-3xl text-red-400" onClick={increase}>+</button>
      <button className="text-3xl text-red-400" onClick={decrease}>-</button>
    </>
  );
}

export default Test;
