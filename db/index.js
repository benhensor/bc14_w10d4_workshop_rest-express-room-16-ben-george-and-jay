import pg from "pg";

// BH woz here

const connectionString = process.env.DB_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("No DB_CONNECTION_STRING defined. Did you load in your env variables?");
} 

export const pool = new pg.Pool({
  connectionString,
});