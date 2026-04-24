# Portfolio-HTML-CSS
This is a personal portfolio created as part of a progressive web development workshop. The project evolved from a basic HTML structure to a responsive website with styles and interactivity using JavaScript.

# Structure
portfolio/
>├── index.html # Main portfolio page
>>├── pets.html # Secondary page with pet gallery
>>>├── styles_index.css # Main stylesheet
>>>>└── script.js # Interactivity logic in JavaScript
# ✅ Acceptance criteria met

- index.html, pets.html, styles_index.css, and script.js files present.

- Portfolio with header, menu, sections, and contact form.

- Functional navigation between pages.

- Gallery with 6 pets, images, and descriptions.

- Flexbox in the header and Grid in the pet gallery.

- Media queries for mobile, tablet, and desktop.

- Responsive images and typography in relative units.

- Global variables in :root and optimized CSS.

- Properly linked script.js with visible user interaction.

- Indented, clean, and commented code.

# Features
### Structure and Navigation
The site has two HTML pages (index.html and pets.html) connected by links in the menu and footer, with a header that remains visible on scroll.
Main Portfolio
Includes three sections: About Me with a personal description, Projects with cards that animate on hover, and Contact with a form for name, email, and message.

### Pet Gallery
Displays 6 pets in a responsive mosaic grid, each with an image, emoji icon, name, and description with its own personality. It also includes an animated carousel with pure CSS at the top of the page.

### Responsive Design
The layout adapts to mobile devices (column menu, reduced carousel) and desktop, using images with a max-width of 100% and typography in rem units.

## Advanced Styles
Dark palette with gold accents defined in the :root variable, Flexbox in the header, Grid in the gallery, animated hover on cards and links, and rounded corners on images and buttons.

## JavaScript Interactivity
A button in the About Me section dynamically alternates the text font between the original font and a serif font, also changing the button text as a visual confirmation.
