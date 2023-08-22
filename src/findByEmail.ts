import { contactos } from "./contactos";
import { Contacto } from "./contactos";
function findByEmail(ref: string) {
  let listaContactos: Contacto[] = [];
  contactos.forEach((contacto) => {
    if (contacto.email.includes(ref)) {
      listaContactos.push(contacto);
    }
  });
  return listaContactos;
}
export { findByEmail };
