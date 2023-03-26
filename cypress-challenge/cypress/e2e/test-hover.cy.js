/// <reference types= "cypress"/>

import Hover from "../page-object/HoverPage.js";

describe('Test suit for hovering', () => {

    const hover = new Hover();
    beforeEach(() => {
        hover.url()
    });

    it('Should be shown hidden elements', () => {
        hover.mouseOver()
        hover.hoverStatus()
    });
});