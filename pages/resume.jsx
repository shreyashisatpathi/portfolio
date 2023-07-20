import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Shreyashi | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png?' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Shreyashi Satpathi</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/shreyashis/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/shreyashisatpathi'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        I am a skilled and dedicated frontend developer with 5 years of experience, specialising in Next
JS,React JS, JavaScript, Typescript, HTML, CSS, and WebPack. I am a detail-oriented individual
with a strong passion for creating responsive, user-friendly, and efficient web applications. I am
committed to staying up-to-date with the latest industry trends and technologies and enjoy
working collaboratively with cross-functional teams to deliver high-quality products that meet
or exceed client expectations. I hold an engineering degree in Computer Science & Engineering.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>TypeScript
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>SQL
             <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            SkillRazr
            </span>
            <span className='px-2'>|</span>Berlin,Germany
          </p>
          <p className='py-1 italic'>Trainer(Remote) - Feb 2022 to Present</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
           As a trainer at Skill Razr Boot Camp, I am responsible for designing course modules and creating
coding assignments to assist trainees in developing solutions for various problems. This
includes guiding them through high-level system design, technical architecture, implementation,
code review, and best practices. Additionally, I have gained considerable expertise in UI
frameworks like ReactJS, NextJS, Typescript, CSS, SCSS, and Tailwind, allowing me to build
dynamic and responsive web applications. I have also become proficient in utilising
CI/CDpipelines to automate the testing and deployment process.
          </ul>
        </div>
    {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            YASH Technologies(www.yash.com)
            </span>
            <span className='px-2'>|</span>Hyderabad, India
          </p>
          <p className='py-1 italic'>Software Development Engineer - Dec 2020 to Dec 2021</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed an online insurance application platform with cutting edge technologies
            </li>
            <li>
            Collaborated with cross-functional teams to design and develop responsive and
user-friendly web applications using Next JS, React JS, JavaScript, Typescript, SCSS.
            </li>
            <li>
            Implemented Redux for state management and used REST API for backend integration.
            </li>
            <li>
            Ensured high-quality code by performing code reviews and implementing unit testing
using Jest and Enzyme.
            </li>
            <li>
            Participated in agile development methodologies, including daily stand-ups, sprint
planning, and retrospectives. 
            </li>
          </ul>
        </div>

        {/*  */}
       
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Accenture (www.accenture.com)</span>
            <span className='px-2'>|</span>Hyderabad, India
          </p>
          <p className='py-1 italic'>Software Development Engineer - October 2017 to May 2020</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Implemented the shopping cart and stepped checkout functionality of an e-com portal.
            </li>
            <li>
            Developed and maintained the product catalogue and product search functionality.
            </li>
            <li>
            Ensured high-quality code by doing code reviews and unit tests and integration tests.
            </li>
            <li>
            Optimised the website's performance and speed using Webpack, CDN, and SSR.
            </li>
            <li>
            Implemented SEO best practices to improve the website's visibility and ranking.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
