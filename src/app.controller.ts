import { Controller, Get } from '@nestjs/common';

/**
 * Controller principal da API de Portfólio.
 *
 * Esta API foi desenvolvida para centralizar a gestão e o fornecimento dos dados de projetos
 * consumidos pelos sites `portfolio` e `ozyris`, eliminando a necessidade de manter arquivos JSON
 * estáticos e duplicados em cada repositório.
 */
@Controller()
export class AppController {
    /**
     * Retorna informações gerais de metadados da API e as rotas disponíveis.
     * Serve como ponto de entrada para verificar o status e a versão da API.
     */
    @Get()
    getRoot() {
        return {
            name: 'Portfolio API',
            version: '1.0.0',
            author: 'Luis Henrique',
            description:
                'API responsável por centralizar e disponibilizar os projetos e tecnologias/cursos utilizados nos sites Portfolio e Ozyris.',
            routes: {
                projects: '/projects',
                technologies: '/technologies',
            },
        };
    }
}
