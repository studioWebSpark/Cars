import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    // Activation du mode sombre avec la classe `dark`
    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            // Tu peux aussi personnaliser les couleurs du mode sombre si nécessaire
            colors: {
                darkBackground: "#111827", // Exemple de couleur personnalisée pour le mode sombre
                lightBackground: "#ffffff", // Exemple pour le mode clair
            },
        },
    },

    plugins: [forms, typography],
};
