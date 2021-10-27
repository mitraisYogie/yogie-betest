import chai from 'chai'
import chaiHttp from 'chai-http';
import mongoose from "mongoose";
import server from '../index.js';
import userModel from '../models/User.js';

const should = chai.should()

chai.use(chaiHttp);
describe('API Test That Supposed To Fail', () => {
    // user all
    it('Failing Access All User API because lack of JWT token', (done) => {
        chai.request(server).get('/users/all').end((err, res) => {
            if(err) done(err)
            res.should.have.status(403);
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    it("Failing access All User API because invalid JWT token", (done) => {
        chai.request(server).get('/users/all')
        .set({
            "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfYXBpIjp0cnVlLCJpYXQiOjE2MzUyOTc4NDEsImV4cCI6MTYzNTI5ODE0MX0.rsDIxLGoiyBQlDbYnlLljlJU2TTYGfgvb7pjGlHWcVE"
        })
        .end((err, res) => {
            res.should.have.status(401)
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    // get user by account num
    it('Failing Access getUserByAccountNum API because lack of JWT token', (done) => {
        chai.request(server).get('/users/accountNum/0987654321').end((err, res) => {
            if(err) done(err)
            res.should.have.status(403);
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    it("Failing access getUserByAccountNum API because invalid JWT token", (done) => {
        chai.request(server).get('/users/accountNum/0987654321')
        .set({
            "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfYXBpIjp0cnVlLCJpYXQiOjE2MzUyOTc4NDEsImV4cCI6MTYzNTI5ODE0MX0.rsDIxLGoiyBQlDbYnlLljlJU2TTYGfgvb7pjGlHWcVE"
        })
        .end((err, res) => {
            res.should.have.status(401)
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    // get user by Identity Num
    it('Failing Access getUserByIdentityNum API because lack of JWT token', (done) => {
        chai.request(server).get('/users/identityNumber/91827364017').end((err, res) => {
            if(err) done(err)
            res.should.have.status(403);
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    it("Failing access getUserByAccountNum API because invalid JWT token", (done) => {
        chai.request(server).get('/users/identityNumber/91827364017')
        .set({
            "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfYXBpIjp0cnVlLCJpYXQiOjE2MzUyOTc4NDEsImV4cCI6MTYzNTI5ODE0MX0.rsDIxLGoiyBQlDbYnlLljlJU2TTYGfgvb7pjGlHWcVE"
        })
        .end((err, res) => {
            res.should.have.status(401)
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    // create data
    it('Failing Create User Data API because lack of JWT token', (done) => {
        chai.request(server).post('/users/create').send({
            userId : '788',
            userName : 'pelanggan788',
            accountNumber : "12345678904",
            emailAddress : 'pelanggan788@mail.net',
            identityNumber : 12847365904
        }).end((err, res) => {
            if(err) done(err)
            res.should.have.status(403);
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    it("Failing Create User Data API because invalid JWT token", (done) => {
        chai.request(server).post('/users/create').send({
            userId : '788',
            userName : 'pelanggan788',
            accountNumber : "12345678904",
            emailAddress : 'pelanggan788@mail.net',
            identityNumber : 12847365904
        })
        .set({
            "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfYXBpIjp0cnVlLCJpYXQiOjE2MzUyOTc4NDEsImV4cCI6MTYzNTI5ODE0MX0.rsDIxLGoiyBQlDbYnlLljlJU2TTYGfgvb7pjGlHWcVE"
        })
        .end((err, res) => {
            res.should.have.status(401)
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    // update data
    it('Failing Update User Data API because lack of JWT token', (done) => {
        chai.request(server).patch('/users/update/accountNum/98237531923').send({
            userId : 'us3rId',
            userName : 'foo',
            accountNumber : 26135488643,
            emailAddress : 'foo@mail.net',
            identityNumber : 91827364017
        }).end((err, res) => {
            if(err) done(err)
            res.should.have.status(403);
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    it("Failing Update User Data API because invalid JWT token", (done) => {
        chai.request(server).patch('/users/update/identityNumber/91827364017').send({
            userId : 'us3rId',
            userName : 'foo',
            accountNumber : 98237531923,
            emailAddress : 'foo@mail.net',
            identityNumber : 26135488643
        })
        .set({
            "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfYXBpIjp0cnVlLCJpYXQiOjE2MzUyOTc4NDEsImV4cCI6MTYzNTI5ODE0MX0.rsDIxLGoiyBQlDbYnlLljlJU2TTYGfgvb7pjGlHWcVE"
        })
        .end((err, res) => {
            res.should.have.status(401)
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    // delete data
    it('Failing Delete User Data API because lack of JWT token', (done) => {
        chai.request(server).delete('/users/delete/accountNum/98237531923').end((err, res) => {
            if(err) done(err)
            res.should.have.status(403);
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })

    it("Failing Delete User Data API because invalid JWT token", (done) => {
        chai.request(server).delete('/users/delete/identityNumber/91827364017')
        .set({
            "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfYXBpIjp0cnVlLCJpYXQiOjE2MzUyOTc4NDEsImV4cCI6MTYzNTI5ODE0MX0.rsDIxLGoiyBQlDbYnlLljlJU2TTYGfgvb7pjGlHWcVE"
        })
        .end((err, res) => {
            res.should.have.status(401)
            res.should.be.json;
            res.body.should.have.property('message');
            done();
        })
    })
})

describe('API Test supposed to success', () => {
    it('Generate JWT Token and Create User Data', (done) => {
        // generate jwt
        chai.request(server)
        .get('/jwt/generate')
        .end((err, res)=>{
            res.body.should.have.property('token');
            let token = res.body.token;
            
            // create data
            chai.request(server)
            .post('/users/create').send({
                userId : '788',
                userName : 'pelanggan788',
                accountNumber : 49387462178,
                emailAddress : 'pelanggan788@mail.net',
                identityNumber : 12847365904
            })
            .set({
                "Authorization" : token
            })
            .end((err, res) => {
                res.should.have.status(201)
                res.should.be.json;
                res.body.should.have.property('message');
                done();
            })
        })
    })

    it("Generate JWT Token and request all User Data", (done) => {
        chai.request(server)
        .get('/jwt/generate')
        .end((err, res)=>{
            res.body.should.have.property('token');
            let token = res.body.token;
            
            // get all data
            chai.request(server)
            .get('/users/all')
            .set({
                "Authorization" : token
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array');
                res.should.be.json;
                done();
            })
        })
    })

    it("Generate JWT Token and Request user data by accountNumber Created on Prev Test", (done) => {
        chai.request(server)
        .get('/jwt/generate')
        .end((err, res)=>{
            res.body.should.have.property('token');
            let token = res.body.token;
            
            // get data
            chai.request(server).get('/users/accountNum/49387462178')
            .set({
                "Authorization" : token
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array');
                res.should.be.json;
                done();
            })
        })
    })

    it("Generate JWT Token and Request user data by identityNumber Created on Prev Test", (done) => {
        chai.request(server)
        .get('/jwt/generate')
        .end((err, res)=>{
            res.body.should.have.property('token');
            let token = res.body.token;
            
            // get data
            chai.request(server).get('/users/identityNumber/12847365904')
            .set({
                "Authorization" : token
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array');
                res.should.be.json;
                done();
            })
        })
    })

    it('update Created user data By accountNumber and change it', (done) => {
        chai.request(server)
        .get('/jwt/generate')
        .end((err, res)=>{
            res.body.should.have.property('token');
            let token = res.body.token;
            
            // get data
            chai.request(server).patch('/users/update/accountNum/49387462178').send({
                userId : '788',
                userName : 'foo',
                accountNumber : 26135488643,
                emailAddress : 'foo@mail.net',
                identityNumber : 12847365904
            })
            .set({
                "Authorization" : token
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json;
                res.body.should.have.property('acknowledged');
                res.body.acknowledged.should.equal(true)
                done();
            })
        })
    })

    it('update Created user data By identityNumber and change it', (done) => {
        chai.request(server)
        .get('/jwt/generate')
        .end((err, res)=>{
            res.body.should.have.property('token');
            let token = res.body.token;
            
            // get data
            chai.request(server).patch('/users/update/identityNumber/12847365904').send({
                userId : '788',
                userName : 'bar',
                accountNumber : 26135488643,
                emailAddress : 'bar@mail.net',
                identityNumber : 26135488643
            })
            .set({
                "Authorization" : token
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json;
                res.body.should.have.property('acknowledged');
                res.body.acknowledged.should.equal(true)
                done();
            })
        })
    })

    it("Delete User Data that created", (done)=>{
        chai.request(server)
        .get('/jwt/generate')
        .end((err, res)=>{
            res.body.should.have.property('token');
            let token = res.body.token;
            
            // get data
            chai.request(server).delete('/users/delete/accountNum/26135488643')
            .set({
                "Authorization" : token
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json;
                res.body.should.have.property('deletedCount');
                res.body.deletedCount.should.equal(1)
                done();
            })
        })
    })
})