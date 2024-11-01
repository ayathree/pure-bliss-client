/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        montaga: ['Montaga', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        itim: ['Itim', 'cursive'],
        rubikWetPaint: ['Rubik Wet Paint', 'system-ui'],
        playwriteGBS: ['Playwrite GB S', 'cursive'],
        kanit: ['Kanit', 'sans-serif'],
        kablammo: ['Kablammo', 'system-ui'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        josefinSans: ['Josefin Sans', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
        dancingScript: ['Dancing Script', 'cursive'],
        anton: ['Anton', 'sans-serif'],
       
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

