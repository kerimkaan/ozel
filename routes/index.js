var express = require('express');

var router = express.Router();
const Siir = require('../models/siir');

const { version } = require('../package.json'); // Package.json'daki version'u döndürür.

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'İsmet Özel API', version });
});

// Şiir ekleme
router.post('/', (req, res) => {
  const siir = new Siir(req.body);
  const promise = siir.save();
  promise.then((data) => {
    res.json({ Eklenenler: data });
  }).catch(((err) => {
    res.json(err);
  }));
});

// Tüm şiirleri HTML sayfasında çağır
router.get('/dok', (req, res) => {
  const promise = Siir.find({ });

  promise.then((data) => {
    var json = data;
    res.render('dok', { title: 'Tüm Şiirler', json });
    // res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

// Tüm şiirleri JSON formatında çağır
router.get('/dok_json', (req, res) => {
  const promise = Siir.find({ });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

// Başlığı girilen şiiri JSON formatında döndürür.
router.get('/getir/json/:baslik', (req, res, next) => {
  const promise = Siir.find({ baslik: req.params.baslik });

  promise.then((siir) => {
    if (!siir) {
      next({ message: 'Şiir bulunamadı', code: 99 });
    }
    else {
      res.json(siir);
    }
  }).catch((err) => {
    res.json(err);
  });
});

// Başlığı girilen şiiri HTML sayfasında çağır
router.get('/getir/html/:baslik', (req, res) => {
  const promise = Siir.find({ baslik: req.params.baslik });

  promise.then((data) => {
    var json = data;
    res.render('dok_baslik', { title: json.baslik, json });
    // res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});
// Rastgele şiir getirir. [JSON] (1-10 arasında rakamlar döndürür.)
router.get('/rastgele/json', (req, res) => {
  const rast = Math.floor((Math.random() * 10) + 1);
  console.log(rast); // Konsolda random değeri görüntüleme
  const promise = Siir.findOne({ no: rast });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

// Rastgee şiiri HTML sayfasında çağır
router.get('/rastgele/html', (req, res) => {
  const rast = Math.floor((Math.random() * 10) + 1);
  const promise = Siir.findOne({ no: rast });

  promise.then((data) => {
    var json = data;
    console.log(json.baslik);
    console.log(json);
    res.render('dok_baslik', { json });
    // res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

// Belirtilen başlığa göre girilen body formatındaki verileri günceller.
router.put('/:baslik', (req, res, next) => {
  const promise = Siir.findOneAndUpdate(req.params.baslik, req.body);

  promise.then((siir) => {
    if (!siir) {
      next({ message: 'Şiir bulunamadı', code: 404 });
    }

    res.json(siir);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
