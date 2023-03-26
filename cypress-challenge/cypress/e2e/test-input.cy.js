/// <reference types= "cypress" />

import Input from "../page-object/InputPage";

describe('Input test suit', () => {

    const input = new Input();
        
    beforeEach(() => {
        input.url()
    });

    it('Should be able to intrduce a positive value', () => {
        input.setNumber(35)
    });

    
    it('Should be able to introduce a negative value', () => {
        input.setNumber(-35)
    });

    it('Should be able to introduce any test', () => {
        input.setText('saludos')
    });
});