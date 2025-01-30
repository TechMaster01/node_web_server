import 'dotenv/config'
// require('dotenv').config();
import envVar from 'env-var';
// const {get} = require('env-var');

const { get } = envVar;

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
};