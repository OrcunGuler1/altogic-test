import { createClient } from "altogic"
const ENV_URL = "https://fyjz-ead3.c1-na.altogic.com"
const CLIENT_KEY = "28162e19ad0d4362beb8ffdbce331dee"
export const altogic = createClient(ENV_URL, CLIENT_KEY)
