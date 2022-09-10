var expect  = require('chai').expect;
var request = require('request');

describe('Item API Test Start', () => {
  describe(`Test Root API's`, () => {
    it('GET /', (done) => {
      request('http://localhost:3000/', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal('Node JS API Unit Test');
        done();
      })
    });
  });

  describe(`Get all items API's`, () => {
    it('GET /api/item', (done) => {
      request('http://localhost:3000/api/item', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.be.an('object');
        done();
      })
    });
  });

  describe(`Get items By Id API's`, () => {
    it('GET /api/item/:id', (done) => {
      request('http://localhost:3000/api/item/14', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.be.an('object');
        done();
      })
    });

    it('GET /api/item/0', (done) => {
      request('http://localhost:3000/api/item/0', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.be.an('object');
        done();
      })
    });

    it('GET /api/item/r', (done) => {
      request('http://localhost:3000/api/item/r', (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        done();
      })
    });
  });

  describe(`Create items API's`, () => {
    it('POST /api/item', (done) => {
      request('http://localhost:3000/api/item', {
        method: 'POST',
        body: JSON.stringify({
          "title": "sdddfdfgsfh",
          "body": "dfgfdshghgh"
        })
      }, (error, response, body) => {
        console.log(error, response.statusCode, body)
        // expect(response.statusCode).to.equal(200);
        // expect(JSON.parse(body)).to.be.an('object');
        done();
      })
    });
  });


});
