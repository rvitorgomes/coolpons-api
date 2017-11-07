const should = require('chai').should,
expect = require('chai').expect;
const supertest  =  require('supertest');
const chai = require('chai');
const chai_http = require('chai-http');
const server = require('../index');

chai.use(chai_http);

describe('Users', function() {
	describe('/GET users', () => {
		it('it should GET all the users', (done) => {
		chai.request(server)
			.get('/api/users')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;;
				done();
			});
		});
	});

	describe('/GET users', () => {
		it('should add a SINGLE user on /users POST', function(done) {
		  chai.request(server)
		    .post('/api/users')
		    .send({
			'user_id': 999,
			'name': 'Jully',
			'email': 'jully@oi.com.br',
			'birthdate': '1997-06-17 00:00:00',
			'picture': null
		    })
		    .end((err, res) => {
			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body).to.be.an('object');
			expect(res.body).not.to.be.empty;
			expect(res.body).to.have.property('user_id');
			expect(res.body).to.have.property('email');
			expect(res.body).to.have.property('birthdate');
			expect(res.body).to.have.property('picture');
	        expect(res.body.name).to.equal('Jully');
		    done();
		    });
		});
	})
});
