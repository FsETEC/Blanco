import { Contacto,contactos } from "../src/contactos";

function editarEmail(id:number,email : string) {
    let contacto : Contacto = {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        ip_address: "",
      };
    contactos.forEach(cont => {
        if (cont.id == id) {
            contacto = cont
            cont.email = email
        }
    });
    return contacto
}
export {editarEmail}
