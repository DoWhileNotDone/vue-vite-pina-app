<script setup>
import { ref } from 'vue'
import { useStudentsStore } from '@/stores/students';

const { createStudent } = useStudentsStore();
const firstName = ref('');
const lastName = ref('');

function submit() {
    createStudent({
        firstName: firstName.value,
        lastName: lastName.value,
    });
    firstName.value = '';
    lastName.value = '';
}
</script>

<template>
    <div>
        <v-col sm8 offset-sm2>
            <v-card>
                <v-toolbar dark>
                    <v-toolbar-title data-cy="new-student-header">New Student</v-toolbar-title>
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

