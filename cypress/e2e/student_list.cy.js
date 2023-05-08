/* eslint-disable no-undef */
describe('student service', () => {
    it('opens the index page', () => {
        cy.visit('http://localhost:5173/');
    });

    it('displays the list header', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy=students-list-header]').should('have.text', 'Students');
    });

    it('displays the initial student list', () => {
        cy.visit('http://localhost:5173/');

        cy.get('[data-cy=students-list]').then(items => {
            expect(items[0]).to.contain.text('Alex T Arnold');
            expect(items[1]).to.contain.text('Jane Smith');
        });
    });

    it('adds a new student', () => {
        cy.visit('http://localhost:5173/');

        cy.get('[data-cy=new-student-link]').click();

        cy.url().should('include', '/students/new');

        cy.get('[data-cy=new-student-header]').should('have.text', 'New Student');
    });
});
