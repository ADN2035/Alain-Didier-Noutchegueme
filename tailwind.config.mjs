/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					500: '#0ea5e9', // Boutons et liens
					900: '#0f172a', // Texte principal (Slate 900)
					950: '#020617', // Titres lourds
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['Fira Code', 'monospace'], // Pour les blocs de code ou les dates
			}
		},
	},
	plugins: [],
}