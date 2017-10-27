const should = require('chai').should,
expect = require('chai').expect;
const supertest  =  require('supertest');
const chai = require('chai');
const chai_http = require('chai-http');
const server = require('../index');

chai.use(chai_http);

describe('Products', function() {
	describe('/GET products', () => {
		it('it should GET all the products', (done) => {
		chai.request(server)
			.get('/api/products')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.be.an('array');
				done();
			});
		});
	});

});