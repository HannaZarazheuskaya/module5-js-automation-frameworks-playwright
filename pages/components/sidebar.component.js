class SidebarComponent {

    constructor(page) {   
        this.page = page;

        this.sortDropdown = this.page.getByTestId('sort');

        this.sliderMinPrice = this.page.locator('ngx-slider-pointer-min');
        this.sliderMaxPrice = this.page.locator('ngx-slider-pointer-max');
        
    }

    async sortPriceHighToLow() {
        await this.sortDropdown.click();
        await this.sortDropdown.selectOption('price,desc');
    }

}

export default SidebarComponent;