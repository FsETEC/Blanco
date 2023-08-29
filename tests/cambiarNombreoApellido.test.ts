import { cambiarNombre,cambiarApellido } from "../src/cambiarNombreoApellido";
import { Contacto } from "../src/contactos";

describe("cambiarNombre / cambiarApellido", () => {
  test("debe cambiar el nombre del contacto con id 1", () => {
    const contacto: Contacto = cambiarNombre({id: 1, nombre: "Alex"});
    expect(contacto.first_name).toBe("Alex");
  });
  test("debe cambiar el apellido del contacto con id 1", () => {
    const contacto: Contacto = cambiarApellido({id :1, apellido: "Barni"});
    expect(contacto.last_name).toBe("Barni");
  });
});