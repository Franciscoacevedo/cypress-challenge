class Select{
    
    url(){
        cy.visit('https://the-internet.herokuapp.com/dropdown',{ timeout: 30000 })
    }

    setOption(option){
        cy.get('#dropdown').select(option).contains('Option 1') 
    }

    showStatus(){
        cy.get("[disabled = 'disabled']").should('be.disabled')
    }
}

export default Select;