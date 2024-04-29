const request = require("supertest");

const app = require("../server");

discribe("test POST/auth/login", async () => {
  beforeAll(console.log("BEFORE ALL"));

  it("should return user obj and jwt");
  const testData = {
    //"should be mock fn"
    email: "test@h.com",
    password: "4352627",
  };

  const res = await request(app).post();
});
