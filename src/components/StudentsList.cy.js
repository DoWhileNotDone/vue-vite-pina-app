/* eslint-disable no-undef */
import sinon from 'sinon';
import StudentsList from './StudentsList.vue';
import { createVuetify } from 'vuetify';
import { createTestingPinia } from '@pinia/testing';
import * as components from 'vuetify/components';

let vuetify;
let initialState = {};

describe('<StudentsList />', () => {
    beforeEach(() => {
        vuetify = createVuetify({
            components,
        });

        initialState = {
            studentsState: {
                studentsList: [
                    {
                        id: 1,
                        firstName: 'Jim',
                        lastName: 'Jam',
                    },
                ],
            },
        };
    });

    it('renders', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(StudentsList, {
            global: {
                plugins: [
                    vuetify,
                    createTestingPinia({
                        initialState,
                        createSpy: sinon.spy,
                    }),
                ],
            },
        });
    });
});
