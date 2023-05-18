import { pool } from "../db/index.js";

export async function getAuthors() {
  try {
    const getAll = await pool.query('SELECT * FROM authors');
    console.log('getAuthors');
    return getAll.rows;
  } catch (error) {
    // Handle the error (e.g., log it, throw a custom error, etc.)
    console.error('Error fetching authors:', error);
    throw new Error('Failed to fetch authors');
  }
}

 
export async function searchAuthorsByName(searchTerm) {
  // Query the database and rtry {eturn all authors that have a name matching the searchTerm
  try {
    const byName = await pool.query(`SELECT * FROM authors WHERE first_name || ' ' || last_name  ILIKE $1`, [`%${searchTerm}%`]);
    console.log('searchAuthorsByName');
    return [byName.rows];
  }

  catch(error) {
  // Handle the error (e.g., log it, throw a custom error, etc.)
  console.error('Error fetching author:', error);
  throw new Error('Failed to fetch author');
  }
}


export async function getAuthorById(id) {
  // Query the database and return the book with a matching id
  try {
    const byId = await pool.query(`SELECT * FROM authors WHERE id  = $1`, [`${id}`]);
    console.log('getAuthorById');
    return [byId.rows];
  }
 
  catch(error) {
  // Handle the error (e.g., log it, throw a custom error, etc.)
  console.error('Error fetching author:', error);
  throw new Error('Failed to fetch author');
  } 
  
}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author
  return {};
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author
  return {};
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author
  return {};
}
