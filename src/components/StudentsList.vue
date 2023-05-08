<script setup>

import { storeToRefs } from 'pinia'
import { useStudentsStore } from '@/stores/students'

const { students, loading } = storeToRefs(useStudentsStore())

</script>

<template>   
    <v-col sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title data-cy="students-list-header">Students</v-toolbar-title>
            </v-toolbar>
            <v-list v-if="students">
                <v-list-item
                    v-for="(student) in students"
                    :to="`/students/${student.id}/edit`"
                    :key="student.id"
                    data-cy="students-list"
                >
                    <v-list-item-title >
                    {{student.fullName}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <div v-if="loading">
                <v-progress-circular 
                    class="my-10"
                    indeterminate
                ></v-progress-circular>          
            </div>
        </v-card>
    </v-col>
</template>
