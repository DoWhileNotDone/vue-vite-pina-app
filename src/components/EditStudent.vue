<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useStudentsStore } from '@/stores/students';

const route = useRoute();

const { editStudent, findStudent } = useStudentsStore();

const student = findStudent(route.params.studentId);

const firstName = ref(student.firstName);
const lastName = ref(student.lastName);

function submit() {
    editStudent({
        id: student.id,
        names: {
            firstName: firstName.value,
            lastName: lastName.value, 
        },
    });
}
</script>

<template>
    <div>
        <v-col sm8 offset-sm2>
            <v-card>
                <v-toolbar dark>
                    <v-toolbar-title>Edit Student</v-toolbar-title>
                </v-toolbar>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col xs12 md4>
                                <v-text-field
                                    v-model="firstName"
                                    label="First Name"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="lastName"
                                    label="Last Name"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-btn @click="submit">submit</v-btn>
                </v-form>
            </v-card>
        </v-col>
        <br />
    </div>
</template>

