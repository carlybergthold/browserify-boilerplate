// A Contact component that displays a person's name, phone number, and address.

const contactBuilder = {
    getContactObject: function () {
        const nameInput = document.querySelector("#nameInput").value;
        const phoneInput = document.querySelector("#phoneInput").value;
        const addressInput = document.querySelector("#addressInput").value;

        const newContact = {
            name: nameInput,
            phone: phoneInput,
            address: addressInput
        }

        return newContact;
    },
    getContactHTML: function (obj) {
        return `
            <section id="contact--${obj.id}" class="contactCard">
                <p><strong>${obj.name}</strong></p>
                <p>${obj.phone}</p>
                <p>${obj.address}</p>
            </section>
        `
    }
}

export default contactBuilder

