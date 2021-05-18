import fetch from "node-fetch";

const BASE_URL = `https://insulin-logger.herokuapp.com`;

// Returns status 200 if user was crated.
const SIGNUP_URL = `${BASE_URL}/auth/signup`;

const LOGIN_URL = `${BASE_URL}/auth/login`;

const LOGBOOKS_URL = `${BASE_URL}/logbooks/`; // GET Retrieves, POST Creates
