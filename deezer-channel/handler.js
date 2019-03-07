"use strict"

module.exports = (event, context) => {
    context
        .status(200)
        .headers({'Pragma': 'public', 'Cache-Control': 'maxage=31536000', 'Expires': 'Wed, 1 Jan 2020 00:00:00 GMT'})
        .succeed('<script src="https://e-cdns-files.dzcdn.net/js/min/dz.js"></script>');
}
