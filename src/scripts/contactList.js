// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

import contactData from "./contactCollection"
import contactBuilder from "./contact"

const contactList = {
    displayContacts: function () {
        contactData.getContacts()
        .then(data => data.forEach(contact => {
            console.log(contact);
            let contactHTML = contactBuilder.getContactHTML(contact);
            document.querySelector(".output").innerHTML += contactHTML;
        }))
    }
}

export default contactList