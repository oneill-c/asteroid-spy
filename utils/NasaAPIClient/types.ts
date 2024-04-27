import camelcaseKeys from "camelcase-keys";

export interface Config {
  baseUrl?: string;
}

export interface HttpRequest {
  path: string;
  method: string;
  params?: URLSearchParams;
}

export interface HttpResponse<T> extends Response {
  data: T;
}

/**
 * NEOs
 */
export interface Link {
  next: string;
  prev: string;
  self: string;
}

export interface EstimatedDiameter {
  kilometers: {
    estimatedDiameterMin: number;
    estimatedDiameterMax: number;
  };
  meters: {
    estimatedDiameterMin: number;
    estimatedDiameterMax: number;
  };
  miles: {
    estimatedDiameterMin: number;
    estimatedDiameterMax: number;
  };
  feet: {
    estimatedDiameterMin: number;
    estimatedDiameterMax: number;
  };
}

export interface RelativeVelocity {
  kilometersPerSecond: string;
  kilometersPerHour: string;
  milesPerHour: string;
}

export interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

export interface CloseApproachData {
  closeApproachDate: string;
  closeApproachDateFull: string;
  epochDateCloseApproach: number;
  relativeVelocity: RelativeVelocity;
  missDistance: MissDistance;
  orbitingBody: string;
}

export interface NearEarthObject {
  links: {
    self: string;
  };
  id: string;
  neoReferenceId: string;
  name: string;
  nasaJplUrl: string;
  absoluteMagnitudeH: number;
  estimatedDiameter: EstimatedDiameter;
  isPotentiallyHazardousAsteroid: boolean;
  closeApproachData: CloseApproachData[];
  isSentryObject: boolean;
}

export interface NEOData {
  links: Link;
  elementCount: number;
  nearEarthObjects: { [date: string]: NearEarthObject[] };
}
