import { Injectable, NotFoundException } from '@nestjs/common';
import { Area } from './interfaces/government-areas.interfaces';

@Injectable()
export class GovernmentAreasService {
  private _governmentAreas: Area[] = [
    {
      id: 12,
      name: 'Ministerio de Hacienda y Finanzas',
      information: {
        leader: {
          name: 'Gustavo Arengo Piragine',
          image:
            '/sites/default/files/2023-12/Ministro_de_Hacienda_y_Finanzas.jpeg',
          position: 'Ministro de Hacienda y Finanzas',
        },
        contact: {
          phone: '5030-9156 / 5030-9158',
          emails: ['garengopiragine@buenosaires.gob.ar'],
        },
        networks: [
          {
            title: 'Twitter',
            url: 'https://twitter.com/gustavo_arengo',
            icon: 'bxl-twitter',
          },
        ],
        map: {
          address: 'Av. Martín García 344',
          src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av. Martín García 344',
        },
      },
    },
    {
      id: 13,
      name: 'Ministerio de Infraestructura',
      information: {
        leader: {
          name: 'Pablo Bereciartua',
          position: 'Ministro de Infraestructura',
          image: 'URL_DE_LA_IMAGEN',
        },
        contact: {
          emails: ['pbereciartua@buenosaires.gob.ar'],
        },
        networks: [
          {
            title: 'Instagram',
            url: 'https://www.instagram.com/bainfraestructura',
            icon: 'bx bxl-instagram-alt',
          },
          {
            title: 'YouTube',
            url: 'https://www.youtube.com/channel/UCsulcK8Zh0wFbtdWu0DqHCQ',
            icon: 'bx bxl-youtube',
          },
          {
            title: 'Twitter',
            url: 'https://twitter.com/BAInfraest',
            icon: 'bx bxl-twitter',
          },
        ],
        map: {
          address: 'Av. Martín García 346',
          src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av. Martín García 346',
        },
      },
    },
  ];

  private _governmentAreasIndexData = {
    1: 'Jefatura de Gobierno',
    2: 'Vicejefatura de Gobierno',
    3: 'Jefatura de Gabinete de Ministros',
    4: 'Ministerio de Cultura',
    5: 'Ministerio de Desarrollo Económico',
    6: 'Ministerio de Desarrollo humano y Habitat',
    7: 'Ministerio de Educación',
    8: 'Ministerio de Justicia',
    9: 'Ministerio de Seguridad',
    10: 'Ministerio de Salud',
    11: 'Ministerio de Espacio Público e Higiene Urbana',
    12: 'Ministerio de Hacienda y Finanzas',
    13: 'Ministerio de Infraestructura',
  };

  public get governmentAreasAllData() {
    return this._governmentAreas;
  }

  public get governmentAreasIndexData() {
    return this._governmentAreasIndexData;
  }

  public getAreaById(areaId: number): Area {
    const area = this._governmentAreas.find((area) => {
      return area.id === areaId;
    });

    if (!area) {
      throw new NotFoundException(`Area with id ${areaId} not found`);
    }

    return area;
  }
}
