import { db, User } from "./db";

export const getAllUsers = async () => {
  const users = await new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
  return users as unknown as User[];
};
