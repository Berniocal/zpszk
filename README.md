# Český studijní překlad pro GitHub Pages

Tento balíček obsahuje Český studijní překlad Bible rozdělený na malé JSON soubory po kapitolách.

## Struktura

- `bible/CSP/index.json` — seznam knih a licence
- `bible/CSP/JHN/3.json` — ukázka cesty: Jan 3
- `bible-loader.js` — jednoduchá funkce pro načtení veršů

## Licence a copyright

Český studijní překlad © Nakladatelství KMS, s.r.o.
Licence uvedená ve zdrojovém modulu: Creative Commons BY-NC-ND 4.0.

Prakticky to znamená: uvádět autorství/licenci, nepoužívat komerčně a neupravovat text.

## Použití ve stránce

```html
<script src="bible-loader.js"></script>
<script>
const result = await getBibleText("CSP", "JHN", 3, 16, 18);
console.log(result.reference);
console.log(result.text);
console.log(result.copyright);
</script>
```
