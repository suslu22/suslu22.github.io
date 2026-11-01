/*
 * Yeni proje eklemek için diziye bir nesne ekleyin; kart kendiliğinden oluşur.
 *
 *   id        : benzersiz kısa ad (kartın bağlantı çapası olur)
 *   title     : kart başlığı
 *   tagline   : başlığın altındaki tek cümlelik özet
 *   description : 1-2 cümlelik açıklama
 *   features  : kısa özellik maddeleri (isteğe bağlı)
 *   tags      : etiketler (isteğe bağlı)
 *   icon      : logo yolu (assets/icons/...); yoksa `emoji` kullanılır
 *   accent    : kartın vurgu rengi (hex)
 *   url       : "Aç" bağlantısı (suslu22.github.io/<proje>/)
 *   repo      : GitHub deposu (isteğe bağlı)
 *   extra     : ek bağlantılar [{ label, href }] (isteğe bağlı)
 */
window.PROJECTS = [
  {
    id: "mini-dunya",
    title: "Mini Dünya",
    tagline: "Tarayıcıda oynanan, WorldBox tarzı 3B kum havuzu oyunu",
    description:
      "Three.js ile yazılmış low-poly bir dünya: haritayı şekillendir, küçük insanların çağlar boyunca gelişmesini izle ya da kendi adanda sakin bir hayat kur. Mevsimler ve hava durumu tüm modlarda çalışır, mobil için grafik kademeleri vardır.",
    features: [
      "Simülasyon Modu: yüzlerce küçük insan, çağlar, tarlalar ve felaketler",
      "Detaylı Mod: tek insanla başlayan koloni, beceri ağacı, çiftlik, okul, fabrika ve olaylar",
      "Ada Modu: sakin ada hayatı; balık tutma, böcek, çiçek, komşular, şenlikler, ev döşeme ve fotoğraf modu"
    ],
    tags: ["Oyun", "Three.js", "3B", "Tarayıcı"],
    icon: "assets/icons/mini-dunya.svg",
    accent: "#2ea86a",
    url: "https://suslu22.github.io/mini-dunya/",
    repo: "https://github.com/suslu22/mini-dunya"
  },
  {
    id: "offisea",
    title: "Offisea",
    tagline: "Ücretsiz, reklamsız ve çevrimdışı çalışan ofis uygulaması",
    description:
      "Belge, tablo, sunu ve PDF dosyalarını açıp düzenleyin. Tek kod tabanından web (PWA), Android ve Windows sürümleri çıkar; belgeleriniz hiçbir sunucuya gönderilmez ve hesap gerekmez.",
    features: [
      "Word, Excel ve PowerPoint dosyalarını açar; 100'den fazla formül Türkçe adlarıyla da çalışır",
      "PDF'teki yazıları Word'deki gibi düzenleme, form doldurma, imza ve birleştirme",
      "Taranmış sayfalarda tamamen çevrimdışı yazı tanıma (OCR)"
    ],
    tags: ["Ofis", "PDF", "PWA", "Android", "Windows"],
    icon: "assets/icons/offisea.svg",
    accent: "#0b7fc2",
    url: "https://suslu22.github.io/offisea/",
    repo: "https://github.com/suslu22/offisea",
    extra: [{ label: "İndir", href: "https://suslu22.github.io/offisea/indir/" }]
  }
];
