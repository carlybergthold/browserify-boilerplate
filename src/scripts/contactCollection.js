// A ContactCollection component that loads existing contacts from a json-server API, and saves new ones.

import contactBuilder from "./contact"

const contactData = {
    getContacts: function () {
        return fetch("http://localhost:8088/contacts")
        .then(response => response.json())
    },
    saveContacts: function () {

        let object = contactBuilder.getContactObject();

        fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
    }
}

export default contactData


