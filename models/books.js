import { pool } from "../db/index.js";

export async function getBooks() {
  // Query the database and return all books
  try {
    const getAll = await pool.query('SELECT * FROM books');
    return getAll.rows;
  } catch (error) {
    // Handle the error (e.g., log it, throw a custom error, etc.)
    console.error('Error fetching books:', error);
    throw new Error('Failed to fetch books');
  }
}

export async function searchBooksByTitle(searchTerm) {
  // Query the database and return all books that have a matching title matching the searchTerm
  try {
    const byTitle = await pool.query(`SELECT * FROM  books WHERE title ILIKE $1`, [`%${searchTerm}%`]);
    return byTitle.rows;
  }

  catch(error) {
// Handle the error (e.g., log it, throw a custom error, etc.)
console.error('Error fetching Book:', error);
throw new Error('Failed to fetch Book');

} }

// export async function searchBooksByAuthor(searchTerm) {
//   // Query the database and return all books that have an author name matching the searchTerm
//   return [];
// }

// export async function getBookById(id) {
//   // Query the database and return the book with a matching id
//   return {};
// }

// export async function createBook(book) {
//   // Query the database to create a book and return the newly created book
//   return {};
// }

// export async function updateBookById(id, updates) {
//   // Query the database to update a book and return the newly updated book
//   return {};
// }

// export async function deleteBookById(id) {
//   // Query the database to delete a book and return the deleted book
//   return {};
// }
