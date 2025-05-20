# News (Angular Öğrenme Projesi)

Bu proje, kısa sürede Angular öğrenmeye çalışırken aynı zamanda pratik yapmak için geliştirilmiştir. Farklı kategorilerdeki haberleri [NewsAPI](https://newsapi.org/) üzerinden çekip kullanıcıya sunar. Kod yapısı öğrenme amaçlı olduğu için bazı bölümler karışık olabilir.

## Özellikler

- Farklı haber kategorilerinden (iş, eğlence, spor, vb.) haberleri listeleme
- Kategori seçimine göre haberleri filtreleme
- Ana sayfada slider ve kart görünümü
- Angular Material ve Bootstrap ile modern arayüz

## Kurulum ve Çalıştırma

1. **Bağımlılıkları yükle:**

   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlat:**

   ```bash
   ng serve
   ```

   veya

   ```bash
   npm start
   ```

3. **Tarayıcıda aç:**
   ```
   http://localhost:4200/
   ```

## Klasör Yapısı

- `src/app/categories/` : Kategori seçimi ve haber listeleme bileşeni
- `src/app/home/` : Ana sayfa ve slider
- `src/app/business/`, `src/app/entertainment/` vb.: Kategoriye özel bileşenler
- `src/app/header/` : Üst menü bileşeni

## Kullanılan Teknolojiler

- Angular 19
- Angular Material
- Bootstrap 5
- Axios (API istekleri için)
- NewsAPI (Haber verisi için)

## Notlar

- Proje öğrenme amaçlıdır, kod yapısı ve bileşenler sadeleştirilebilir.
