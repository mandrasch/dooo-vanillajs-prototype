"use strict";

const routes = [
    /*{
        path: '', // optional
        action: () => console.log('Route index (/) found, no action.')
    },*/
    {
        path: '/pages',
        action: () => console.log('checking child routes for /posts.'),
        children: [
            {
                path: '', // optional, matches both "/posts" and "/posts/"
                action: () => `<h1>Pages</h1>`,
            },
            {
                path: '/:filename',
                action: function (context) {
                    fetch('/pages/' + context.params.filename + '.html').then(function (response) {
                        // The API call was successful!
                        // TODO Check HTTP STATUS Code
                        return response.text();
                    }).then(function (html) {
                        // This is the HTML from our response as a text string
                        document.getElementById("app").innerHTML = html;
                    }).catch(function (err) {
                        // There was an error
                        console.warn('Something went wrong.', err);
                        document.getElementById('app').innerHTML = '<h1>Content file could not be loaded</h1>';
                    });
                }
            },
        ],
    },
    { path: '(.*)', action: () => document.getElementById('app').innerHTML = '<h1>Not Found</h1>' }
]

const router = new UniversalRouter(routes);

function locationHashChanged() {
    console.log('Event location hash changed called', location.hash);
    if(location.hash == ''){
        return; // Bail if no route is set
    }
    // remove char
    let route = location.hash.replace(/^#/, '');
    console.log('Try to match route',route);
    // try to match a route
    router.resolve(route);
}
window.addEventListener('hashchange', locationHashChanged, false);

// run it on page load:
locationHashChanged();

/*document.getElementById(
  "app"
).innerHTML = `<a href="/user/xxx/save?foo=bar#anchor-here" data-navigo>click me</a><a href="/pages/test1" data-navigo>Test1</a>`;

// const router = new Navigo("/");
// with hash based routing
const router = new Navigo('/', { hash: true });

router.on("/:x/:y", function(params) {
    console.log("params =", params);
})*/

/*router.on("/user/:id/:action", function (match) {
  document.getElementById("app").innerHTML = `<pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});

router.on("/pages/:file", function (match) {

    console.log('match pages/:file !',match);
    // TODO: USE MARKDOWN OR HTML
    fetch('/src/pages/'+match.data.file+'.html').then(function (response) {
        // The API call was successful!

        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
        console.log(html);

        document.getElementById("app").innerHTML = html;

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
  });*/
