// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getData(id) {
  try {
    const chooseDB = await getDatabase(id);
    const basicInfo = await getBasicInfo(chooseDB, id);
    const personalInfo = await getPersonalInfo(id);
    console.log(basicInfo);
    console.log(personalInfo);
  } catch (error) {
    if (typeof id !== "number") {
      console.log("Invalid Input -- Not a Number");
    }
    if (id < 1 || id > 10) {
      console.log("Invalid Input -- Out of Range");
    }
  }
}

async function getBasicInfo(chooseDB, id) {
  console.log("getbasicInfo");

  if (chooseDB === "db1") {
    return db1(id);
  } else if (chooseDB === "db2") {
    return db2(id);
  } else if (chooseDB === "db3") {
    return db3(id);
  } else {
    console.log("error selecting database");
  }
}

async function getDatabase(id) {
  console.log("getDatabase");
  return central(id);
}

async function getPersonalInfo(id) {
  console.log("getPersonalInfo");
  return vault(id);
}

getData(1);
