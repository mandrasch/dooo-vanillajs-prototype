# Vanilla DoOO
Tiny prototype for the "Domain of One's Own" concept (https://domain-of-ones-own.de/). Empower students / teachers to publish their own tiny html websites with simple page navigation on Github Pages.

## Play with it

- Preview: https://mandrasch.github.io/vanilla-dooo/

## Create your own tiny website

1. Click on "Use template" button, create your own repository
2. Sign up with Github on https://replit.com/
3. Create project, select "Import from Github"
4. Select your newly created repository from list
5. Select "HTML" as language
6. Hit "Run"
7. Open "version control" in sidebar, give replit.com editing permissions for the github repository
8. Have fun editing online!

## Link to content pages

1. Create your page in `pages/` as .html file

2. To load my-project.html, use

    ```
    <a href="#/pages/my-project.html`>My project link</a>
    ```
    
    or use the following for markdown pages:

    ```
    <a href="#/pages/my-project.md`>My project link</a>
    ```

<hr>

## For the nerds:

### Install for another theme

With some simple steps HTML themes can be converted to use with vanilla-dooo.

1. Add `vanilla-dooo-main` class to main content area where content should be loaded

2. Add vanilla-dooo-scripts at the end of body

    ```
    <!-- vanilla-dooo -->
	<script src="vanilla-dooo/universal-router.min.js"></script>
	<script src="vanilla-dooo/marked.min.js"></script>
	<script src="vanilla-dooo/vanilla-dooo.js"></script>
	<!-- eo vanilla-dooo -->
    ```

3. Link pages with `#/pages/filename`, e.g. `#/pages/test1` to load `pages/test1.html`



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
