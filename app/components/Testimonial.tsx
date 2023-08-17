import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section>
      <div className="bg-[#EDEFF7] md:px-24 px-4 py-10 mb-20">
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
          <p className="text-neutral-n-90 mb-6 text-2xl font-semibold">
            Payments, inventory, and e-Commerce are just the start. One Retail
            POS is your{" "}
            <span className="text-primary font-bold">
              smart partner to connect
            </span>{" "}
            every tool that keeps your business moving — so you can shape what’s
            next.
          </p>
          <p className="text-neutral-n-80 mb-2 text-xl font-semibold">
            Jenny Wilson
          </p>
          <p className="text-neutral-n-70 mb-6">CEO & Co-Founder of Jolla.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;