import { Injectable } from '@nestjs/common';

export interface Certificate {
    name: string;
    link: string;
}

export interface Repository {
    name: string;
    link: string;
    current: boolean;
    past: boolean;
}

export interface Technology {
    name: string;
    category: string;
    icon: string; // Armazenado como string para transmissão via JSON
    completed: boolean;
    hide: boolean;
    completion_date?: string;
    certificates?: Certificate[];
    repositories?: Repository[];
}

@Injectable()
export class TechnologiesService {
    getTechnologies(): Technology[] {
        return [
            {
                name: 'JavaScript',
                category: 'Front-end',
                icon: 'FaJsSquare',
                completed: true,
                hide: false,
                completion_date: '2023-06-18',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-d479fda3-61af-43f4-96b4-ba3de4357647/',
                    },
                ],
                repositories: [
                    {
                        name: 'Curso 2023',
                        link: 'https://github.com/luisitcho/curso-javascript-otavio-2023',
                        current: true,
                        past: true,
                    },
                    {
                        name: 'Repositório (2022)',
                        link: 'https://github.com/luisitcho/curso-javascript-daciuk-2022',
                        current: false,
                        past: true,
                    },
                ],
            },
            {
                name: 'TypeScript',
                category: 'Front-end',
                icon: 'SiTypescript',
                completed: true,
                hide: false,
                completion_date: '2023-06-07',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-94360443-8058-4934-8533-7ab89e3caeb0/',
                    },
                ],
                repositories: [
                    {
                        name: 'Curso 2023',
                        link: 'https://github.com/luisitcho/curso-typescript-otavio-2023',
                        current: true,
                        past: true,
                    },
                ],
            },
            {
                name: 'Jquery',
                category: 'Front-end',
                icon: 'SiJquery',
                completed: true,
                hide: false,
                completion_date: '2022-11-27',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-4607b81e-789b-4e76-afb1-3304b9134827/',
                    },
                ],
                repositories: [
                    {
                        name: 'Repositório (2022)',
                        link: 'https://github.com/luisitcho/curso-jquery-origamid-2022',
                        current: false,
                        past: true,
                    },
                ],
            },
            {
                name: 'Node.js',
                category: 'Back-end',
                icon: 'FaNodeJs',
                completed: false,
                hide: true,
                completion_date: '2023-12-01',
                repositories: [
                    {
                        name: 'Curso Node (Estudo)',
                        link: 'https://github.com/luisitcho/curso-node-otavio-2023',
                        current: true,
                        past: true,
                    },
                    {
                        name: 'Repositório (2025)',
                        link: 'https://github.com/luisitcho/curso-node-battisti-2025',
                        current: false,
                        past: true,
                    },
                ],
            },
            {
                name: 'Python',
                category: 'Back-end',
                icon: 'SiPython',
                completed: false,
                hide: false,
                repositories: [
                    {
                        name: 'Curso Python',
                        link: 'https://github.com/luisitcho/curso-python-otavio-2023',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'Django',
                category: 'Back-end',
                icon: 'SiDjango',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'Curso Django',
                        link: 'https://github.com/luisitcho/curso-django-otavio-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'Linux',
                category: 'DevOps',
                icon: 'FaLinux',
                completed: true,
                hide: false,
                completion_date: '2022-06-04',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-fb146332-63b5-4e1e-9124-00263d77082a/',
                    },
                ],
            },
            {
                name: 'GitHub',
                category: 'Ferramentas',
                icon: 'FaGithub',
                completed: true,
                hide: false,
                completion_date: '2022-06-10',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-9a0365fd-b1dd-4d64-a8df-dabda5ca26b4/',
                    },
                ],
            },
            {
                name: 'Webpack',
                category: 'Ferramentas',
                icon: 'SiWebpack',
                completed: true,
                hide: false,
                completion_date: '2022-08-07',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-dad37d58-4ef8-408e-8dd0-084ef2d12f6c/',
                    },
                ],
            },
            {
                name: 'Google Analytics',
                category: 'Ferramentas',
                icon: 'SiGoogleanalytics',
                completed: true,
                hide: false,
                completion_date: '2023-01-15',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-439116a7-c7b8-4aae-91b4-4a3888929f45/',
                    },
                ],
            },
            {
                name: 'PHP',
                category: 'Back-end',
                icon: 'FaPhp',
                completed: true,
                hide: false,
                completion_date: '2023-05-22',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-fc20594d-1d9b-46f7-97c2-661b79727c01/',
                    },
                ],
            },
            {
                name: 'WordPress',
                category: 'Ferramentas',
                icon: 'SiWordpress',
                completed: true,
                hide: false,
                completion_date: '2022-05-28',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-6e06e88a-23a2-4f74-a5b3-ac0ac52d807f/',
                    },
                ],
            },
            {
                name: 'Sass',
                category: 'Front-end',
                icon: 'SiSass',
                completed: true,
                hide: false,
                completion_date: '2022-05-28',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-40098fda-8d0a-4b72-85ed-56f0aa942c6a/',
                    },
                ],
            },
            {
                name: 'Bootstrap',
                category: 'Front-end',
                icon: 'FaBootstrap',
                completed: true,
                hide: false,
                completion_date: '2022-06-01',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-e28fbbbf-e958-4b3f-9dc5-a5a15bfe810f/',
                    },
                ],
            },
            {
                name: 'Tailwind',
                category: 'Front-end',
                icon: 'SiTailwindcss',
                completed: false,
                hide: false,
                repositories: [
                    {
                        name: 'Curso Tailwind',
                        link: 'https://github.com/luisitcho/curso-tailwind-ferrante-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'Vue.js',
                category: 'Front-end',
                icon: 'FaVuejs',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'Curso Vue',
                        link: 'https://github.com/luisitcho/curso-vue-marcon-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'React',
                category: 'Front-end',
                icon: 'FaReact',
                completed: true,
                hide: false,
                completion_date: '2026-04-11',
                certificates: [
                    {
                        name: 'React c/ TypeScript',
                        link: 'https://www.udemy.com/certificate/UC-e3711628-5a42-4a30-b273-de5ea9c4f137/',
                    },
                ],
                repositories: [
                    {
                        name: 'Repositório (2025)',
                        link: 'https://github.com/luisitcho/curso-react-otavio-2025/tree/main/1-chronos-pomodoro',
                        current: false,
                        past: true,
                    },
                    {
                        name: 'Repositório (2024)',
                        link: 'https://github.com/luisitcho/curso-react-fraga-2024',
                        current: false,
                        past: true,
                    },
                ],
            },
            {
                name: 'Next.js',
                category: 'Front-end',
                icon: 'SiNextdotjs',
                completed: false,
                hide: false,
                repositories: [
                    {
                        name: 'Blog Next.js',
                        link: 'https://github.com/luisitcho/curso-react-otavio-2025/tree/main/2-blog',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'Angular',
                category: 'Front-end',
                icon: 'FaAngular',
                completed: false,
                hide: false,
                repositories: [
                    {
                        name: 'Curso Angular',
                        link: 'https://github.com/luisitcho/curso-angular-freitas-2024',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'Java',
                category: 'Back-end',
                icon: 'FaJava',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'Curso Java',
                        link: 'https://github.com/luisitcho/curso-java-nelio-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'Spring Boot',
                category: 'Back-end',
                icon: 'BiLogoSpringBoot',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'Curso Spring Boot',
                        link: 'https://github.com/luisitcho/curso-java-spring-dougllas-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'Docker',
                category: 'DevOps',
                icon: 'SiDocker',
                completed: true,
                hide: false,
                completion_date: '2025-08-09',
                certificates: [
                    {
                        name: 'Certificado de Conclusão',
                        link: 'https://www.udemy.com/certificate/UC-c1071bbb-0321-4da5-899b-94ab7584a144/',
                    },
                ],
                repositories: [
                    {
                        name: 'Repositório (2025)',
                        link: 'https://github.com/luisitcho/curso-docker-lacono-2025',
                        current: false,
                        past: true,
                    },
                ],
            },
            {
                name: 'AWS',
                category: 'DevOps',
                icon: 'FaAws',
                completed: false,
                hide: false,
            },
            {
                name: 'DevOps',
                category: 'DevOps',
                icon: 'BiInfinite',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'Curso DevOps',
                        link: 'https://github.com/luisitcho/curso-devops-2026',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'GraphQL',
                category: 'Ferramentas',
                icon: 'SiGraphql',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'API GraphQL',
                        link: 'https://github.com/luisitcho/curso-graphlq-otavio-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'NestJS',
                category: 'Back-end',
                icon: 'SiNestjs',
                completed: false,
                hide: false,
                repositories: [
                    {
                        name: 'Backend NestJS',
                        link: 'https://github.com/luisitcho/curso-react-otavio-2025/tree/main/3-nest-for-next',
                        current: true,
                        past: true,
                    },
                    {
                        name: 'Repositório (2025)',
                        link: 'https://github.com/luisitcho/curso-nest-otavio-2025',
                        current: false,
                        past: true,
                    },
                ],
            },
            {
                name: 'MySQL',
                category: 'Ferramentas',
                icon: 'GrMysql',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'DB MySQL',
                        link: 'https://github.com/luisitcho/curso-mysql-battisti-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'PostgreSQL',
                category: 'Ferramentas',
                icon: 'BiLogoPostgresql',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'DB Postgres',
                        link: 'https://github.com/luisitcho/curso-postgresql-mazuko-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
            {
                name: 'MongoDB',
                category: 'Ferramentas',
                icon: 'BiLogoMongodb',
                completed: false,
                hide: true,
                repositories: [
                    {
                        name: 'DB NoSQL',
                        link: 'https://github.com/luisitcho/curso-mongodb-battisti-2025',
                        current: true,
                        past: false,
                    },
                ],
            },
        ];
    }
}
