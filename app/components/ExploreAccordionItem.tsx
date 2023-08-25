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
  setmaxLength: (length: number) => void;
  resetSlideIndex: () => void;
}

const ExploreAccordionItem = ({
  index,
  title,
  desc,
  content,
  setActiveExploreAccordion,
  isActive,
  setmaxLength,
  resetSlideIndex,
}: AccordionProps) => {
  return (
    <>
      <div className="sm:px-4">
        <div
          onClick={() => {
            setActiveExploreAccordion(index);
            resetSlideIndex();
            switch (index) {
              case 1:
                setmaxLength(3);
                break;
              case 2:
                setmaxLength(5);
                break;
              case 3:
                setmaxLength(3);
                break;
              case 4:
                setmaxLength(2);
                break;

              default:
                break;
            }
          }}
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
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{
                    opacity: 1,
                    rotate: -180,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Icon icon="mdi:chevron-down" />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{
                    opacity: 1,
                    rotate: 180,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Icon icon="mdi:chevron-up" />
                </motion.div>
              )}
            </AnimatePresence>
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
