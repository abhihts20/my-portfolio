'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from './section-heading';
import { skillsData, skillsWithLinksAndIcons } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SubSectionHeading from './subsection-heading';
import { Tooltip } from 'react-tooltip';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // useEffect(() => {
  //   const updateTheme = () => {
  //     setTheme(localStorage.getItem('theme') || 'light');
  //   };
  //   window.addEventListener('storage', updateTheme);

  //   return () => {
  //     window.removeEventListener('storage', updateTheme);
  //   };
  // }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsWithLinksAndIcons.map((skill, index) => (
          <>
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-lg"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Link href={skill.link} className={`skill-${skill.name}`} target="_blank">
                <div className="flex items-center ">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 mr-2"
                    width={10}
                    height={10}
                  />
                  <span className="text-gray-800 dark:text-white">{skill.name}</span>
                  
                </div>
                <Tooltip anchorSelect={`skill-${skill.name}`} content={skill.typeOfEntry} place='top'>{skill.typeOfEntry}</Tooltip>
              </Link>
            </motion.li>
            
          </>
        ))}
      </ul>
    </section>
  );
}
