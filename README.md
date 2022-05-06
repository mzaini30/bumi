# Bumi

<p align='center'>
	<img src='src/bumi.jpg'/>
</p>

Tools untuk membumikan JavaScript module dari NPM ke JavaScript UMD buat browser.

## Instalasi

```bash
npm i -g bumi
```

## Cara Pakai

```bash
bumi namaFile.js
```

> Untuk nama file, gunakan `snake_case` maupun `CamelCase`

Nanti, akan menghasilkan `namaFile.min.js` yang bisa digunakan untuk browser.

## Contoh

Isi dari `unik.js`:

```javascript
import uniq from 'uniq'

export default function(array){
 return uniq(array)
}
```

Lalu, menjalankan perintah:

```bash
bumi unik.js
```

Hasilnya adalah file `unik.min.js` yang isinya:

```javascript
// Nama variabel: unik
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).unik=e()}(this,function(){"use strict";var e=function(n,e,t){return 0===n.length?n:e?(t||n.sort(e),function(n,e){for(var t,o=1,r=n.length,f=n[0],u=(n[0],1);u<r;++u)t=f,e(f=n[u],t)&&(u!==o?n[o++]=f:o++);return n.length=o,n}(n,e)):(t||n.sort(),function(n){for(var e=1,t=n.length,o=n[0],r=n[0],f=1;f<t;++f,r=o)r=o,(o=n[f])!==r&&(f!==e?n[e++]=o:e++);return n.length=e,n}(n))};return function(n){return e(n)}});
```

## Contoh Cara Menggunakan Hasil Build

```html
<script src='unik.min.js'></script>
<script>
	const angkaUnik = unik([1, 2, 3])
	console.log(angkaUnik)
</script>
```

## Donate

<p align='center'>
    <a href='https://www.nihbuatjajan.com/mzaini30'>
        <img src='https://d4xyvrfd64gfm.cloudfront.net/buttons/default-cta.png'/>
    </a>
</p>