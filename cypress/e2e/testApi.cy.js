
const user = require("../fixtures/user");
const newuser = require("../fixtures/newuser");
describe('test user', () => {
  beforeEach(()=> {
    cy.visit('/')
  })

  it('Create User', () => {
    cy.request('POST', 'v2/user', user).then((response)=> {
      expect(response.status).be.eq(200);
    })
  })

  it("Update the user", () => {
    
    cy.request("PUT", `v2/user/${user.username}`,
    newuser).then((response) => {
      expect(response.status).to.eq(200);
    });

  cy.request("GET", `v2/user/${newuser.username}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq(newuser);
    });
  });

it("Should delete the user", () => {
  cy.request("POST", 'v2/user', newuser).then(
    (response) => {
      expect(response.status).to.eq(200);
      cy.request(
        "DELETE",
        `v2/user/${newuser.username}`
      ).then((response) => {
        expect(response.status).to.eq(200);
      });
    }
  );
});
  });

