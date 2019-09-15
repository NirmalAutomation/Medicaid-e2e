/// <reference types="Cypress" />

export class MedicaidHome {

    // header elements
    medicaidLogo() {
        cy.get('.site-branding__logo')
            .should('have.attr', 'href', '/');
    }

    headerNavSecondary() {
        cy.get('.usa-nav-secondary')
            .should('contain', 'Search')
            .and('contain', 'Archive')
            .and('contain', 'Site Map')
            .and('contain', 'FAQs');
    }

    searchContainer() {
        cy.get('.js-search-button-container').click()
            .then(() => {
                cy.get('#searchbox').type('medicaid')
                    .should('have.value', 'medicaid');
            })
    }

    mainMenuList() {
        cy.get('#block-mainmenu-2')
            .should('contain', 'Federal Policy Guidance')
            .and('contain', 'Medicaid')
            .and('contain', 'Resources for States')
            .and('contain', 'CHIP')
            .and('contain', 'Basic Health Program')
            .and('contain', 'State Overviews')
            .and('contain', 'About Us')
    }

    clickScorecardLink() {
        cy.get('#block-mainmenu-2')
            .contains('State Overviews').trigger('mousemove')
            .then(() => {
                cy.get('#submenu-7').invoke('show')
                    .contains('Scorecard')
                    .click({ force: true });
            })
    }

    // footer elements
    relatedSitesLinks() {
        cy.get('#site_footer')
            .should('contain', 'Data.Medicaid.gov')
            .and('contain', 'HHS.gov')
            .and('contain', 'InsureKidsNow.gov')
            .and('contain', 'CMS.gov')
            .and('contain', 'Healthcare.gov')
            .and('contain', 'Medicare.gov');
    }

    helpfulLinks() {
        cy.get('#site_footer')
            .should('contain', 'Site Map')
            .and('contain', 'Privacy Policy')
            .and('contain', 'No Fear Act')
            .and('contain', 'Archive')
            .and('contain', 'Site Feedback')
            .and('contain', 'Web Policies and Important Links')
            .and('contain', 'Plain Language')
            .and('contain', 'Nondiscrimination & Accessibility')
            .and('contain', 'Help with File Formats & Plug-ins');
    }
}