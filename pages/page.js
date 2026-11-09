class Page {
    constructor(page) {
        this.page = page;
        this.url = '/';
    }

    async open(path = this.url) {
        await this.page.goto(path);
    }
}

export default Page;