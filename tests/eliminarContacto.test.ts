import { eliminarContacto } from "../src/eliminarContacto";
import { Contacto } from "../src/contactos";

describe("eliminarContacto", () => {
  test("debe eliminar un contacto con id 1", () => {
    const contactos: Contacto[] = eliminarContacto(1);
    expect(contactos).toHaveLength(9);
  });
  test("debe eliminar un contacto con id 6", () => {
    const contactos: Contacto[] = eliminarContacto(6);
    expect(contactos).toHaveLength(9);
  });
});
