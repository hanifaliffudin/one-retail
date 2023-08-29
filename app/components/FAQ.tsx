import { motion } from "framer-motion";
import Link from "next/link";
import FAQAccordionItem from "./FAQAccordionItem";
import { useState } from "react";

const FAQ = () => {
  const [faqActive, setFaqActive] = useState(0);

  const accordionData = [
    {
      title: "How can I start setting up the systems on to my business?",
      content: `You can start submitting form to our contact form, or you can directly contact our sales via WhatsApp or Phone Number. One Retail sales will directly get in touch with you.`,
    },
    {
      title: "Are there limitations of how the systems work can be designed?",
      content: `We have no limitations in compiling workflows in each business. You are free to determine what requirements that suits your business operations, starting from user settings at multiple levels that you need to, until how the business area and business level are arranged.`,
    },
    {
      title: "What if my team is not sophisticated enough to use this system?",
      content: `Don't worry its all good in our hands , because One Retail team will provide a manual guide book for your entire team about how using the system and it will be adapted to the system that is made, both in custom system or the existing system. If necessary, we also provide direct training services for business people to have a deeper understanding of the system.`,
    },
    {
      title: "Can I integrate part of the system with other software?",
      content: `Yes, of course. One Retail system can support multiple API Integration, but we have to consider the capabilities of these third-party software and any documentation processes that will take a few weeks to complete development and certification.`,
    },
  ];

  const setActive = (index: number) => {
    setFaqActive(index);
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-3 pt-20 pb-[104px] md:px-[188px] px-4 gap-y-5 gap-x-[120px] mb-20">
          <div className="md:col-span-1 col-span-3">
            <h2 className="font-bold sm:text-[32px] sm:leading-[48px] text-xl text-xl mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-n-90 max-sm:text-sm">
              Find answers to commonly asked questions about One Retail
              solutions, empowering you with the knowledge you need for seamless
              operations and business growth.
            </p>
          </div>
          <div className="md:col-span-2 col-span-3">
            {accordionData.map(({ title, content }, index) => (
              <>
                <FAQAccordionItem
                  key={index}
                  setActive={setActive}
                  index={index}
                  title={title}
                  content={content}
                  active={faqActive == index}
                />
              </>
            ))}
            <div className="text-primary max-sm:text-sm font-medium mt-10">
              <Link href={"#"}>Any further question? contact us!</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
