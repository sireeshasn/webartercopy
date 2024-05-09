const request = require('request');
const expect = require('chai').expect;

describe('User Unit Test', function() {
    url = "http://localhost:3000/api/user"

    describe('POST User', () => {
        it('should create a new user', (done) => {
          const postData = {
            id: '1',
            name: 'My User'
          };
      
          request.post({
            url: url,
            json: postData
          }, (error, response, body) => {
            if (error) {
              done(error);
              return;
            }
      
            const responseData = body;
            expect(response.statusCode).to.equal(200);

            expect(responseData.message).to.equal("post user success")
      
            done();
          });
        });
      });
  
    describe('GET User', () => {
        it('should return users', (done) => {
          request.get(url, (error, response, body) => {
            if (error) {
              done(error);
              return;
            }
    
            expect(response.statusCode).to.equal(200);
            const responseData = JSON.parse(body);

            expect(responseData.message).to.equal("get user success")
      
            // expect(responseData.data[0]["id"]).to.equal("1");
            // expect(responseData.data[0]["name"]).to.equal("My User");
            done();
          });
        });
      });

      describe('Delete User', () => {
        it('should delete a user', (done) => {
          const deleteData = {
            id: '1',
            name: 'My User'
          };
      
          request.delete({
            url: url,
            json: deleteData
          }, (error, response, body) => {
            if (error) {
              done(error);
              return;
            }
      
            const responseData = body;
            expect(response.statusCode).to.equal(200);

            expect(responseData.message).to.equal("delete user success")
      
            done();
          });
        });
      });
});
