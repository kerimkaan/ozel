<p align="center">
  <img src="https://github.com/kerimkaan/ozel/blob/master/public/images/ozelavatar.png?raw=true" alt="ismetozel" title="İsmet Özel">
</p>

# İsmet Özel API

> İsmet Özel şiirlerinden mısralar çekebileceğiniz RESTful API

## Kullanım

| Kullanım | HTTP Method | Request body | Açıklama |
|--------------|-------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| / | `POST` | *{'baslik':'Münacaat', yil: '1974', siir: 'Bu yaşa erdirdin beni, gençtim almadın canımı ölmedim genç olarak' }* | Yeni şiir ekleme |
| /dok_json | `GET` | - | Tüm şiirler başlığı, yılı ve kendisiyle birlikte JSON formatında görüntülenir |
| /dok | `GET` | - | Tüm şiirler başlığıyla birlikte HTML sayfası şeklinde görüntülenir |
| /:baslik | `GET` | - | Belirtilen başlığa sahip şiiri JSON formatında getirir |
| /dok/:baslik | `GET` | - | Belirtilen başlığa sahip şiiri HTML formatında getirir |
| /rastgele/siir | `GET` | - | Rastgele şiir getirir |
| /rastgele/dize | `GET` | :construction: | Random bir dize getirir |
| /:baslik | `PUT` | *{'baslik':'Münacaat', yil: '1974', siir: 'Bu yaşa erdirdin beni, gençtim almadın canımı ölmedim genç olarak' }* | Belirtilen başlıktaki şiiri günceller. |

## Bilgiler

NodeJS ve Express Framework'ü ile Pug view engine kullanarak oluşturulmuştur, veritabanı olarak NoSQL çözümü olan MongoDB ile yine MongoDB'nin bulut ürünü olan MongoDB Atlas kullanılmıştır.

## Demo

[Canlı ürün](https://ismetozel.herokuapp.com) heroku üzerinde bulunmaktadır.
