import { Controller, Get, Redirect } from '@nestjs/common';
import {
    ApiExcludeEndpoint,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

/**
 * Controller principal da API de Portfólio.
 *
 * Esta API foi desenvolvida para centralizar a gestão e o fornecimento dos dados de projetos
 * consumidos pelos sites `portfolio` e `ozyris`, eliminando a necessidade de manter arquivos JSON
 * estáticos e duplicados em cada repositório.
 */
@ApiTags('Metadados')
@Controller()
export class AppController {
    /**
     * Retorna informações gerais de metadados da API e as rotas disponíveis.
     * Serve como ponto de entrada para verificar o status e a versão da API.
     */
    @Get()
    @ApiOperation({ summary: 'Retorna os metadados da API' })
    @ApiResponse({
        status: 200,
        description: 'Metadados da API retornados com sucesso.',
    })
    getRoot() {
        return {
            name: 'Portfolio API',
            version: '1.0.0',
            author: 'Luis Henrique',
            description:
                'API responsável por centralizar e disponibilizar os projetos e tecnologias/cursos utilizados nos sites Portfolio e Ozyris. A documentação interativa está disponível em /api.',
            links: {
                portfolio: 'https://luisitcho.com.br/',
                ozyris: 'https://ozyris.com.br/',
            },
            routes: {
                projects: '/projects',
                technologies: '/technologies',
                swagger: '/api',
            },
        };
    }

    @ApiExcludeEndpoint()
    @Get('api/swagger-ui.css')
    @Redirect(
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
        302,
    )
    getSwaggerCss() {}

    @ApiExcludeEndpoint()
    @Get('api/swagger-ui-bundle.js')
    @Redirect(
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
        302,
    )
    getSwaggerBundle() {}

    @ApiExcludeEndpoint()
    @Get('api/swagger-ui-standalone-preset.js')
    @Redirect(
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
        302,
    )
    getSwaggerPreset() {}

    @ApiExcludeEndpoint()
    @Get('api/favicon-32x32.png')
    @Redirect(
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/favicon-32x32.png',
        302,
    )
    getSwaggerFavicon32() {}

    @ApiExcludeEndpoint()
    @Get('api/favicon-16x16.png')
    @Redirect(
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/favicon-16x16.png',
        302,
    )
    getSwaggerFavicon16() {}
}
