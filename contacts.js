import fs from "fs/promises";
import path from "path";
import { nanoid } from 'nanoid'

const contactsPath  = path.resolve("db","contacts.json")

export async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8")
  return JSON.parse(data)
}

export async function getContactById(contactId) {
  const listAllContacts = await listContacts()
  const contactsById = listAllContacts.find(el=> el.id === contactId)
  return contactsById || null ;
}

export async function removeContact(contactId) {
  const listAllContacts = await listContacts()
  const indexforDelete = listAllContacts.findIndex( el => el.id===contactId)
  console.log(indexforDelete);
if(indexforDelete === -1){
  return null;
}
const [result] = listAllContacts.splice(indexforDelete, 1)
await fs.writeFile(contactsPath, JSON.stringify(listAllContacts , null , 1));
return result
  
}

 export async function addContact(data) {
  const listAllContacts = await listContacts()
  const newContact = {
    id:nanoid(),
    ...data
  }
  listAllContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(listAllContacts , null , 1));
  return newContact;
}
