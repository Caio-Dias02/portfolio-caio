import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'Anime Flix',
        description: 'Um site de animes com uma API de animes que trazem informações sobre os animes, como título, descrição, imagem, etc.',
        imgUrl: '/images/projects/1.png',
        tag: ['All', 'Web']
    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'Um portfolio para mostrar meus projetos e minhas habilidades.',
        imgUrl: '/images/projects/2.png',
        tag: ['All', 'Web']
    },
    {
        id: 3,
        title: 'Página de Receita',
        description: 'Uma página de receita simples, com uma receita de bolo de torta de limão.',
        imgUrl: '/images/projects/3.png',
        tag: ['All', 'Web']
    }
]

const ProjectsSection = () => {
    return <div>
        <h2>Meus Projetos</h2>
        <div>{projectsData.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} tag={project.tag} />
        ))}</div>
    </div>;
};

export default ProjectsSection;