export const CRUD = 'CRUD';
export const COMMAND = 'COMMAND';

export type Events = 'CRUD' | 'COMMAND';

export enum IgorResultType {
  Success = 0,
  Error = 1,
  Timeout = 2,
  NotFound = 3,
  AccessDenied = 4,
}
export interface IgorResult<T> {
  type: IgorResultType;
  result?: T;
}
