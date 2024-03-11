import fs from "fs/promises";
import { listContacts ,getContactById, removeContact,addContact} from "../goit-node-cli/contacts.js";
import { program } from "commander";



const invokeAction =async({action, id, name, email, phone})=>{
  switch (action) {
    case listContacts:
    const getAllContacts = await listContacts();
    return console.log(getAllContacts);

    case getContactById:
    const getOneContact = await getContactById(id);
    return console.log(getOneContact);

    case removeContact:
      const remOneContact = await removeContact(id);
      return console.log(remOneContact);

      case addContact:
        const addOneContact = await addContact({name, email, phone});
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
console.log(resultsOptions);

invokeAction(resultsOptions)