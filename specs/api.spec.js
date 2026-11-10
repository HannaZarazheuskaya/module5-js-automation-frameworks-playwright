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
        
        expect(token).toBeDefined();
        expect(token).not.toBeNull();
    });

    test.afterAll(async() => {
        if (apiContext) {
            await apiContext.dispose();
        }
    })

    test('should create a booking', async() => {
        const response = await bookingClient.createBooking(createBooking);
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('application/json');

        const receivedData = await response.json();
        expect(receivedData.bookingid).toBeDefined();
        expect(receivedData.booking.firstname).toBe(createBooking.firstname);
        expect(receivedData.booking.lastname).toBe(createBooking.lastname);
        
        bookingId = receivedData.bookingid;
    });

    test('should get created booking by id', async() => {
        const response = await bookingClient.getBookingById(bookingId);
        expect(response.status()).toBe(200);

        expect(response.headers()['content-type']).toContain('application/json');

        const receivedData = await response.json();
        expect(receivedData.firstname).toBe(createBooking.firstname);
        expect(receivedData.lastname).toBe(createBooking.lastname);
    });

    test('should partially update created booking', async() => {
        const response = await bookingClient.partialBookingUpdate(bookingId, token, updateBooking);
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('application/json');

        const receivedData = await response.json();
        expect(receivedData.additionalneeds).toBe(updateBooking.additionalneeds);
    });

    test('should remove previously created booking', async() => {
        const response = await bookingClient.deleteBooking(bookingId, token);
        expect(response.status()).toBe(201);
        
        const responseMsg = await response.text();
        expect(responseMsg).toBe('Created');
    });
});
