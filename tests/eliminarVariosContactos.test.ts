import { eliminarVariosContactos } from "../src/eliminarVariosContactos";
import { Contacto } from "../src/contactos";

describe("eliminarVariosContactos", () => {
  test("debe eliminar los contactos que tengan genero masculino", () => {
    const contactos: Contacto[] = eliminarVariosContactos("Male");
    expect(contactos).toHaveLength(4);
  });
  test("debe eliminar los contactos que tengan genero femenino", () => {
    const contactos: Contacto[] = eliminarVariosContactos("Female");
    expect(contactos).toHaveLength(8);
  });
});