# suslu22.github.io

[suslu22](https://github.com/suslu22) kullanıcısının kişisel proje sayfası: https://suslu22.github.io

GitHub Pages'te yayında olan projeler logo, açıklama ve bağlantılarıyla kartlar hâlinde listelenir. Bağımlılık ve derleme adımı yoktur; dosyalar olduğu gibi yayınlanır.

## Yeni proje eklemek

1. Logoyu `assets/icons/` klasörüne koyun (SVG ya da PNG). Logo yoksa `icon` yerine `emoji` yazılabilir.
2. [`assets/projects.js`](assets/projects.js) dizisine yeni bir nesne ekleyin (alanlar dosyanın başında açıklanmıştır).
3. `main` dalına gönderin; sayfa birkaç dakika içinde güncellenir.

## Yerelde görmek

```bash
python -m http.server 4783
```

Ardından tarayıcıda `http://localhost:4783` adresini açın.

## Yapı

| Dosya | Görevi |
|---|---|
| `index.html` | Sayfa iskeleti |
| `assets/projects.js` | Proje listesi (tek veri kaynağı) |
| `assets/app.js` | Kartları oluşturur, açık/koyu tema düğmesi |
| `assets/style.css` | Tasarım; `prefers-color-scheme` ve elle tema seçimi |
| `assets/icons/` | Proje logoları ve site simgesi |
