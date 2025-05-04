// components/HeroSection.tsx

'use client'

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-neutral text-content px-6 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-primary ">
            Find the Right Tutor,<br className="hidden md:block" />
            Anytime, Anywhere.
          </h1>
          <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Whether you're a student looking for help or a teacher wanting to earn,{' '}
            <span className="text-accent font-semibold">FindTutor</span>{' '}
            connects the right people—fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn bg-primary text-primary-content rounded-lg shadow-md hover:scale-105 transition duration-300">
              Find a Tutor
            </button>
            <button className="btn bg-accent text-accent-content rounded-lg shadow-md hover:scale-105 transition duration-300">
              Become a Tutor
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src="/assets/tutor-illustration.svg"
            alt="Tutoring Illustration"
            className="max-w-md w-full drop-shadow-md"
          />
        </motion.div>

      </div>
    </section>
  );
}
