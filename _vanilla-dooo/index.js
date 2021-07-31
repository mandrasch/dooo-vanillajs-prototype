"use strict";

(function () { // IIFE function

    const vanillaDoooMainEl = document.querySelector('.vanilla-dooo-main');
    // TODO: Check on page load, should only be used once

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
                            vanillaDoooMainEl.innerHTML = html;
                        }).catch(function (err) {
                            // There was an error
                            console.warn('Something went wrong.', err);
                            vanillaDoooMainEl.innerHTML = '<h1>Content file could not be loaded</h1>';
                        });
                    }
                },
            ],
        },
        { path: '(.*)', action: () => vanillaDoooMainEl.innerHTML = '<h1>Not Found</h1>' }
    ]

    const router = new UniversalRouter(routes);

    function locationHashChanged() {
        console.log('Event location hash changed called', location.hash);
        if (location.hash == '') {
            return; // Bail if no route is set
        }
        // remove char
        let route = location.hash.replace(/^#/, '');
        console.log('Try to match route', route);
        // try to match a route
        router.resolve(route);
    }
    window.addEventListener('hashchange', locationHashChanged, false);

    // run it on page load:
    locationHashChanged();


})(); // eo IIFE