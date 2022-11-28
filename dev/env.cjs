// why .cjs? @see https://nodejs.org/api/cli.html#cli_r_require_module
const { existsSync } = require('fs');
const { resolve } = require('path');

const envSuffix = (process.env.NODE_ENV || '').toLowerCase();
let envFile = '.env' + (envSuffix ? `.${envSuffix}` : '');
let envPath = resolve(__dirname, '..', envFile);

// Check if suffixed env exists if not fallback to .env
if (!existsSync(envPath)) {
    envFile = '.env';
    envPath = resolve(__dirname, '..', envFile);
}

// Load env file if exists
if (existsSync(envPath)) {
    require('dotenv').config({ path: envPath });
}