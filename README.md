# poo-poo

## Deployment

1. `npm run build`
1. Edit `dist/index.html` and remove leading `/` in `/assets/` strings.
1. `cp dist/index.html docs/index.html`
1. `mv dist/assets docs/assets`
1. `mv dist/images docs/images`

Need to automated this as part of `build` script.
