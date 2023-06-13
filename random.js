// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
    const dbs = {
      db1: db1,
      db2: db2,
      db3: db3
    };


const promise = new Promise((resolve) => {
let db = central(id);
return db;
    // if(dbs.hasOwnProperty(db)){
    //     console.log(db);
    //     resolve(db)
    // }
});
}

async function userThing(id) {
    const chooseDB = await getDatabase(id);
    console.log(chooseDB);
}

async function getDatabase(id) {
    console.log("getDatabase");
    return central(id);
}

userThing(1);