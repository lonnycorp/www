# www

![Release](https://github.com/tlonny/www/actions/workflows/release.yml/badge.svg)

Static website for [The Lonny Corporation](https://www.lonnycorp.com).

## Build

Install dependencies with Bun, then build the site:

```sh
bun install
bun run build
```

The generated site is written to `dist`.

## Serve locally

After building, serve `dist` with any static file server. For example, using Python:

```sh
python -m http.server -d dist
```
