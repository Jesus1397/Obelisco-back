import { Injectable } from '@nestjs/common';
import { ObeliscoVersion } from './interfaces/versions.interfaces';
import { OBELISCO_VERSIONS } from './constant/versions.constant';

@Injectable()
export class VersionsService {
  private _obeliscoVersions: { versions: ObeliscoVersion[] } =
    OBELISCO_VERSIONS;
  private _obeliscoVersionsAsc: { versions: ObeliscoVersion[] } = {
    versions: [],
  };
  private _obeliscoVersionsDesc: { versions: ObeliscoVersion[] } = {
    versions: [],
  };

  constructor() {
    this.sortVersions();
  }

  private sortVersions() {
    const versions = this._obeliscoVersions.versions;

    this._obeliscoVersionsAsc = {
      versions: [...versions].sort((a, b) =>
        this.compareVersions(b.version, a.version),
      ),
    };

    this._obeliscoVersionsDesc = {
      versions: [...versions].sort((a, b) =>
        this.compareVersions(a.version, b.version),
      ),
    };
  }

  private compareVersions(versionA: string, versionB: string): number {
    const partsA = versionA.split('.').map(Number);
    const partsB = versionB.split('.').map(Number);

    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
      const partA = partsA[i] || 0;
      const partB = partsB[i] || 0;

      if (partA < partB) {
        return -1;
      }
      if (partA > partB) {
        return 1;
      }
    }

    return 0;
  }

  public get versionsAllData(): { versions: ObeliscoVersion[] } {
    return this._obeliscoVersionsAsc;
  }

  public get versionsAllDataDesc(): { versions: ObeliscoVersion[] } {
    return this._obeliscoVersionsDesc;
  }
}
