import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

/**
 * Controller responsável por expor as rotas relacionadas aos projetos.
 * Fornece a listagem completa de projetos que abastece os sites `portfolio` e `ozyris`.
 */
@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    /**
     * Retorna a lista completa de projetos desenvolvidos.
     * Cada objeto de projeto contém:
     * - name: Nome do cliente ou projeto
     * - title: Descrição/papel no desenvolvimento do site
     * - image: Caminho relativo do preview da imagem do projeto
     * - category: Categoria/Origem do projeto (ex: 'Ozyris', 'MZ Group', 'HTML Brasil')
     * - date: Data de entrega (MM/AAAA)
     * - href: Link de acesso externo
     */
    @Get()
    getProjects() {
        return [
            {
                name: 'Imports Manos',
                title: 'Criação do site para loja virtual',
                image: '/img/projects/imports-manos.png',
                category: 'Ozyris',
                date: '04/2026',
                href: 'https://importsmanos.com.br/',
            },
            {
                name: 'Banco do Brasil Asset',
                title: 'Criação do site para fundos',
                image: '/img/projects/bbasset.png',
                category: 'MZ Group',
                date: '01/2026',
                href: 'https://www.bbasset.com.br/',
            },
            {
                name: 'Anima Mundi Psicoterapia',
                title: 'Criação do site institucional',
                image: '/img/projects/animamundi.png',
                category: 'HTML Brasil',
                date: '01/2026',
                href: 'https://animamundipsicoterapia.com.br/',
            },
            {
                name: 'Orion Transmissão',
                title: 'Criação da Home do site de RI',
                image: '/img/projects/oriontransmissao.png',
                category: 'MZ Group',
                date: '08/2025',
                href: 'https://www.oriontransmissao.com.br/',
            },
            {
                name: 'Caixa Econômica RI',
                title: 'Criação da Home do site de RI',
                image: '/img/projects/caixa-economica.png',
                category: 'MZ Group',
                date: '08/2025',
                href: 'https://ri.caixa.gov.br/',
            },
            {
                name: 'DBLab Connect',
                title: 'Criação do site Institucional',
                image: '/img/projects/dblab.png',
                category: 'HTML Brasil',
                date: '05/2025',
                href: 'https://dblab.com.br/',
            },
            {
                name: 'Art Life Pintura',
                title: 'Criação do site Institucional',
                image: '/img/projects/artlife.png',
                category: 'HTML Brasil',
                date: '04/2025',
                href: 'https://artlifepintura.com.br/',
            },
            {
                name: 'Cadiz',
                title: 'Criação do site de RI',
                image: '/img/projects/cadiz.png',
                category: 'MZ Group',
                date: '12/2024',
                href: 'https://investors.cadizinc.com/',
            },
            {
                name: 'Alares',
                title: 'Criação do site de RI',
                image: '/img/projects/alares.png',
                category: 'MZ Group',
                date: '06/2024',
                href: 'https://ri.alaresinternet.com.br/',
            },
            {
                name: 'CSN ESG',
                title: 'Criação do Institucional',
                image: '/img/projects/csn-esg.png',
                category: 'MZ Group',
                date: '04/2024',
                href: 'https://esg.csn.com.br/',
            },
            {
                name: 'Allied',
                title: 'Criação do site de RI',
                image: '/img/projects/alliedbrasil.png',
                category: 'MZ Group',
                date: '04/2024',
                href: 'https://ri.alliedbrasil.com.br/',
            },
            {
                name: 'Vipal Borrachas',
                title: 'Criação do site de RI',
                image: '/img/projects/vipal.png',
                category: 'MZ Group',
                date: '04/2024',
                href: 'https://ri.vipal.com/',
            },
            {
                name: 'Massimo Motor',
                title: 'Criação do site de RI',
                image: '/img/projects/massimomotor.png',
                category: 'MZ Group',
                date: '04/2024',
                href: 'https://ir.massimomotor.com/',
            },
            {
                name: 'Neoenergia',
                title: 'Criação do site de RI',
                image: '/img/projects/neoenergia.png',
                category: 'MZ Group',
                date: '11/2023',
                href: 'https://ri.neoenergia.com/',
            },
            {
                name: 'Angá Asset',
                title: 'Criação do site Institucional',
                image: '/img/projects/angaasset.png',
                category: 'MZ Group',
                date: '11/2023',
                href: 'https://www.angaasset.com.br/',
            },
            {
                name: 'Ecorodovias',
                title: 'Redesign do site de RI',
                image: '/img/projects/ecorodovias.png',
                category: 'MZ Group',
                date: '07/2023',
                href: 'https://ri.ecorodovias.com.br/',
            },
            {
                name: 'Mercado Livre',
                title: 'Criação do site de RI',
                image: '/img/projects/mercadolivre.png',
                category: 'MZ Group',
                date: '07/2023',
                href: 'https://investor.mercadolibre.com/',
            },
            {
                name: 'Foresea',
                title: 'Criação do site de RI',
                image: '/img/projects/foresea.png',
                category: 'MZ Group',
                date: '07/2023',
                href: 'https://investors.foresea.com/',
            },
            {
                name: 'CVC RI',
                title: 'Criação do site de RI',
                image: '/img/projects/cvcri.png',
                category: 'MZ Group',
                date: '03/2023',
                href: 'https://www.cvccorp.com.br/ri/',
            },
            {
                name: 'CVC Corp',
                title: 'Criação do site Institucional',
                image: '/img/projects/cvccorp.png',
                category: 'MZ Group',
                date: '03/2023',
                href: 'https://www.cvccorp.com.br/',
            },
            {
                name: 'RYVYL',
                title: 'Criação do site de RI',
                image: '/img/projects/ryvyl.png',
                category: 'MZ Group',
                date: '12/2022',
                href: 'https://investors.ryvyl.com/',
            },
            {
                name: 'SurgePays',
                title: 'Criação do site de RI',
                image: '/img/projects/surgepays.png',
                category: 'MZ Group',
                date: '08/2022',
                href: 'https://ir.surgepays.com/',
            },
            {
                name: 'Commit Gás',
                title: 'Criação do site de RI',
                image: '/img/projects/commitgas.png',
                category: 'MZ Group',
                date: '08/2022',
                href: 'https://www.commitgas.com/',
            },
            {
                name: 'Essentia Energia',
                title: 'Criação do site de RI',
                image: '/img/projects/essentiaenergia.png',
                category: 'MZ Group',
                date: '06/2022',
                href: 'https://ri.essentiaenergia.com.br/',
            },
            {
                name: 'AgroGalaxy',
                title: 'Criação de página para ESG',
                image: '/img/projects/agrogalaxy.png',
                category: 'MZ Group',
                date: '03/2022',
                href: 'https://ri.agrogalaxy.com.br/esg/',
            },
            {
                name: 'Omega Energia',
                title: 'Redesign do site de RI',
                image: '/img/projects/omegaenergia.png',
                category: 'MZ Group',
                date: '02/2022',
                href: 'https://ri.omegaenergia.com.br/',
            },
            {
                name: 'Rodobens',
                title: 'Mudanças de marca no site de RI',
                image: '/img/projects/rodobens.png',
                category: 'MZ Group',
                date: '01/2022',
                href: 'https://ri.rodobens.com.br/',
            },
        ];
    }
}
