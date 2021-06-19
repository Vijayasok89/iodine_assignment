import user from '../../fixtures/user.json'

describe('Job Application Test suite', () => {
    it('Visit the careers site page ', () => {
        cy.visit('https://iodinesoftware.com/') 
        //cy.get('.hamburger-box').click()
        cy.contains('Company').click()
        cy.contains('Careers').click()
       
        
    })
    it('Select QA job opening ', () => {
    cy.scrollTo('center')
    cy.xpath('//h3[contains(string(),\'Software Development Engineer in Test\')]').click()
    cy.contains('Software Development Engineer in Test')
    cy.wait(5)
    cy.xpath('(//button[contains(string(),\'Apply for This Job\')])[1]').dblclick({force: true})
    cy.wait(5)
})
it('Enter Candidate details', () => {
    //cy.fixture('user')as('usersData')

    cy.fixture('user').as('user')
    cy.xpath('//input[@name=\'firstName\']').type(user.firstName)
    cy.xpath('//input[@name=\'lastName\']').type(user.lastName)
    cy.xpath('//input[@name=\'email\']').type(user.email)
    cy.xpath('//input[@name=\'phone\']').type(user.phone)
    cy.xpath('//input[@name=\'streetAddress\']').type(user.streetAddress)
    cy.xpath('//input[@name=\'city\']').type(user.city)
    cy.xpath('(//div[@class=\'fab-SelectToggle__outerFacade\'])[1]').click({force: true})
    const state=user.state+'{enter}'
    cy.xpath('//input[@placeholder="Search..."]').type(state)
    //cy.xpath('(//div[contains(string(),\'TN\')])[2]').click({force:true})
    cy.xpath('//input[@name=\'zip\']').type(user.zip)
    //cy.xpath('(//div[@class=\'fab-SelectToggle__outerFacade\'])[2]').click({force: true})
    //cy.xpath('(//input[@placeholder="Search..."])[2]').type('India {downarrow}{enter}')
    cy.contains('Cancel').click({force: true})
})
it('Verify Job description page is loaded ', () => {
   
    cy.contains('Software Development Engineer in Test')
    cy.contains('Apply for This Job')

})

  })