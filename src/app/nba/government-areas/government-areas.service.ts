import { Injectable, NotFoundException } from '@nestjs/common';
import { Area } from './interfaces/government-areas.interfaces';

@Injectable()
export class GovernmentAreasService {
  private _chiefOfGovernment: Area = {
    id: 1,
    name: 'Jefatura de Gobierno',
    information: {
      leader: {
        name: 'Jorge Macri',
        position: 'Jefe de Gobierno',
        image:
          'https://buenosaires.gob.ar/sites/default/files/2023-09/Jorge_Macri_perfil_home.jpg',
      },
      contact: {
        emails: ['jmacri@buenosaires.gob.ar'],
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'YouTube',
          url: 'https://www.youtube.com/',
          icon: 'bx bxl-youtube',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Uspallata 3160',
        src: 'mapa.com',
      },
    },
  };

  private _viceChiefOfGovernment: Area = {
    id: 2,
    name: 'Vicejefatura de Gobierno',
    information: {
      leader: {
        name: 'Clara Muzzio',
        position: 'Vicejefa de Gobierno',
      },
      contact: {
        emails: ['claram@buenosaires.gob.ar'],
        address: 'Uspallata 3160, 3° piso',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/claramuzzio',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/clara.muzzio',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/claramuzzio',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Uspallata 3160',
        src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Uspallata%203160',
      },
    },
  };

  private _chiefOfCabinetOfMinisters: Area = {
    id: 3,
    name: 'Jefatura de Gabinete de Ministros',
    information: {
      leader: {
        name: 'Nestor Grindetti',
        image: '/sites/default/files/2024-01/Grindetti.jpg',
        position: 'Ministro de Jefatura de Gabinete',
      },
      contact: {
        emails: ['ngrindetti@buenosaires.gob.ar'],
        address: 'Uspallata 3160',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/profile.php?id=61555458143515&sfnsn=scwspwa&mibextid=RUbZ1flocale=es_LA',
          icon: 'bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/jefaturaba/?hl=es%3Fhl=es',
          icon: 'bxl-instagram-alt',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/jefaturaBA',
          icon: 'bxl-twitter',
        },
      ],
      map: {
        address: 'Uspallata 3160',
        src: 'http://tiles1.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/15/11067/13019.png',
      },
    },
  };

  private _ministryOfCulture: Area = {
    id: 4,
    name: 'Ministerio de Cultura',
    information: {
      leader: {
        name: 'Gabriela Ricardes',
        position: 'Ministra de Cultura',
        image: 'https://URL_DE_LA_IMAGEN',
      },
      contact: {
        phone: '11 4323 9400',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/BACultura/',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/bacultura/?hl=es-la',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/datacultura',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Av. de Mayo 575',
        src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av. de Mayo 575',
      },
    },
  };

  private _ministryOfEconomicDevelopment: Area = {
    id: 5,
    name: 'Ministerio de Desarrollo Económico',
    information: {
      leader: {
        name: 'Roberto García Moritán',
        position: 'Ministro de Desarrollo Económico',
      },
      contact: {
        phone: '5030-9200',
        emails: ['desarrolloeconomico@buenosaires.gob.ar'],
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/DesarrolloEconomicoBA',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/desarrolloeconomicoba/',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/DesEconomicoBA',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Av. Martín García 346',
        src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av.%20Mart%C3%ADn%20Garc%C3%ADa%20346',
      },
    },
  };

  private _ministryOfHumanDevelopmentAndHousing: Area = {
    id: 6,
    name: 'Ministerio de Desarrollo Humano y Hábitat',
    information: {
      leader: {
        name: 'Gabriel Sebastián Mraida',
        image:
          '/sites/default/files/2023-12/Ministro_de_Desarrollo_Humano_y_Habitat.jpeg',
        position: 'Ministro de Desarrollo Humano y Hábitat',
      },
      contact: {
        phone: '5030-9700',
        emails: ['gmraida@buenosaires.gob.ar'],
        address: 'Piedra Buena Av. 3280',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/desarrollohumanoba/',
          icon: 'bxl-facebook-circle',
        },
      ],
      map: {
        address: 'Piedra Buena Av. 3280',
        src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Piedra Buena Av. 3280',
      },
    },
  };

  private _ministryOfEducation: Area = {
    id: 7,
    name: 'Ministerio de Educación',
    information: {
      leader: {
        name: 'Mercedes Miguel',
        image: '/sites/default/files/2023-12/Ministra%20de%20educación.jpeg',
        position: 'Ministra de Educación',
      },
      contact: {
        phone: '6076-6000',
        emails: ['mercedes@bue.edu.ar'],
        address: 'Carlos H. Perette 750',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/EducacionBA/',
          icon: 'bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/educacionba/?hl=es',
          icon: 'bxl-instagram-alt',
        },
        {
          title: 'Youtube',
          url: 'https://www.youtube.com/channel/UC2HtgpM8A9Nv-8y0j5v5ZOQ',
          icon: 'bxl-youtube',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/EducacionBA',
          icon: 'bxl-twitter',
        },
      ],
      map: {
        address: 'Carlos H. Perette 750',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.888755725674!2d-58.38227022454956!3d-34.581681272962264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1fa6732c4b%3A0xe0081a9aaee2c67b!2sMinisterio%20de%20Educaci%C3%B3n%20de%20la%20Ciudad%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1686840819485!5m2!1ses!2sar',
      },
    },
  };

  private _ministryOfJustice: Area = {
    id: 8,
    name: 'Gabino Tapia',
    information: {
      leader: {
        name: 'Gabino Tapia',
        position: 'Ministro de Justicia',
      },
      contact: {
        phone: '11 5091 9100',
        emails: ['gabinotapia@buenosaires.gob.ar'],
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/tapiagabino',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/gabinotapiaba/',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/GabinoTapiaBA',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Uspallata 3160',
        src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Uspallata%203160',
      },
    },
  };

  private _ministryOfSecurity: Area = {
    id: 9,
    name: 'Seguridad',
    information: {
      leader: {
        name: 'Waldo Wolff',
        image: '/sites/default/files/2024-01/wolf.jpeg',
        position: 'Ministro de Seguridad',
      },
      contact: {
        phone: '4323-8900 Int. 116517',
        emails: ['wwolff@buenosaires.gob.ar'],
        address: 'Av. Regimiento de Patricios 1142',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/SeguridadBA/',
          icon: 'bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/Baseguridad',
          icon: 'bxl-instagram-alt',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/seguridadba',
          icon: 'bxl-twitter',
        },
      ],
      map: {
        address: 'Av. Regimiento de Patricios 1142',
        src: 'http://tiles1.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/15/11070/13019.png',
      },
    },
  };

  private _ministryOfHealth: Area = {
    id: 10,
    name: 'Ministerio de Salud',
    information: {
      leader: {
        name: 'Fernán González Bernaldo de Quirós',
        position: 'Ministro de Salud',
        image: 'URL_DE_LA_IMAGEN',
      },
      contact: {
        emails: [
          'fquiros@buenosaires.gob.ar',
          'privadafqsalud@buenosaires.gob.ar',
          'ceremonialfqsalud@buenosaires.gob.ar',
        ],
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/BASalud/',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/saludba',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/BASalud',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Rivadavia 524',
        src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Rivadavia 524',
      },
    },
  };

  private _ministryOfPublicSpaceAndUrbanHygiene: Area = {
    id: 11,
    name: 'Ministerio de Espacio Público e Higiene Urbana',
    information: {
      leader: {
        name: 'Ignacio Miguel Baistrocchi',
        position: 'Ministro de Espacio Público e Higiene Urbana',
      },
      contact: {
        phone: '5030 9300',
        emails: ['ibaistrocchi@buenosaires.gob.ar'],
        address: 'Av. Martín García 346, 3° piso',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/BAciudadverde/',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/baciudadverde/',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'Youtube',
          url: 'https://www.youtube.com/channel/UC4n60PIGC6xk9TU2H3eVipw',
          icon: 'bx bxl-youtube',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/BACiudadVerde',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Garcia, Martin Av. 346',
        src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Garcia, Martin Av. 346',
      },
    },
  };

  private _ministryOfFinance: Area = {
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
  };

  private _ministryOfInfrastructure: Area = {
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
  };

  private _governmentAreas: { areas: Area[] } = {
    areas: [
      this._chiefOfGovernment,
      this._viceChiefOfGovernment,
      this._chiefOfCabinetOfMinisters,
      this._ministryOfCulture,
      this._ministryOfEconomicDevelopment,
      this._ministryOfHumanDevelopmentAndHousing,
      this._ministryOfEducation,
      this._ministryOfJustice,
      this._ministryOfSecurity,
      this._ministryOfHealth,
      this._ministryOfPublicSpaceAndUrbanHygiene,
      this._ministryOfFinance,
      this._ministryOfInfrastructure,
    ],
  };

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
    const area = this._governmentAreas.areas.find((area) => {
      return area.id === areaId;
    });

    if (!area) {
      throw new NotFoundException(`Area with id ${areaId} not found`);
    }

    return area;
  }
}
