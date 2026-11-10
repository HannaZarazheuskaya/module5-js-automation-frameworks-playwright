import { test, expect } from '../fixtures/index.js';
import { Booking } from '../api/booking.js';
import { credentials, createBooking, updateBooking } from '../testdata/apiData.js';

test.describe('Manage booking using specific token', () => {
    test.describe.configure({ mode: 'serial' });

    let apiContext;
    let bookingClient;
    let token;
    let bookingId;

    test.beforeAll('should create token', async ({playwright}) => {
        apiContext = await playwright.request.newContext();
        bookingClient = new Booking(apiContext);
        token = await bookingClient.createToken(credentials);
        
        expect(token).toBeTruthy();
    });

    test.afterAll(async() => {
        if (apiContext) {
            await apiContext.dispose();
        }
    });


    test('should create a booking', async() => {
        const {data, response} = await bookingClient.createBooking(createBooking);

        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('application/json');

        expect(data.bookingid).toBeDefined();
        expect(data.booking.firstname).toBe(createBooking.firstname);
        expect(data.booking.lastname).toBe(createBooking.lastname);
        
        bookingId = data.bookingid;
    });


    test('should get created booking by id', async() => {
        const {data, response} = await bookingClient.getBookingById(bookingId);
        
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('application/json');
        expect(data.firstname).toBe(createBooking.firstname);
        expect(data.lastname).toBe(createBooking.lastname);
    });


    test('should partially update created booking', async() => {
        const {data, response} = await bookingClient.partialBookingUpdate(bookingId, token, updateBooking);

        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('application/json');
        expect(data.additionalneeds).toBe(updateBooking.additionalneeds);
    });

    
    test('should remove previously created booking', async() => {
        const response = await bookingClient.deleteBooking(bookingId, token);
        
        expect(response.status()).toBe(201);
        
        expect(await response.text()).toBe('Created');
    });
});
