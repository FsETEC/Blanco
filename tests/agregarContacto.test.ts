import { agregarContacto } from "../src/agregarContacto";
import { Contacto } from "../src/contactos";

describe("agregarContacto", () => {
  test("agregar un contacto", () => {
    let nuevoContacto : Contacto = {
        id:11,
        first_name:"Facu",
        last_name: "Scigliano",
        email:"fsscigliano@gmail.com",
        gender:"Male",
        ip_address:"10.120.8.2"
    };
    const contactos: Contacto[] = agregarContacto(nuevoContacto);
    expect(contactos).toHaveLength(11);
  });
  test("agregar un contacto distinto", () => {
    let nuevoContacto : Contacto = {
        id:12,
        first_name:"Dani",
        last_name: "Bobadilla",
        email:"dbobadilla@etec.uba",
        gender:"Male",
        ip_address:"192.158.10.6"
    };
    const contactos: Contacto[] = agregarContacto(nuevoContacto);
    expect(contactos).toHaveLength(11);
  });
});