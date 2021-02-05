import {describe, it} from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Ping", () => {
    it("GET /", async () => {
        const response = await chai.request(app).get('/');

        response.should.have.status(200);
        response.body.should.be.a('object');
    })
});

describe("Shows", () => {
    it("GET /api/shows", async () => {
        const response = await chai.request(app)
            .get('/api/shows');

        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.should.have.length(1);
    })

    it("GET /api/shows/:showId", async () => {
        const response = await chai.request(app)
            .get('/api/shows/1');

        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('id', 1)
    })
});