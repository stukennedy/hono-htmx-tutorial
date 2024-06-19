import { verbose } from "sqlite3";

const sqlite3 = verbose();
export const db = new sqlite3.Database("db.sqlite");

export type User = {
  id: number;
  name: string;
  email: string;
};

// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS users (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   name TEXT NOT NULL,
//   email TEXT UNIQUE NOT NULL
//   )`);
// });
