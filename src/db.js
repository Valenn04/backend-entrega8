import { config } from './config.js'; 
import _knex from 'knex';
export const knex = _knex(config)