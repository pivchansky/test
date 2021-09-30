export enum EnvironmentTypeEnum {
  PRODUCTION,
  DEV,
  MOCK
}

export interface EnvironmentInterface {
  type: EnvironmentTypeEnum;
  api: string;
}
