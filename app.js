// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

let id = 6;

try {
  central(id).then(async (returnedValue) => {
    console.log(returnedValue);
    const basicInfo = await getBasicInfo(returnedValue, id);
    const personalInfo = await getPersonalInfo(id);
  });
} catch {
  console.log("central error");
}

async function getBasicInfo(returnedValue, id) {
  let userDB = returnedValue;
  try {
    if (userDB === "db1") {
      db1(id).then((basicInfo) => {
        console.log(basicInfo);
      });
    } else if (userDB === "db2") {
      db2(id).then((basicInfo) => {
        console.log(basicInfo);
      });
    } else if (userDB === "db3") {
      db3(id).then((basicInfo) => {
        console.log(basicInfo);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPersonalInfo(id) {
  try {
    vault(id).then((pInfo) => {
      console.log(pInfo);
    });
  } catch (error) {
    console.log(error);
  }
}