'use client'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills', id: 'skills', content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Nest JS</li>
                <li>React JS</li>
                <li>Git</li>
                <li>PHP</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title: 'Education', id: 'education', content: (
            <ul className='list-disc pl-2'>
                <li>Tecnólogo em Análise e Desenvolvimento de Sistemas</li>
                <li>Faculdades Integradas Einstein de Limeira</li>
                <li>2021 - 2023</li>
            </ul>
        )
    },
    {
        title: 'Certification', id: 'certification', content: (
            <ul className='list-disc pl-2'>
                <li>NLW Journey - Nodejs</li>
                <li>
                    DIO logo
                    Programação para internet com JavaScript</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <img src="/images/computer.jpg" alt="Computer" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4 '>Sobre Mim</h2>
                    <p className='text-base md:text-lg lg:text-lg'>Como desenvolvedor web full stack, sou movido pela paixão de transformar
                        ideias em soluções digitais inovadoras. Minha experiência abrange diversas
                        tecnologias modernas, incluindo HTML, CSS, JavaScript, React JS, Next JS,
                        Node.js, Nest JS, PostgreSQL, PHP e WordPress. Também tenho sólidos
                        conhecimentos em jQuery, Ajax e versionamento com Git. Estou constantemente
                        me atualizando com as últimas tendências do desenvolvimento web e adoro
                        enfrentar novos desafios. Acredito fortemente no poder da colaboração e
                        busco sempre contribuir com equipes que compartilham o mesmo entusiasmo
                        por criar aplicações, sistemas e soluções excepcionais.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Habilidades</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Educação</TabButton>
                        <TabButton selectTab={() => handleTabChange('certification')} active={tab === 'certification'}>Certificações</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection