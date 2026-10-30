import {test as base} from '@playwright/test';
import { HeaderComponent } from '../pages/components/index.js';

export const componentFixtures = base.extend({
    headerComponent: async ({page}, use) => {
        const headerComponent = new HeaderComponent(page);
        await use(headerComponent);
    }
});