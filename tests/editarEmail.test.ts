import { editarEmail } from "../src/editarEmail";
import { Contacto } from "../src/contactos";

describe("editarEmail", () => {
  test("debe cambiar el email segun el id 1", () => {
    const contacto: Contacto = editarEmail(1,"fsscigliano@gmail.com");
    expect(contacto.email).toBe("fsscigliano@gmail.com");
  });
  test("debe cambiar el email segun el id 4", () => {
    const contacto: Contacto = editarEmail(4,"fsscigliano@gmail.com");
    expect(contacto.email).toBe("fsscigliano@gmail.com");
  });
});