import { Controller, Get } from '@nestjs/common';
import { TechnologiesService, Technology } from './technologies.service';

/**
 * Controller responsável por gerenciar a rota de tecnologias/cursos.
 * Serve a listagem de competências, certificados e repositórios vinculados a cada tecnologia.
 */
@Controller('technologies')
export class TechnologiesController {
    constructor(private readonly technologiesService: TechnologiesService) {}

    /**
     * Retorna a lista de tecnologias cadastradas.
     * Cada tecnologia possui informações sobre categoria, status de conclusão, data de conclusão,
     * certificados e repositórios de cursos realizados.
     */
    @Get()
    getTechnologies(): Technology[] {
        return this.technologiesService.getTechnologies();
    }
}
