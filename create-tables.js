import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS UserT;`.then(() => {console.log('Tabela UserT apagada!')})
// sql`DROP TABLE IF EXISTS Item;`.then(() => {console.log('Tabela Item apagada!')})


// sql`
//     CREATE TABLE UserT (
//         user_id SERIAL NOT NULL PRIMARY KEY,
//         user_name TEXT,
//         email TEXT NOT NULL,
//         password TEXT NOT NULL
//     );
// `.then(() => {
//     console.log('Tabela UserT criada')
// })

// sql`
//     CREATE TABLE Item (
//         uid TEXT NOT NULL PRIMARY KEY,
//         user_id SERIAL NOT NULL,
//         description TEXT NOT NULL,
//         safe BOOLEAN NOT NULL,
//         CONSTRAINT fk_user_id FOREIGN KEY (user_id)
//         REFERENCES UserT(user_id) ON DELETE CASCADE
//     );
// `.then(() => {
//     console.log('Tabela Item criada')
// })

//sql`INSERT INTO UserT (user_name, email, password) 
//    VALUES ('Leonardo', 'leonardobbrandao@hotmail.com', '123456789');
//`.then(() => { console.log('Usuário inserido!') })

// sql`INSERT INTO UserT (user_name, email, password) 
//    VALUES ('João Vitor Lima', 'jvlima@gmail.com', 'ABCDEFGHIJK');
// `.then(() => { console.log('Usuário inserido!') })

sql`INSERT INTO UserT (user_name, email, password) 
   VALUES ('', 'gustavo@outlook.com', '21313213');
`.then(() => { console.log('Usuário inserido!') })