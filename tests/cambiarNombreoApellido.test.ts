import { cambiarNombreoApellido } from "../src/cambiarNombreoApellido";
import { Contacto } from "../src/contactos";

describe("cambiarNombreOApellido", () => {
  test("debe cambiar el nombre del contacto con indice en 0", () => {
    const contacto: Contacto = cambiarNombreoApellido(0,"Muhammad","Luca");
    expect(contacto.first_name).toBe("Luca");
  });
  test("debe cambiar el apellido del contacto con indice en 0", () => {
    const contacto: Contacto = cambiarNombreoApellido(0,"Alderwick","Barni");
    expect(contacto.last_name).toBe("Barni");
  });
});