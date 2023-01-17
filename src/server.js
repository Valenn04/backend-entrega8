import express from 'express';
import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
