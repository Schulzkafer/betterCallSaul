const checkIfUserExists = (name, pool) => {
   return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM clients WHERE name = ? LIMIT 1`, [name], (error, elements) => {
         return (error) ? reject(error) : resolve(elements)
      });
   });
}

const registerUser = (name, pool) => {
   return new Promise((resolve, reject) => {
      pool.query(`INSERT INTO clients(name, isAssigned) VALUES(?, 0)`, [name], (error, elements) => {
         return (error) ? reject(error) : resolve(elements)
      });
   });
}

module.exports = {
   checkIfUserExists,
   registerUser
} 