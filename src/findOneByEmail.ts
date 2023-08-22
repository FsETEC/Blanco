import { Contacto, contactos } from "./contactos";
function findOneByEmail(ref: string) {
  let nuevoContacto: Contacto = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  };
  contactos.forEach((contacto) => {
    if (contacto.email == ref) {
      nuevoContacto = contacto;
    }
  });
  return nuevoContacto;
}
export { findOneByEmail };
