## Development

```console
# dev build
$ pnpm run dev

# prod build
$ pnpm run build

# generate icon
$ uv run scripts/icon.py
```

## Trouble shooting

if generating icon fails with something like `no library called "cairo-2" was found`, put

```
export DYLD_FALLBACK_LIBRARY_PATH="/opt/homebrew/lib"
```

in your `.envrc`.
see: https://github.com/Kozea/CairoSVG/issues/392
