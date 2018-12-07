const fs = require('fs');
const sources = ['./ui-core/dist/bundle.json', './ui-bootstrap/dist/bundle.json', './ui-offline/dist/bundle.json']

const bundles = {}

sources.forEach(source => {
    const bundle = JSON.parse(fs.readFileSync(source).toString());
    Object.keys(bundle).forEach(key => {
        bundles[key] = bundle[key];
    });
});

fs.writeFileSync('./bundles.json', JSON.stringify(bundles, null, 4));