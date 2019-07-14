<p align="center">
  <img src="https://github.com/kerimkaan/ozel/blob/master/public/images/ozelavatar.png?raw=true" alt="ismetozel" title="İsmet Özel">
</p>

# İsmet Özel API

> İsmet Özel şiirleri ve mısraları çekebileceğiniz RESTful API

## Kullanım

| Kullanım | HTTP Method | Request body | Açıklama |
|--------------|-------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| / | `POST` | *{'baslik':'Münacaat', yil: '1974', siir: 'Bu yaşa erdirdin beni, gençtim almadın canımı ölmedim genç olarak' }* | Yeni şiir ekleme |
| /dok_json | `GET` | - | Tüm şiirler başlığı, yılı ve kendisiyle birlikte JSON formatında görüntülenir |
| /dok | `GET` | - | Tüm şiirler başlığıyla birlikte HTML sayfası şeklinde görüntülenir |
| /getir/json/*Başlık* | `GET` | - | Belirtilen başlığa sahip şiiri JSON formatında getirir |
| /getir/html/*Başlık* | `GET` | - | Belirtilen başlığa sahip şiiri HTML formatında getirir |
| /rastgele/json | `GET` | - | JSON formatında rastgele şiir getirir |
| /rastgele/html | `GET` | - | HTML formatında rastgele şiir getirir |
| /rastgele/dize | `GET` | :construction: | Random bir dize getirir |
| /*Başlık* | `PUT` | *{'baslik':'Münacaat', yil: '1974', siir: 'Bu yaşa erdirdin beni, gençtim almadın canımı ölmedim genç olarak' }* | Belirtilen başlıktaki şiiri değiştirir. |

Örnek:
~~~~~
https://ismetozel.herokuapp.com/getir/html/Amentu
~~~~~

## Bilgiler

NodeJS ve Express Framework'ü ile Pug view engine kullanarak oluşturulmuştur, veritabanı olarak MongoDB Atlas, canlıya çıkarılması için Heroku kullanılmıştır.

## Yayın

[Canlı ürün](https://ismetozel.herokuapp.com) heroku üzerinde bulunmaktadır.

## Katkıda Bulunma

Katkıda bulunmak için 'pull request' yapabilir veya POST methodu ile şiir ekleyebilirsiniz. (Not: Var olan şiirlerde bazı bilgi eksiklikleri olabilir.) 

## Sorun, Görüş & Öneri

Sorun, görüş ve öneri için [Issue](https://github.com/kerimkaan/ozel/issues) kısmını kullabilir ya da [Twitter](https://twitter.com/kerimkaandonmez)'dan bana yazabilirsiniz.