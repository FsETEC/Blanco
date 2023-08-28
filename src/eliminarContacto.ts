import { Contacto,contactos } from "../src/contactos";

function eliminarContacto(id:number) {
    let listaContactos : Contacto[] = [];
    listaContactos = contactos.filter(contacto => contacto.id !== id)
    return listaContactos;
}
export {eliminarContacto}