export class Booking{
    constructor(request) {
        this.request = request;
        this.apiBaseUrl = 'https://restful-booker.herokuapp.com';
    }

    // setRequest(request) {
    //     this.request = request;
    // }

    async createToken(credentials) {
        const response = await this.request.post(`${this.apiBaseUrl}/auth`, {
            data: credentials
        });
        const receivedData = await response.json();
        return receivedData.token;
    }

    async createBooking(bookingData) {
        return await this.request.post(`${this.apiBaseUrl}/booking`, {
            data: bookingData
        });
    }

    async getBookingById(id) {
        return await this.request.get(`${this.apiBaseUrl}/booking/${id}`);
    }

    async partialBookingUpdate(id, token, updateData) {
        return await this.request.patch(`${this.apiBaseUrl}/booking/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            data: updateData
        });
    }

    async deleteBooking(id, token) {
        return await this.request.delete(`${this.apiBaseUrl}/booking/${id}`, {
            headers: {
                'Cookie': `token=${token}`
            }
        });
    }
}