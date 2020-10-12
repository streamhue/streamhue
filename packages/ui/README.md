# ui
**NOTE**: *Vetur currently has two known limitations that you should be aware of:*

It gives a false error on multiple root level elements. \
Solution: This is not an error in Vue 3 and can *safely* be ignored.

It cannot read config files from non-root level workspaces, which means if you open the files from the root repository, it will break. \
Solution: Use the supplied `streamhue.code-workspace`.

*Please also read the note in the root README.md about Vue 3*

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
