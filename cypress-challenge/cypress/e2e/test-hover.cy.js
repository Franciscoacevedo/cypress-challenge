/// <reference types= "cypress"/>

import Hover from "../page-object/HoverPage.js";

describe('Test suit for hovering', () => {

    const hover = new Hover();
    beforeEach(() => {
        hover.url()
    });

    it('HappyPath', () => {
        hover.mouseOver()
        hover.hoverStatus()
    });
});