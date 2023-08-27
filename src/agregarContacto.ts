import { Contacto,contactos } from "../src/contactos";

function agregarContacto(contacto:Contacto) {
    let listaContactos : Contacto[] = contactos
    listaContactos.push(contacto)
    return listaContactos
}
export {agregarContacto}