# Health Careers Explorer

Single-page educational site for K-12 students about health careers.
Plain HTML/CSS/JS. No build step, no dependencies, no server.

## Run
Open `index.html` in a browser, or run `python -m http.server` and visit http://localhost:8000.

## Before launch
- Set `CONTACT_EMAIL` in `script.js`.
- Have PCOM mentors review every career's content (education lengths, licensure).
- Confirm PCOM branding and outreach rules, then replace the logo placeholder and footer note.
- Have the sponsor approve how questions and the email list are handled, since kids are the audience.

## Data
The site stores nothing on a server. Poll votes stay in the visitor's browser (localStorage).
Questions and list sign-ups open the visitor's own email app.

## Deploy
Static hosting: GitHub Pages, Vercel, or Netlify. Publish the repo root.
