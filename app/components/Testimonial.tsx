import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section>
      <div className="bg-[#EDEFF7] xl:px-24 lg:px-12 px-4 xl:py-10 lg:py-9 py-5 md:mb-20 mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: [1500, 0],
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <img className="mb-2.5" src="/home/format-quote.svg" alt="quote" />
          <p className="text-neutral-n-90 mb-6 sm:text-2xl font-semibold">
            Payments, inventory, and e-Commerce are just the start. One Retail
            POS is your{" "}
            <span className="text-primary font-bold">
              smart partner to connect
            </span>{" "}
            every tool that keeps your business moving — so you can shape what’s
            next.
          </p>
          <p className="text-neutral-n-80 mb-2 sm:text-xl text-sm font-semibold">
            Naila Agung Sarasati
          </p>
          <p className="text-neutral-n-70 mb-6 max-sm:text-xs">
            CEO & Co-Founder of Jolla.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
