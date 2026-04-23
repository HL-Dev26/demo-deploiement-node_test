const request = require("supertest");
const app = require("./index");

describe("Tests de l'application Express", () => {
  
  // Test 1
  test("La route racine doit retourner du HTML", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Application déployée");
  });

  // Test 2
  test("Le health check doit retourner le bon JSON", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
    
  });

});