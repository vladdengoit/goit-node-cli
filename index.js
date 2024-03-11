import fs from "fs/promises";
import { list ,get, remove,add} from "../goit-node-cli/contacts.js";
import { program } from "commander";



const invokeAction =async({action, id, name, email, phone})=>{
  switch (action) {
    case "list":
    const getAllContacts = await list();
    return console.log(getAllContacts);

    case "get":
    const getOneContact = await get(id);
    return console.log(getOneContact);

    case "remove":
      const remOneContact = await remove(id);
      return console.log(remOneContact);

      case "add":
        const addOneContact = await add({name, email, phone});
        return console.log(addOneContact);

    default:
    console.log("Unknown command!!!");
      }
}
program
    .option("-a, --action, <type>")
    .option("-i, --id, <type>")
    .option("-n, --name, <type>")
    .option("-e, --email, <type>")
    .option("-p, --phone, <type>");

program.parse();

const resultsOptions = program.opts();
// console.log(resultsOptions);

invokeAction(resultsOptions)