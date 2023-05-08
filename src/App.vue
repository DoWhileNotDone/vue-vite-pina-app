<script setup>
import {  RouterView } from 'vue-router';
import { useStudentsStore } from '@/stores/students';

const { getStudents } = useStudentsStore();

getStudents();
</script>

<template>
    <v-app>
        <v-app-bar title="Students Application">
            <v-btn data-cy="students-list-link" flat to="/">Students List</v-btn>
            <v-btn data-cy="new-student-link"  flat to="/students/new">New Student</v-btn>
        </v-app-bar>
        <v-main>
            <router-view :key="$route.fullPath" />
        </v-main>
    </v-app>
</template>
