/*
*       
*       To run the tests, open the terminal with [Ctrl + `] (backtick)
*       and run the command `npm run test`
*
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    
  suite('File upload => file JSON response', function () {
    
    test('Returns the expected file metadata as a JSON response', function (done) {

      chai.request(server)
        .post('/api/fileanalyze')
        .attach('upfile', './tests/fcc_primary_large.svg') // 'upfile' here to mimic input name attribute
        .end((err, res) => {
          const expected = {
            "name": "fcc_primary_large.svg",
            "type": "image/svg+xml",
            "size": 38414
          }
          
          assert.deepStrictEqual(res.body, expected);
          done();
        });
    });
    
  });

});
