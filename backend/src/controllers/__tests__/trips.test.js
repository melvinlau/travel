const mongoose = require('mongoose');
const httpMocks = require('node-mocks-http');
const Trip = require('../../models/trip');
const tripsController = require('../trips');

const tripController = describe('Trips tests', () => {
  beforeAll(async () => {
    const mongoDB = 'mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    await Trip.remove({});
  });

  beforeEach(async () => {
    const trip = new Trip({
      id: 1, destination: 'Sydney', dateFrom: '2020-05-01', dateTo: '2020-05-05',
    });
    await trip.save();
  });

  afterEach(async () => {
    await Trip.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('Trip model test', () => {
    it('has a module', () => {
      expect(Trip).toBeDefined();
    });
  });

  describe('creates and saves a trip successfully', () => {
    it('gets a trip', async () => {
      const foundTrip = await Trip.findOne({ destination: 'Sydney' });
      expect(foundTrip.destination).toEqual('Sydney');
    });
  });

  describe('creates and saves a trip successfully', () => {
    it('gets a trip', async () => {
      const req = httpMocks.createRequest({
        params: { id: 1 },
      });
      const res = httpMocks.createResponse();
    });
  });


  // need to stub/mock middleware

  // describe('sets trip items appropriately based on activities', () => {
  //   it('gets a trip', async () => {
  //     const reqMock = {
  //       body: { activities: ['beach'] },
  //       params: { tid: 1 },
  //     };
  //     updatedTrip = await tripsController.updateTrip(reqMock);
  //     expect(updatedTrip).toEqual(['Tshirt']);
  //   });
  // });

  // describe('sets trip items appropriately based on activities', () => {
  //   it('gets a trip', async () => {
  //     const req = httpMocks.createRequest({
  //       params: { id: 1 }
  //     });
  //     const res = httpMocks.createResponse();
  //     return getThings(req, res).then((response) => {
  //       assert.equal(Array.isArray(response.things), 'true');
  //     });
  //   });
  // });

  // test('getThings resolves to an array of objects', (assert) => {
  //   const req = httpMocks.createRequest({
  //     params: { id: '12345' }
  //   });
  //   const res = httpMocks.createResponse();
  //   return getThings(req, res).then((response) => {
  //     assert.equal(Array.isArray(response.things), 'true');
  //   });
});