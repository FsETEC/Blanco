import { Contacto, contactos } from "../src/contactos";
function updateIPAddress(listaContactos: Contacto[]) {
  let contactosActualizados: Contacto[] = [];
  listaContactos.forEach((contacto) => {
    contacto.ip_address = contacto.ip_address + "." + contacto.id;
    contactosActualizados.push(contacto);
  });
  return contactosActualizados;
}
export { updateIPAddress };
