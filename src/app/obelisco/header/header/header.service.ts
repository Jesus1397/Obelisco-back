import { Injectable } from '@nestjs/common';

@Injectable()
export class HeaderService {
  private host = process.env.HOST || 'http://localhost:3000';

  private _headerImageData = [
    {
      id: 1,
      name: 'logotipo_ba.svg',
      alt: 'Gobierno de la Ciudad de Buenos Aires - Inicio',
      url: `${this.host}/api/obelisco/header/image/1`,
    },
  ];

  public get headerImageData() {
    return this._headerImageData;
  }
}
