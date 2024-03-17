'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[80rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="max-w-xs md:max-w-none">
          <Image
            src={'/digital_artist_male_transparent.png'}
            alt="Description of the image"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="mb-3 text-xl text-left">
            I am a dedicated <b>Software Engineer</b> specializing in <b>backend
            development and technical leadership</b>, with a proven track record of
            delivering innovative solutions for the insurance industry. <br />My
            experience at Gemini Solutions has honed my skills in architecting
            and implementing robust systems, particularly within commercial and
            retail lines of insurance business. Leveraging technologies such as 
            &nbsp;<b>Node.js, AWS Lambda, and MongoDB</b>, I have led the development of
            critical projects, including revamping quote calculation systems and
            onboarding partner modules. With a Bachelor's degree in Computer
            Science and Engineering from GLA University and a passion for
            continuous learning, I am committed to driving forward-thinking
            solutions and making a positive impact in the ever-evolving
            landscape of software development.
          </p>
          <blockquote className=''>
          &ldquo;Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.&rdquo;<br />
          <span className='text-right'>
            - Rick Cook
          </span>
          </blockquote>
          
        </div>
      </div>
    </motion.section>
  );
}
