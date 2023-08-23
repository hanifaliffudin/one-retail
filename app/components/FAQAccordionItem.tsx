import { Icon } from "@iconify/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
  index: number;
  title: string;
  content: string;
  setActive: (index: number) => void;
  active: boolean;
}

const FAQAccordionItem = ({
  index,
  title,
  content,
  setActive,
  active,
}: AccordionProps) => {
  return (
    <>
      <div
        className="flex gap-x-6 cursor-pointer justify-between"
        onClick={() => setActive(index)}
      >
        <div>
          <h4 className="font-semibold sm:text-xl mb-2">{title}</h4>

          <AnimatePresence initial={false}>
            {active && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <p className="text-neutral-n-80 max-sm:text-sm">{content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <div className="flex text-primary justify-center items-center rounded-full h-[24px] w-[24px] border-[2px] border-[#1F40AE]">
            <AnimatePresence initial={false}>
              {active ? (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  <Icon icon="fa6-solid:minus" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  <Icon icon="fa6-solid:plus" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default FAQAccordionItem;
