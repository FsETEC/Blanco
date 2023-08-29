import { Contacto, contactos } from "../src/contactos";

function cambiarNombre({ id,nombre}: { id: number,nombre: string }) {
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
            contacto.first_name = nombre
        }
    });
    return contacto
}
function cambiarApellido({ id,apellido}: { id: number,apellido: string }) {
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
            contacto.last_name = apellido
        }
    });
    return contacto
}
export { cambiarNombre,cambiarApellido }
