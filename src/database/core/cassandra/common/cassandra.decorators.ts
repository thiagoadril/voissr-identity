import { Inject } from '@nestjs/common';
import { getConnectionToken, getModelToken } from './cassandra.utils';

export const InjectModel = (model: string) => Inject(getModelToken(model));
export const InjectConnection = (name?: string) =>
  Inject(getConnectionToken(name));
