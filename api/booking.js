export class Booking{
    constructor(request) {
        this.request = request;
        this.apiBaseUrl = 'https://restful-booker.herokuapp.com';
    }


    async createToken(credentials) {
        const response = await this.request.post(`${this.apiBaseUrl}/auth`, {
            data: credentials
        });

        if (!response.ok()) {
            throw new Error(`Auth request failed, status: ${response.status()}`);
        }

        const receivedData = await response.json();

        if (!receivedData.token) {
            throw new Error('No token returned from auth endpoint');
        }

        return receivedData.token;
    }


    async createBooking(bookingData) {
        const response = await this.request.post(`${this.apiBaseUrl}/booking`, {
            data: bookingData
        });
        const data = await response.json();
        return {data, response};
    }


    async getBookingById(id) {
        const response = await this.request.get(`${this.apiBaseUrl}/booking/${id}`);
        const data = await response.json();
        return {data, response};
    }


    async partialBookingUpdate(id, token, updateData) {
        const response = await this.request.patch(`${this.apiBaseUrl}/booking/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            data: updateData
        });

        const data = await response.json();
        return {data, response};
    }

    async deleteBooking(id, token) {
        const response = await this.request.delete(`${this.apiBaseUrl}/booking/${id}`, {
            headers: {
                'Cookie': `token=${token}`
            }
        });

        return response;
    }
}