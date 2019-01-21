const fs = require('fs');
const sources = ['./core/core-bundle.json', './bootstrap/bootstrap-bundle.json', './offline/offline-bundle.json']

const bundles = {}

sources.forEach(source => {
    const bundle = JSON.parse(fs.readFileSync(source).toString());
    Object.keys(bundle).forEach(key => {
        bundles[key] = bundle[key];
    });
});

fs.writeFileSync('./bundles.json', JSON.stringify(bundles, null, 4));