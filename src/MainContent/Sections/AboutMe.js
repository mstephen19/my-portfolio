import React, { useContext } from 'react';
import Bounce from 'react-reveal/Bounce';
import image from './assets/profile.png';
import { LangContext } from '../../App';
import SkillsIcons from './SkillsIcons';

export default function AboutMe() {
  const lang = useContext(LangContext);
  let content;
  lang === 'en'
    ? (content = {
        title: 'About',
        head: 'Who am I?',
        body: `Hello! I'm Matt! I'm a student at UC Berkeley and full-stack web developer with experience with many different modern technologies. I am well-versed in the modern MERN stack, and am always eager to learn more and sharpen my skills. My biggest passion is in writing clean, efficient, and functional code that impacts people every day.`,
      })
    : (content = {
        title: 'Обо Мне',
        head: 'Кто я?',
        body: `Здравствуйте, я Матиас. Я студент в калифорнийском университете Беркли и Full-Stack Веб-Разработчик с опытом работы с многими другими современными технологиями. Я хорошо разбираюсь в MERN, и всегда стремлюсь узнать больше. Моя самая большая страсть - писать чистый и эффективный код, который влияет на людей каждый день.`,
      });
  return (
    <>
      <div className='title'>
        <h1>{content.title}</h1>
        <div className='line'></div>
      </div>
      <div className='contentWrapper'>
        <div className='w-30'>
          <Bounce left>
            <img src={image} alt='Me' />
          </Bounce>
        </div>
        <div className='w-70' style={{ zIndex: '666' }}>
          {/* About me Body */}
          <h1
            style={{
              fontWeight: '400',
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 6vw, 3rem)',
            }}
          >
            {content.head}
          </h1>
          <p
            style={{
              maxWidth: '75%',
              fontSize: 'clamp(0.75rem, 2vw, 2.5rem)',
            }}
          >
            {content.body}
          </p>
          <SkillsIcons />
        </div>
      </div>
    </>
  );
}
