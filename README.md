# Vanilla DoOO
Tiny prototype for the "Domain of One's Own" concept (https://domain-of-ones-own.de/). Empower students / teachers to publish their own tiny html websites. 

## Play with it

- Interactive: https://codesandbox.io/s/mystifying-oskar-xwlyg?file=/index.html
- Preview: https://mandrasch.github.io/vanilla-dooo/

## Create your own

1. Click on "Use template" button, create your own repository
2. Sign up with Github on https://replit.com/
3. Create project, select "Import from Github"
4. Select your newly created repository from list
5. Select "HTML" as language
6. Hit "Run"
7. Open "version control" in sidebar, give replit.com editing permissions for the github repository
8. Have fun editing online!

## Install for another theme

1. Add `vanilla-dooo-main` class to main content area
2. Add vanilla-dooo-scripts at the end of body

    ```
    <!-- vanilla-dooo -->
	<script src="vanilla-dooo/universal-router.min.js"></script>
	<script src="vanilla-dooo/index.js"></script>
	<!-- eo vanilla-dooo -->
    ```

3. Link pages with `#/pages/filename` (without extensions), e.g. `#/pages/test1.html` `pages/test1.html`

<hr>

## For the nerds:

### Tech stack

- I thought about using the static site generator eleventy, but there is no easy way of running node / npm run start in browser IDEs yet, therefore I dropped the idea of using nodejs
- Instead I used the method of docsifys Manual initialization (https://docsify.js.org/#/quickstart?id=manual-initialization) and hash based routing

### Local development

- npm install
- npm start

### TODOs

- Bug: Navigating with back button index.html - load original content / reload page
- a11y check / improvements
- provide meaningful demo content

## License

Open Source - MIT (Sharing is caring)
