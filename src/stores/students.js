import axios from 'axios';
import { defineStore } from 'pinia';

export const useStudentsStore = defineStore({
    id: 'studentsState',
    state: () => ({
        studentsList: [],
        loading: false,
        error: null,
    }),
    getters: {
        students: state =>
            state.studentsList.map(student => {
                return {
                    ...student,
                    fullName: `${student.firstName} ${student.lastName}`,
                };
            }),
        findStudent: state => id => {
            return state.studentsList.find(student => student.id == id);
        },
    },
    // mutations can now become actions, instead of `state` as first argument use `this`
    // no context as first argument, use `this` instead
    actions: {
        async getStudents() {
            this.studentsList = [];
            this.loading = true;
            try {
                this.studentsList = (await axios.get('http://localhost:3000/students')).data;
            } catch (error) {
                console.log('error loading students');
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        async createStudent(names) {
            const student = (await axios.post('http://localhost:3000/students', names)).data;
            this.studentsList.push(student);
        },
        async editStudent({ id, names }) {
            const student = (await axios.put(`http://localhost:3000/students/${id}`, names)).data;
            const index = this.studentsList.findIndex(s => s.id == student.id);
            this.studentsList[index] = student;
        },
    },
});
