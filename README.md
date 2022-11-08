# bumi

<p align='center'>
<img src='src/bumi.jpg'/>
</p>

Tools for grounding JavaScript modules from NPM to JavaScript UMD for browsers.

## Installation

```bash
npm i -g bumi
```

## How to use

```bash
bumi filename.js
```

> For filename use `snake_case` or `CamelCase`

Later, it will generate `filename.min.js` which can be used for browsers.

## Example

Contents of `unique.js`:

```javascript
import uniq from "uniq";

export default function (array) {
  return uniq(array);
}
```

Then, run the command:

```bash
bumi unique.js
```

The result is a `unique.min.js` file which contains:

```javascript
// Variable name: unique
!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((n = " undefined" != typeof globalThis ? globalThis : n || self).unique =
        e());
})(this, function () {
  "use strict";
  var e = function (n, e, t) {
    return 0 === n.length
      ? n
      : e
      ? (t || n.sort(e),
        (function (n, e) {
          for (var t, o = 1, r = n.length, f = n[0], u = (n[0], 1); u < r; ++u)
            (t = f), e((f = n[u]), t) && (u !== o ? (n[o++] = f) : o++);
          return (n.length = o), n;
        })(n, e))
      : (t || n.sort(),
        (function (n) {
          for (
            var e = 1, t = n.length, o = n[0], r = n[0], f = 1;
            f < t;
            ++f, r = o
          )
            (r = o), (o = n[f]) !== r && (f !== e ? (n[e++] = o) : e++);
          return (n.length = e), n;
        })(n));
  };
  return function (n) {
    return e(n);
  };
});
```

## Example of How to Use Build Results

```html
<script src="unique.min.js"></script>
<script>
  const unique_number = unique([1, 2, 3]);
  console.log(unique_number);
</script>
```
