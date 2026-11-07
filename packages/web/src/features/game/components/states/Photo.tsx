import type { ManagerStatusDataMap } from "@razzia/common/types/game/status"
import { motion } from "motion/react"

interface Props {
  data: ManagerStatusDataMap["SHOW_PHOTO"]
}

const Photo = ({ data: { question, photo } }: Props) => (
  <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-6 px-2 pb-4">
    <h2 className="text-center text-2xl font-bold text-white drop-shadow-lg md:text-4xl">
      {question}
    </h2>
    <motion.img
      key={photo}
      src={photo}
      alt={question}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
    />
  </section>
)

export default Photo
