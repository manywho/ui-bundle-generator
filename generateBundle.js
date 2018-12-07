const fs = require('fs');
const sources = ['./ui-core/bundle.json', './ui-bootstrap/bundle.json', './ui-offline/bundle.json']

const bundles = {}

sources.forEach(source => {
    const bundle = JSON.parse(fs.readFileSync(source).toString());
    Object.keys(bundle).forEach(key => {
        bundles[key] = bundle[key];
    });
});

fs.writeFileSync('./bundles.json', JSON.stringify(bundles, null, 4));