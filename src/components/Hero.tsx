// components/HeroSection.tsx

'use client'

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import heroimg from '@/assets/9571032-removebg-preview.png'
import Link from 'next/link';
export default function Hero() {
  return (
    <>
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
          <Typewriter
              words={['Find the Right Tutor, Anytime, Anywhere.']}
              typeSpeed={40}
              cursor
              cursorStyle="|"
            />
            {/* Find the Right Tutor,<br className="hidden md:block" />
            Anytime, Anywhere. */}
          </h1>
          <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">

            Whether you're a student looking for help or a teacher wanting to earn,{' '}
            <span className="text-accent font-semibold">FindTutor</span>{' '}
            connects the right people—fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          
              <Link role='button' href='/dashboard/student'>
              <button className="btn bg-primary text-primary-content rounded-lg shadow-md hover:scale-105 transition duration-300">
              Find a Tutor
              </button>
              </Link>
          
           
            <Link href='/dashboard/tutor' role='button'> <button className="btn bg-accent text-accent-content rounded-lg shadow-md hover:scale-105 transition duration-300">  Become a Tutor </button></Link>
           
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
            src={heroimg.src}
            alt="Tutoring Illustration"
            className="max-w-md w-full drop-shadow-md"
          />
        </motion.div>

      </div>
    </section>
     <section className="bg-neutral text-content px-6 py-20">
     <div className="max-w-6xl mx-auto text-center">
       <motion.h2
         className="text-3xl md:text-4xl font-bold mb-12 text-primary"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         viewport={{ once: true }}
       >
         How It Works
       </motion.h2>

       <div className="grid gap-10 md:grid-cols-3 text-left">
         {/* Step 1 */}
         <motion.div
           className="bg-[oklch(26.346%_0.018_262.177)] rounded-[var(--radius-box)] p-6 shadow-md"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4, delay: 0.1 }}
           viewport={{ once: true }}
         >
           <div className="text-4xl mb-4 text-[var(--color-accent)]">📝</div>
           <h3 className="text-xl font-semibold mb-2">Post What You Need</h3>
           <p>Students or parents describe the help they need — subject, level, and location.</p>
         </motion.div>

         {/* Step 2 */}
         <motion.div
           className="bg-[oklch(26.346%_0.018_262.177)] rounded-[var(--radius-box)] p-6 shadow-md"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4, delay: 0.3 }}
           viewport={{ once: true }}
         >
           <div className="text-4xl mb-4 text-[var(--color-accent)]">🔍</div>
           <h3 className="text-xl font-semibold mb-2">Browse Tutors</h3>
           <p>Review tutor profiles, see ratings, and choose the one that fits your needs best.</p>
         </motion.div>

         {/* Step 3 */}
         <motion.div
           className="bg-[oklch(26.346%_0.018_262.177)] rounded-[var(--radius-box)] p-6 shadow-md"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4, delay: 0.5 }}
           viewport={{ once: true }}
         >
           <div className="text-4xl mb-4 text-[var(--color-accent)]">🤝</div>
           <h3 className="text-xl font-semibold mb-2">Connect & Learn</h3>
           <p>Start chatting, schedule sessions, and begin learning — all through FindTutor.</p>
         </motion.div>
       </div>
     </div>
   </section>
   <section className="bg-neutral text-content py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-base rounded-lg shadow-xl px-8 py-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-8">
          Join hundreds of students and tutors already using <span className="font-semibold text-secondary">FindTutor</span>.
          It only takes a minute to sign up.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/dashboard/student' role='button'>
          <button className="btn bg-primary text-primary-content rounded-lg shadow-md hover:scale-105 transition duration-300">
            Join as Student
          </button>
          </Link>
     <Link href='/dashboard/tutor' role='button'>
     <button className="btn bg-primary text-primary-content rounded-lg shadow-md hover:scale-105 transition duration-300">
            Join as Tutor
          </button>
     </Link>
        
        </div>
      </motion.div>
    </section>
    </>
  );
}
