import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.DB_CONNECTION_STRING;
console.log(connectionString);

if (!connectionString) {
  throw new Error("No DB_CONNECTION_STRING defined. Did you load in your env variables?");
} 

export const pool = new pg.Pool({
  connectionString,
});