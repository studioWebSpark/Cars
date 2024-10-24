<template>
    <button @click="toggleDarkMode" class="p-2 bg-lightBackground dark:bg-darkBackground rounded-full">
        <i :class="isDarkMode ? 'bx bx-moon text-white' : 'bx bx-sun text-yellow-500'" class="text-2xl"></i>
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

onMounted(() => {
    isDarkMode.value = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    applyTheme()
})

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    applyTheme()
}

const applyTheme = () => {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}
</script>