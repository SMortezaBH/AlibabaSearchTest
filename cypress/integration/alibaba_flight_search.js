describe('Search Alibaba Flight', () => {

    it('Visiting Alibaba Site', () => {
        cy.visit("https://www.alibaba.ir")
    })

    it('Selecting Two Way Flight', () => {
        cy.get('[data-test=domestic-link]').click().should('to.have.class', 'router-link-active')
        cy.get('[data-test=twoWayRadio] > .radifier-label').click()
            //tried to find the class but couldn't find it to assert inside the DOM

    })

    it('Selecting Origin & Destination', () => {
        // I Wrote two  Different codes for selecting Origin & Destination

        cy.get('[data-test="originPicker"]').click()
        cy.get('[data-test=originPicker] > .multitab-picker__dropdown > .multitab-picker__items > .hover > a').click()
            //tried to find assert element text but couldn't find the value inside the DOM

        cy.get('[data-test="destinationPicker"]').type('مشهد{enter}')
            //tried to find assert element text but couldn't find the value inside the DOM

    })

    it('Selecting Date', () => {
        cy.get('[data-test="departingDatePicker"]').click()
        cy.get(':nth-child(1) > .calendar').contains('29').click()
        cy.get('[data-test="returningDatePicker"] > .form-control').click()
        cy.get(':nth-child(2) > .calendar').contains('3').click()
        cy.get('[data-testid=datapicker-modal-submit-button]').click()

        //I've picked random dates for this particular test, although the correct solution is to use the current day inside the calendar and pick a few days afterwards resulting in a more reusable test case.
    })

    it('Selectinh Passengers', () => {
        cy.get('input[placeholder= "مسافران"]').click()

        cy.get(':nth-child(2) > .pull-left > [data-test=passengerPickerValueIncrease]').click()
        cy.get(':nth-child(2) > .pull-left > [data-test=passengerPickerValueIncrease]').click()
        cy.get(':nth-child(2) > .pull-left > [data-test=passengerPickerValueIncrease]').click()
        cy.get(':nth-child(2) > .pull-left > [data-test=passengerPickerValueIncrease]').click()
        cy.get(':nth-child(2) > .pull-left > [data-test="passengerPickerValue"]').contains('5')
        cy.get(':nth-child(3) > .pull-left > [data-test="passengerPickerValue"]').contains('0')
        cy.get(':nth-child(4) > .pull-left > [data-test="passengerPickerValue"]').contains('0')

        cy.get('[data-test=search]').click()
    })

    it("", () => {

        cy.wait(20000) //wait for page load 
    })

    it('Scroll Down to Footer & Select Contact With Us', () => {
        cy.get(':nth-child(1) > .site-footer__list > :nth-child(2) > a').scrollIntoView()
        cy.get(':nth-child(1) > .site-footer__list > :nth-child(2) > a').click()
    })

})