class Page {
    constructor(page) {
        this.page = page;

    }

    async open(path = '/') {
        await this.page.goto(path);
    }
}

export default Page;