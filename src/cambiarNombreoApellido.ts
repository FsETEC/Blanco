import { Contacto,contactos } from "../src/contactos";

function cambiarNombreoApellido(indice:number,clave:string,nick : string) {
    let contacto : Contacto = contactos[indice];
    if (contacto.first_name == clave){
        contacto.first_name = nick;
        return contacto
    }
    if (contacto.last_name == clave){
        contacto.last_name = nick
        return contacto
    }
    return contacto
}
export {cambiarNombreoApellido}
