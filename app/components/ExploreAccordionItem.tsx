import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
  index: number;
  title: string;
  desc: string;
  content: ReactNode;
  setActiveExploreAccordion: any;
  isActive: boolean;
}

const ExploreAccordionItem = ({
  index,
  title,
  desc,
  content,
  setActiveExploreAccordion,
  isActive,
}: AccordionProps) => {
  return (
    <>
      <div className="px-4">
        <div
          onClick={() => setActiveExploreAccordion(index)}
          className="flex mb-2 justify-between gap-x-2"
        >
          <div>
            <h4
              className={`font-semibold text-xl mb-2 ${
                isActive ? "text-primary" : ""
              }`}
            >
              {title}
            </h4>
            <p className="text-sm text-neutral-n-100">{desc}</p>
          </div>
          <div>
            {isActive ? (
              <motion.div
                initial={{ opacity: 0.6 }}
                whileInView={{
                  opacity: 1,
                  rotate: 180,
                  transition: { duration: 0.3 },
                }}
              >
                <Icon icon="mdi:chevron-up" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0.6 }}
                whileInView={{
                  opacity: 1,
                  rotate: 180,
                  transition: { duration: 0.3 },
                }}
              >
                <Icon icon="mdi:chevron-down" />
              </motion.div>
            )}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isActive && (
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
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default ExploreAccordionItem;
