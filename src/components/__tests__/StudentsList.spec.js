import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import StudentsList from '../StudentsList.vue';

import { createTestingPinia } from '@pinia/testing';
// import any store you want to interact with in tests
//import { useStudentsStore } from '@/stores/students';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';

//TODO: Mock Pinia Store
//https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store

describe('StudentsList', () => {
    it('renders properly', () => {
        const vuetify = createVuetify({
            components,
        });

        const wrapper = mount(StudentsList, {
            global: {
                plugins: [
                    vuetify,
                    createTestingPinia({
                        initialState: {
                            studentsState: {
                                studentsList: [
                                    {
                                        id: 1,
                                        firstName: 'Jim',
                                        lastName: 'Jam',
                                    },
                                ],
                            },
                        },
                    }),
                ],
            },
        });

        expect(wrapper.text()).toContain('Students');
        expect(wrapper.text()).toContain('Jim Jam');
    });
});
