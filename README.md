The library converts css to support rtl using rtlcss package

### Example *Gulpfile*

```javascript
var elixir = require("laravel-elixir");

elixir(function(mix) {
    mix.cssrtl('css.css', 'public/assets/styles');
});
```

#### Arguments

##### `source`:

- a globbing path that is passed to `gulp.src()`
- defaults to `public/assets/styles/default.css`

##### `output`:

- output directory for the compiled file
- defaults to `public/assets/styles/default-rtl.css`

##### `postfix`:

- will be added to the output file name, i.e default.css will be default-{postfix}.css
- defaults to `rtl`

#### Advanced example

```javascript
elixir(function(mix) {
        mix.cssrtl('*.css', 'public/assets/styles', 'rtl');
    });
```