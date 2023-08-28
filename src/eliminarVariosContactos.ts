import { Contacto,contactos } from "./contactos";
function eliminarVariosContactos(ref: string) {
    let listaContactos : Contacto[] = [];
    listaContactos = contactos.filter(contacto => contacto.gender != ref)
    return listaContactos;
}
export {eliminarVariosContactos};