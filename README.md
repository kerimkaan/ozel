---
description: İsmet Özel şiirleri ve dizeleri sağlayan bir API
---

# İsmet Özel API

> JSON ve HTML formatında isteklere cevap verebilen ve zenginleştirilebilecek şekilde tasarlandı.

{% api-method method="get" host="https://ismetozel.herokuapp.com" path="/getir/json/baslik" %}
{% api-method-summary %}
Belirli bir şiiri JSON formatında getirme
{% endapi-method-summary %}

{% api-method-description %}
URL'ye yazılan bir şiiri, başlığı ve yılı json formatında getirir.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="baslik" type="string" required=true %}
İstenen şiirin başlığı \(Örn: Amentu\)
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
  
Şiir başarılı bir şekilde getirildi.
{% endapi-method-response-example-description %}

```javascript
[
  {
    "_id": "5ceb2de44d2a042ec6a36352",
    "baslik": "Amentu",
    "yil": 1974,
    "siir": "İnsan \neşref-i mahlûkattır derdi babam \nbu sözün sözler içinde bir yeri vardı \nama bir eylül günü bilek damarlarımı kestiğim zaman \nbu söz asıl anlamını kavradı \ngeçti çıvgınların, çıbanların, reklamların arasından \ngeçti tarih denilen tamahkâr tüccarı \nkararmış rakamların yarıklarından sızarak \nbu söz yüreğime kadar alçaldı \ndamar kesildi, kandır akacak \nama kan kesilince damardan sıcak \nsımsıcak kelimeler boşandı \naşk için karnıma ve göğsüme \nölüm için yüreğime sürdüğüm eczâ uçtu birden \naşk ve ölüm bana yeniden \nsu ve ateş ve toprak \nyeniden yorumlandı.\n\nDilce susup \nbedence konuşulan bir çağda \nbiliyorum kolay anlaşılmayacak \nkanatları kara fücur çiçekleri açmış olan dünyanın \nyanık yağda boğulan yapıların arasında \ndelirmek hakkını elde bulundurmak \nrahma çağdaş terimlerle yanaşmak için \nbana deha değil \nbelgeler gerekli \nkanıtlar, ifadeler, resmi mühür ve imza \ngençken \npeşpeşe kaç gece yıllarca \nacıyan, yumuşak yerlerime yaslanıp uçardım \nbilmezdim neden bazı saatler \nalaturka vakitlere ayarlı \nneden karpuz sergilerinde lüküs yanar \nyazgı desem \nkötü bir şey dokunmuş olurdu sanki dudaklarıma \nTokat \naklıma bile gelmezdi \nbabam onbeşli olmasa.\n\nMeyan kökü kazarmış babam kırlarda \nben o yaşta koltuğumda kitaplar \nişaret parmağımda zincir, cebimde sedef çakı \ncebimde kırlangıçlar çılgınlık sayfaları \nkafamda yasak düşünceler, Gide mesela. \nKar yağarken kirlenen bir şeydi benim yüzüm \nher sevinç nöbetinde kusmak sunuldu bana \ngecenin anlamı tıkansın diye ıslık çalar \nresimli bir kitaptan çalardım hayatımı \noysa hergün \nmerkep kiralayıp da kazılan kökleri \nForbes firmasına satan babamdı.\n\nBudur \nişte bir daha korkmamak için korkmaz görünen korku \nişte şehirleri bayındır gösteren yalan \nişte mevsimlerin değiştiği yerde buharlaşan \nkelepçeler, sürgünler, gençlik acılarıyla \ngüç bela kurduğum cümle işte bu; \nten kaygusu yüklü ağır bir haç taşımaktan \ntenimin olanca ağırlığı yok oldu. \nSolgun evler, ölü bir dağ, iyice solmuş dudak \nbile bir bir çınlayan \nihtilal haberidir \nve gecenin gümüş ipliklerden işlenmiş oluşu \nnisan ayları gelince vücudu hafifletir \nşahlanan grevler içinde kahkahalarım küstah \nbakışlarım beyaz bulutlara karşı obur \nmarşlara ayarlanmak hevesindeki sesim \ngider şehre ve şaraba yaltaklanarak \nbiraz ağlayabilmek için \nfotoğraflar çektirir \nbabam \nseferberlikte mekkâredir.\n\nİnsanın \ngölgesiyle tanımlandığı bir çağda \nmarşlara düşer belki birkaç şey açıklamak \nbelki ruhların gölgesi \ndüşer de marşlara \nmümkün olur babamı \nvarlık sancısıyla çağırmak: \nEzan sesi duyulmuyor \nHaç dikilmiş minbere \nKâfir Yunan bayrak asmış \nCamilere, her yere\n\nÖyle ise gel kardeşim \nHep verelim elele \nPatlatalım bombaları \nÇanlar sussun her yerde\n\nÇanlar sustu ve fakat \nbinlerce yılın yabancısı bir ses \ndeğdi minarelere:Tanrı uludur Tanrı uludur \npolistir babam \nCumhuriyetin bir kuludur \nbense \nanlamış değilim böyle maceralardan \nne Godiva geçer yoldan, ne bir kimse kör olur \nyalnız \ncoşkunluğu karşısında içlendiğim şadırvan \nnüfus cüzdanımda tuhaf \nekmek damgası durur \nbenim işim bulutlar arşınlamak gün boyu \netin ıslak tadına doğru \nyavaş yavaş uyanmak \nçocuk kemiklerinden yelkenler yapıp \nhırsız cenazelerine bine bine \ntemiz döşeklerin ürpertisinden çeşme \nkorkak dualarından cibinlikler kurarak \ndokunduğum banknotlardan tiksinmeyi itiraz \nnakışsız yaşamakları \nsilâhlanmak sanarak \nçıkardım \nboğaza tıkanan lokmanın hartasını \nçıkınımda güneşler halka dağıtmak için \nhalkı suvarmak bin saçlarımda bin ırmak \nıhtırdım caddeleri meğer ki mezarlarmış \nhazırmış zaten duvar sıkılmış bir yumruğa \nfly Pan-Am \ndrink Coca-Cola\n\nTutun ve yüzleştirin hayatları \nbiri kör batakların çırpınışında kutsal \nbiri serkeş ama oldukça da haklı. \nÖlümler \nölümlere ulanmakta ustadır \nhayatsa bir başka hayata karşı.\n\nOrada \naşk ve çocuk \nbirbirine katışmaz \nnasıl katışmıyorsa başaklara ağustos sıcağı \nkendi tehlikesi peşinden gider insan \nputların dahi damarından \naktığı güne kadar \nsürdürür yorucu kovalamacayı.\n\nHanidir görklü dünya dünyalar içre doğan? \nNerde, hangi yöremizde zihnin \ntunç surlardan berkitilmiş ülkesi \nağzı bayat suyla çalkanmış çocuğa rahim olan \nparti broşürleri yoksa kafiyeler mi? \nHangi cisimdir açıkça bilmek isterim \ntakvim yapraklarının arasını dolduran \nnedir o katı şey \nki gücü \ngönlün dağdağasını durultacak? \nHayat \ndört şeyle kaimdir, derdi babam \nsu ve ateş ve toprak. \nVe rüzgâr. \nona kendimi sonradan ben ekledim \npişirilmiş çamurun zifiri korkusunu \nham yüreğin pütürlerini geçtim \ngövdemi alemlere zerkederek \nvaroldum kayrasıyla Varedenin \neşref-i mahlûkat \nnedir bildim.",
    "no": 4,
    "__v": 0
  }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
İlgili şiir bulunamadıysa
{% endapi-method-response-example-description %}

```javascript
{
    "message": "Bulunamadı."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ismetozel.herokuapp.com" path="/getir/html/baslik" %}
{% api-method-summary %}
Belirli bir şiiri HTML sayfası formatında getirme
{% endapi-method-summary %}

{% api-method-description %}
Belirtilen başlıktaki şiiri HTML sayfası oluşturarak sunar.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="baslik" type="string" required=true %}
İstenen şiirin başlığı \(Örn: Amentu\)
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
HTML sayfası getirir.
Örn: https//ismetozel.herokuapp.com/getir/html/Amentu
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "message": "Bulunamadı."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ismetozel.herokuapp.com" path="/dok\_json" %}
{% api-method-summary %}
Tüm şiirleri JSON formatında getirme
{% endapi-method-summary %}

{% api-method-description %}
JSON formatında bulunan tüm şiirleri, başlığı ve yıl bilgisini getirir.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
  {
    "_id": "5ceb0672aae71523c1f47405",
    "baslik": "Yıkılma Sakın",
    "yil": 1969,
    "siir": "Sana durlanmış kelimeler getireceğim\npörsümüş bir dünyayı kahreden kelimeler \nkelimeler, bazısı tüyden bazısı demir\nseni çünkü dik tutacak bilirim \nkabzenin, çekicin ve divitin \ntutulduğu yerden parlayan şiir.\n\nZorlu bir kış geçirdim, seninki gibi neftî\nacıktım, bitlendim, bir yerlerim sancıdı \nsökmedi ama hoyrat kuralları faşizmin\nçünkü kalbim aşktan çatlayıp yarılırdı.\nHer sabah çarpışarak çekilirdi karanlık alnacımdan\nacılar bile duymadım kof yürekler önünde\nbeynim her sabah devrimcinin beyniydi\nayaklarım donukladı gelgelelim\nsağlığın yerinde mi?\n\nYaraların kabuğu kolayca kaldırılıyor \nhalkın doğurgan dünyasına dalmakla \nonların güneşe çarpan sesini anlamayan \ndört duvarın, tel örgünün, meşhur yasakların sahipleri\nseyir bile edemezken içimizdeki şenliği\nyılgı yanımıza yanaşmazken\nbizi kıvıl kıvıl bekliyorken hayat\nyıkılmak elinde mi? \nBoşuna mı sokuldu bankalara \npetrol borularına kundak\nkurşun işçinin böğrünü boşuna mı örseledi\nvarsın zındanların uğultusu vursun kulaklarımıza \nyaşamak\nbizimçün dokunaklı bir şarkı değil ki.\nBu yürek gökle barışkın yaşamaya alışmış bir kere\nve inatla çevrilmiş toprağın çılgarına\nyazık ki uzaktır kuşları, sokaklarıyla bizim olan şehir\nama ancak laneti hırsla tırpanlayamamak koyuyor insana\nöpüşler, yatağa birden yuvarlanışlar\nsevgiyle hatırlansa bile hatta.\n\nKöpüren, köpürtücü bir hayatın nadasıdır kardeşim\nbütün devrimcilerin çektikleri\nbiliriz dünyadaki yorgunluk habire mızraklanır\ndağlarda gürbüz bir ölümdür bizim arkadaşlarınki\npusmuş bir şahanız şimdilik, ne kadar şahan olsak\nama budandıkça fışkıran da bizleriz\nölüyoruz, demek ki yaşanılacak...",
    "no": 1,
    "__v": 0
  },
  {
    "_id": "5ceb0756aae71523c1f47406",
    "baslik": "Mataramda Tuzlu Su",
    "yil": 1980,
    "siir": "West Indies,Kızıl Elma,İtaki,Maçin!\nUzun yola çıkmaya hüküm giydim.\nBeyazların yöresinde nasibim kalmadı\nyerlilerin topraklarına karşı şuç işledim\nzorbaların arasında tehlikeli bir nifak\nuyrukların arasında uygunsuz biriyim\nvahşetim\nbeni baygın meyvaların lezzetinden kopardı\nkendime dünyada bir\nacı kök tadı seçtim\nyakın yerde soluklanacak gölge bana yok\nuzun yola çıkmaya hüküm giydim.\n\nUzak nedir?\nKendinin bile ücrasında yaşayan benim için\ngidecek yer ne kadar uzak olabilir?\nBaşım açık, saçlarımı ikiye\nortadan ayırdım\nkimin ülkesinden geçsem\nşakaklarımda dövmeler beni ele verecek\ncesur ve onurlu diyecekler\nhalbuki suskun ve kederliyim\nkorsanlardan kaptığım gürlek nara\nişime yaramıyor\nrençberlerin o rahat\nve oturmuş lehçesinden tiksinirim\nboynumda\nbana yargı yükleyenlerin\nutançlarından yapılma mücevherler\nsırtımda sağır kantarı gizli bilgilerin\nmataramdaki suya tuz ekledim, azığım yok\nuzun yola çıkmaya hüküm giydim.\n\nBir hayatı,ısmarlama bir hayatı bırakıyorum\ngörenler üstünde iyi duruyor derdi her bakışta\naskerken kantinden satın aldığım cep aynası \nbazı geceler çıkarken\nuçarı bir gülümseyişle takındığım muşta\ngibi lükslerim de burda kalacak\nsiparişi yargıcılar tarafından verilmiş\nbu hayattan ne koku, ne yankı, ne de boya\ntaşımamı yasaklayan belgeyi imzaladım\nburada bitti artık işim, ocağım yok\nuzun yola çıkmaya hüküm giydim.",
    "no": 2,
    "__v": 0
  },
  {
    "_id": "5ceb093eaae71523c1f47407",
    "baslik": "Münacaat",
    "yil": 1974,
    "siir": "Bu yaşa erdirdin beni, gençtim almadın canımı\nölmedim genç olarak, ölmedim beni leylak\nbüklümlerinin içten ve dışardan\nsarmaladığı günlerde\nbir zamandı\nheves ettim gölgemi enginde yatan\no berrak sayfada gezindirsem diye\nölmedim, bir gençlik ölümü saklı kaldı bende.\nVakti vardıysa aşkın, onu beklemeliydi\ngenç olmak yetmiyordu fayrap sevişmek için\nhalbuki aşk, başka ne olsundu hayatın mazereti\ndemedim dilimin ucuna gelen her ne ise\nvay ki gençtim\nölümle paslanmış buldum sesimi.\n\nHata yapmak \nfırsatını Adem’e veren sendin\nbilmedim onun talihinden ne kadar düştü bana\ngençtim ben ve neden hata payı yok diyordum hayatımda\ngergin bedenim toprağa binlerce fışkını saplar idi\nhaykırınca çeviklik katardım gökyüzüne\nbir düşü düşlere dalmaksızın kavrayarak\nbulutu kapsayarak açmadan buluta içtekini\ntanıdım Ademoğlu kimin nesiymiş\nter döküp soru sormak nereye sürüklermiş kişiyi.\n\nÇeşme var, kurnası murdar\nyazgım\nkendi avcumda seyretmek kırgın aksimi.\n\nGençtim ya, ne farkeder deyip geçerdim\nnehrin uğultusu da olur, dalların hışırtısı da\ngözyaşı, çiğ tanesi, gizli dert veya verem\nne fark eder demişim\nbilmeden farkı istemişim.\nVay beni leylak kokusundan çoban çevgenine \narastadan ırmaklara çarkettiren dargınlık! \nYola madem\nçöllerdeki satrabı yalvartmak için çıkmıştım\nhava bozar, yüzüm eğik giderdim yine\nyaza doğru en kuduzuyla sürüngenlerin sabahlar\nyola devam ederdim.\n\nGençtim işte şehrin o yatık raksından incinen yine bendim\ngelip bana çatardı o ruh tutuşturucu yalgın\nonunla ben\nhep sevişecek gibi baktık birbirimize.\nbir kez öpüşebilseydik dünyayı solduracaktık.\n\nOysa bu sürgün yeri,bu pıtraklı diyar\nne kadar korkulu yankı bulagelmiş gizlerimizde\nhani yok burda yanlışı yoklayacak hiç aralık\nbütün vadilere indik bir kez öpüşmek için \nkalmadı hiç bir tepe çıkılmadık\neriyeydik nesteren köklerine sindiğimizce\nalıcı kuş pençesiyle uçarak arınaydık\nah, bir olaydı diyorduk vakar da yoksanaydı\ndoğruydu böyle kan telef olmasın diye çabalamamız\nama kendi çeperlerimizi böyle kana buladık\ngönendi dünya bundan istifade\ndünya bayındırladı:\nBir yakış, bir yanış tasarımı beride\nöte yakada bir benî adem\nher gün küsülü kaldık.\n\nBunca yıl bu gücenik macera beni tutuklu kılan\nartık bu yaşa erdirdin beni,anladım\ngençken almadın canımı, bilmedim\ndemek gökten ağsa bile tohum yürekten düşecekmiş\nçünkü hataya bağışık büyük hatadan beri nezaret yer\nçiğ tanesi sanmak ne cüret, gözyaşıymış\ninsanın insana raptolduğu cevher.\n\nŞimdi tekrar ne yapsam dedirtme bana yarabbi\ntaşınacak suyu göster, kırılacak odunu\nkaldı bu silinmez yaşamak suçu üzerimde\nbileyim hangi suyun sakasıyım ya rabbelalemin\ntütmesi gereken ocak nerde?",
    "no": 3,
    "__v": 0
  },
  {
    "_id": "5ceb2de44d2a042ec6a36352",
    "baslik": "Amentu",
    "yil": 1974,
    "siir": "İnsan \neşref-i mahlûkattır derdi babam \nbu sözün sözler içinde bir yeri vardı \nama bir eylül günü bilek damarlarımı kestiğim zaman \nbu söz asıl anlamını kavradı \ngeçti çıvgınların, çıbanların, reklamların arasından \ngeçti tarih denilen tamahkâr tüccarı \nkararmış rakamların yarıklarından sızarak \nbu söz yüreğime kadar alçaldı \ndamar kesildi, kandır akacak \nama kan kesilince damardan sıcak \nsımsıcak kelimeler boşandı \naşk için karnıma ve göğsüme \nölüm için yüreğime sürdüğüm eczâ uçtu birden \naşk ve ölüm bana yeniden \nsu ve ateş ve toprak \nyeniden yorumlandı.\n\nDilce susup \nbedence konuşulan bir çağda \nbiliyorum kolay anlaşılmayacak \nkanatları kara fücur çiçekleri açmış olan dünyanın \nyanık yağda boğulan yapıların arasında \ndelirmek hakkını elde bulundurmak \nrahma çağdaş terimlerle yanaşmak için \nbana deha değil \nbelgeler gerekli \nkanıtlar, ifadeler, resmi mühür ve imza \ngençken \npeşpeşe kaç gece yıllarca \nacıyan, yumuşak yerlerime yaslanıp uçardım \nbilmezdim neden bazı saatler \nalaturka vakitlere ayarlı \nneden karpuz sergilerinde lüküs yanar \nyazgı desem \nkötü bir şey dokunmuş olurdu sanki dudaklarıma \nTokat \naklıma bile gelmezdi \nbabam onbeşli olmasa.\n\nMeyan kökü kazarmış babam kırlarda \nben o yaşta koltuğumda kitaplar \nişaret parmağımda zincir, cebimde sedef çakı \ncebimde kırlangıçlar çılgınlık sayfaları \nkafamda yasak düşünceler, Gide mesela. \nKar yağarken kirlenen bir şeydi benim yüzüm \nher sevinç nöbetinde kusmak sunuldu bana \ngecenin anlamı tıkansın diye ıslık çalar \nresimli bir kitaptan çalardım hayatımı \noysa hergün \nmerkep kiralayıp da kazılan kökleri \nForbes firmasına satan babamdı.\n\nBudur \nişte bir daha korkmamak için korkmaz görünen korku \nişte şehirleri bayındır gösteren yalan \nişte mevsimlerin değiştiği yerde buharlaşan \nkelepçeler, sürgünler, gençlik acılarıyla \ngüç bela kurduğum cümle işte bu; \nten kaygusu yüklü ağır bir haç taşımaktan \ntenimin olanca ağırlığı yok oldu. \nSolgun evler, ölü bir dağ, iyice solmuş dudak \nbile bir bir çınlayan \nihtilal haberidir \nve gecenin gümüş ipliklerden işlenmiş oluşu \nnisan ayları gelince vücudu hafifletir \nşahlanan grevler içinde kahkahalarım küstah \nbakışlarım beyaz bulutlara karşı obur \nmarşlara ayarlanmak hevesindeki sesim \ngider şehre ve şaraba yaltaklanarak \nbiraz ağlayabilmek için \nfotoğraflar çektirir \nbabam \nseferberlikte mekkâredir.\n\nİnsanın \ngölgesiyle tanımlandığı bir çağda \nmarşlara düşer belki birkaç şey açıklamak \nbelki ruhların gölgesi \ndüşer de marşlara \nmümkün olur babamı \nvarlık sancısıyla çağırmak: \nEzan sesi duyulmuyor \nHaç dikilmiş minbere \nKâfir Yunan bayrak asmış \nCamilere, her yere\n\nÖyle ise gel kardeşim \nHep verelim elele \nPatlatalım bombaları \nÇanlar sussun her yerde\n\nÇanlar sustu ve fakat \nbinlerce yılın yabancısı bir ses \ndeğdi minarelere:Tanrı uludur Tanrı uludur \npolistir babam \nCumhuriyetin bir kuludur \nbense \nanlamış değilim böyle maceralardan \nne Godiva geçer yoldan, ne bir kimse kör olur \nyalnız \ncoşkunluğu karşısında içlendiğim şadırvan \nnüfus cüzdanımda tuhaf \nekmek damgası durur \nbenim işim bulutlar arşınlamak gün boyu \netin ıslak tadına doğru \nyavaş yavaş uyanmak \nçocuk kemiklerinden yelkenler yapıp \nhırsız cenazelerine bine bine \ntemiz döşeklerin ürpertisinden çeşme \nkorkak dualarından cibinlikler kurarak \ndokunduğum banknotlardan tiksinmeyi itiraz \nnakışsız yaşamakları \nsilâhlanmak sanarak \nçıkardım \nboğaza tıkanan lokmanın hartasını \nçıkınımda güneşler halka dağıtmak için \nhalkı suvarmak bin saçlarımda bin ırmak \nıhtırdım caddeleri meğer ki mezarlarmış \nhazırmış zaten duvar sıkılmış bir yumruğa \nfly Pan-Am \ndrink Coca-Cola\n\nTutun ve yüzleştirin hayatları \nbiri kör batakların çırpınışında kutsal \nbiri serkeş ama oldukça da haklı. \nÖlümler \nölümlere ulanmakta ustadır \nhayatsa bir başka hayata karşı.\n\nOrada \naşk ve çocuk \nbirbirine katışmaz \nnasıl katışmıyorsa başaklara ağustos sıcağı \nkendi tehlikesi peşinden gider insan \nputların dahi damarından \naktığı güne kadar \nsürdürür yorucu kovalamacayı.\n\nHanidir görklü dünya dünyalar içre doğan? \nNerde, hangi yöremizde zihnin \ntunç surlardan berkitilmiş ülkesi \nağzı bayat suyla çalkanmış çocuğa rahim olan \nparti broşürleri yoksa kafiyeler mi? \nHangi cisimdir açıkça bilmek isterim \ntakvim yapraklarının arasını dolduran \nnedir o katı şey \nki gücü \ngönlün dağdağasını durultacak? \nHayat \ndört şeyle kaimdir, derdi babam \nsu ve ateş ve toprak. \nVe rüzgâr. \nona kendimi sonradan ben ekledim \npişirilmiş çamurun zifiri korkusunu \nham yüreğin pütürlerini geçtim \ngövdemi alemlere zerkederek \nvaroldum kayrasıyla Varedenin \neşref-i mahlûkat \nnedir bildim.",
    "no": 4,
    "__v": 0
  },
  {
    "_id": "5cf412cb764eb300176a204b",
    "baslik": "Akdeniz'in Ufka Doğru Mora Çalan Mavisi",
    "siir": "Yaz günleri beni hatırlamıyor.\nSalgılı bir hayvanla bitişiyorum yaz yaklaşınca\nyayılıyorum ortasına sevgili tüylerimin\ngeniş uykulardayım, muazzam uykularda\nyılların zulmünden haberim yok\nne de sürgün taşralı kızlar korosundan\ngeçiyor hazza yatkın dudaklarıyla gece\ncanımın ilmekleri arasından.\n\nBeni artık kimseler arayıp da bulmasın\nbeyaz harmanilerin göklere açık sofrasında\nyıktığım saltanatın dizinde inlediğim\naşkın en tabanında yattığım anlaşılmasın\nçünkü ben çok gizli bir yanlışın\ndehşetengiz yeteneğini ölçmek için\nyepyeni bir hata için iniyorum Akdeniz'e\nMeryemoğlu sanıp ben zavallı ademi\nçarmıha çaktılar orda çok zaman önce.\nÇok zaman önceydi ki otobüsler\nmermer sütunlu şehirlerden sahil çardaklarına\nnice yılgın havarilerle gidip geldi.\nHepimiz, yani taflan çiğnemekle güzelleşen çocuklar\nhavariler karşısında harami\ngövdesindeki hayvan kabarınca mecalsiz\nkutlu bir tan çıkarmayı denedik\nkayser makinasından\nanneler\nsevecen gözyaşlarıyla korurdular bizi.\n\nBizi sen ey beyhude ve baygın duyguların yırtıcısı\nsen ey loş çalgıları uykulardan çıkarıp\nBahçelerin hayatına yerleştiren esrar\nbizi bırakmıştın\nacı güller salınırdı kanımın raddelerinde\nve ben güneş altında kendini bize öptüren neyse\ngece onun kimlerle buluştuğunu araştırdım\no zaman yalın yürek kaldım şiddetin çölünde\naldanışların çölünde korkudan\ndenize dilimi soktum ayaklarımdan önce.\nBu kadar, bu kadardı Akdeniz\naslı yokmuş dinlediklerimin\neski moda güneş sanrılarından\nbir şair cesedinden hiç farkı yok denizin.\n\nYok ve yaz günleri beni hatırlamıyor\nboğulmuş hüznü gösteriyor bana memelerinden\ngeçiyorum bir yakıcı maviden derinleştirilmiş mora\ngeçiyorum ayaklarım altında kumları hıçkırtarak\nKara yaz! Karanlık yaz! Kararan vücutlardan\nrıhtıma varmayan ceset elbette hatırlanmaz.",
    "yil": 1974,
    "no": 5,
    "__v": 0
  },
  {
    "_id": "5d04dee1c908470017a4267e",
    "baslik": "Sebeb-i Telif",
    "siir": "Başkalarının aşkıyla başlıyor hayatımız \r\nyaprakla yağmurun aşkı meselâ \r\nkim olsa serpilen coşturuyor bizi \r\nimreniyoruz başkalarının mahvına. \r\nYağmur mahvoluyor çarparak \r\nkendini parçalıyor mâşukunun açılan kıvrımında \r\nyaprak dirimle irkiliyor nazlı ve mağrur \r\nsilkiniyor vuran her damlayla.\r\n\r\nBaşkalarının aşkıyla başlıyor hayatımız \r\nbakıp başkasının başkayla kurduğu bağlantıya \r\naşka dair diyoruz ilk anı bu olmalı \r\nilkönce damarlarımızda duyuyoruz çağıltısını \r\nuzak iklimlerin \r\nkokusu gitmediğimiz şehirlerin önceden \r\nbir baş dönmesiyle kabarıyor hafızamızda \r\nsonra ayrılıklar düşüne dalıyoruz: \r\nBize ait olan ne kadar uzakta!\r\n\r\nBaşkalarının aşkıyla başlıyor hayatımız \r\nbaşkalarının düşünceleriyle değil. \r\n“Üstümde yıldızlı gök”demişti Königsberg’li \r\n“içerimde ahlâk yasası”. \r\nYasa mı? Kimin için? Neyi berkitir yasa? \r\nİster gözünü oğuştur,istersen tetiği çek \r\nidam mangasındasın içinde yasa varsa. \r\nGirmem,girmedim mangalara \r\nYer etmedi adalet duygusu \r\niçimde benim \r\nçünkü ben \r\nömrümce adle boyun eğdim. \r\nYıldızlı gökten bana soracak olursanız \r\nkösnüdüm ona karşı \r\nonu hep altımda istedim.\r\n\r\nBaşkalarının aşkıyla başlıyor hayatımız \r\nve devam ediyor başkalarının hınçlarıyla \r\ndüşmanı gösteriyorlar,ona saldırıyoruz \r\nsiz gidin artık \r\ndüşman dağıldı dedikleri bir anda \r\nanlaşılıyor \r\nbaştan beri bütün yenik düşenlerle \r\naynı kışlaktaymışız \r\nincecik yas dumanı herkese ulaşıyor \r\nsevinç günlerine hürya doluştuğumuzda \r\ntek başınayız.\r\n\r\nDiyorum hepimizin bir gizli adı olsa gerek \r\nbelki çocuk ve ihtiyar,belki kadın ve erkek \r\nhepimiz,herbirimiz gizli bir isimle adaşız \r\nyoksa şimdiye kadar hesapların tutması lâzımdı \r\nhayatımıza kendi adımızla başlardık \r\nbilmediğimiz bu isim,hesaptaki bu açık \r\nbelki dilimi çözer,aşkımı başlatırım \r\naşk yazılmamış olsa bile adımın üzerine \r\nadımı aşkın üstüne kendim yazarım.",
    "yil": 1974,
    "no": 6,
    "__v": 0
  },
  {
    "_id": "5d04dfeec908470017a4267f",
    "baslik": "Karlı Bir Gece Vakti Bir Dostu Uyandırmak",
    "siir": "Benim adım insanların hizasına yazılmıştır. \r\nHer gün yepyeni rüyalarla ödenebilen bir ceza bu. \r\n\r\nKeşke yağmuru çağıracak kadar güzel olmasaydım \r\nÖlüm ve acılar çatsaydı beni \r\nDüşüncem yapma çiçekler kadar gösterişli ve parlak \r\nSözlerim ihanete varacak doğrulukta olsaydı. \r\nAnmaya gücüm yetseydi de konuşsaydım \r\nDiri-gergin kasları konuşsaydım \r\n“Kardeşler! ” deseydim “Kardeşlerim! ” \r\n“Bakın yaklaşıyor yaklaşmakta olan \r\n“Bakın yaklaşıyor yaklaşmakta olan \r\n“Bakın yaklaşıyor...” \r\nYazık, şairler kadar cesur değilim \r\nÇocukların üşüdükleri anlaşılıyor bütün yaşadıklarımdan \r\nGövdem kuduz yarasalarla birazcık yatışıyor. \r\n\r\nBenim gövdem yıllar boyu sevmekle tarazlandı \r\nÖyle bir çalımlarla gecenin çitlerinden atlardım \r\nBir güneş sayardım kendimi denizin karşısında \r\nÇünkü çam kokularına sürtünüp ağırlaşan ruhların \r\nİnanmazdım dosyalara sığacağına \r\nGittikçe ışıldardım dükkânlar kararırken \r\nHüznün o beyaz etrafına sakallarım batardı. \r\n\r\nBenim adım bilinen cevapların üstüne mühürlenmiş \r\nEllerim tütsülenmiş \r\nEvlerin yeni yıkanmış serin taşlıklarında \r\nDirgenler, bakraçlar, tornavidalar \r\nBende kül, bende kanat, bende gizem bırakmadılar \r\nVe içinden bir baş ağrısı gibi çınlamaktansa \r\nGövdem açık bir hedef kılındı belâlara. \r\nVe bu yüzden yakışıksız oluyor \r\nİnsanları hummalı baharlar olarak tanımlamak \r\nVe bu yüzden göğsümde dakikalar \r\nİnce parmaklar halinde geziniyor \r\nKonvoylar geçiyor meşelikler arasından \r\nBir yaprak kapatıyorum hayatımın nemli taraflarına \r\nÖlümden anlayan, ciddi bir yaprak \r\nUnutulacak diyorum, iyice unutulsun \r\nNeden büyük ırmaklardan bile heyecanlıydı \r\nKarlı bir gece vakti bir dostu uyandırmak.",
    "yil": 1975,
    "no": 7,
    "__v": 0
  }
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ismetozel.herokuap" path="/dok" %}
{% api-method-summary %}
Tüm şiirleri HTML formatında getirme
{% endapi-method-summary %}

{% api-method-description %}
Bulunan tüm şiirleri HTML sayfasında gösterir.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
HTML sayfası: https://ismetozel.herokuapp.com/dok
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ismetozel.herokuapp.com" path="/rastgele/json" %}
{% api-method-summary %}
Rastgele JSON formatında bir şiir getirme
{% endapi-method-summary %}

{% api-method-description %}
JSON formatında rastgele bir şiir döndürür
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "_id": "5cf412cb764eb300176a204b",
  "baslik": "Akdeniz'in Ufka Doğru Mora Çalan Mavisi",
  "siir": "Yaz günleri beni hatırlamıyor.\nSalgılı bir hayvanla bitişiyorum yaz yaklaşınca\nyayılıyorum ortasına sevgili tüylerimin\ngeniş uykulardayım, muazzam uykularda\nyılların zulmünden haberim yok\nne de sürgün taşralı kızlar korosundan\ngeçiyor hazza yatkın dudaklarıyla gece\ncanımın ilmekleri arasından.\n\nBeni artık kimseler arayıp da bulmasın\nbeyaz harmanilerin göklere açık sofrasında\nyıktığım saltanatın dizinde inlediğim\naşkın en tabanında yattığım anlaşılmasın\nçünkü ben çok gizli bir yanlışın\ndehşetengiz yeteneğini ölçmek için\nyepyeni bir hata için iniyorum Akdeniz'e\nMeryemoğlu sanıp ben zavallı ademi\nçarmıha çaktılar orda çok zaman önce.\nÇok zaman önceydi ki otobüsler\nmermer sütunlu şehirlerden sahil çardaklarına\nnice yılgın havarilerle gidip geldi.\nHepimiz, yani taflan çiğnemekle güzelleşen çocuklar\nhavariler karşısında harami\ngövdesindeki hayvan kabarınca mecalsiz\nkutlu bir tan çıkarmayı denedik\nkayser makinasından\nanneler\nsevecen gözyaşlarıyla korurdular bizi.\n\nBizi sen ey beyhude ve baygın duyguların yırtıcısı\nsen ey loş çalgıları uykulardan çıkarıp\nBahçelerin hayatına yerleştiren esrar\nbizi bırakmıştın\nacı güller salınırdı kanımın raddelerinde\nve ben güneş altında kendini bize öptüren neyse\ngece onun kimlerle buluştuğunu araştırdım\no zaman yalın yürek kaldım şiddetin çölünde\naldanışların çölünde korkudan\ndenize dilimi soktum ayaklarımdan önce.\nBu kadar, bu kadardı Akdeniz\naslı yokmuş dinlediklerimin\neski moda güneş sanrılarından\nbir şair cesedinden hiç farkı yok denizin.\n\nYok ve yaz günleri beni hatırlamıyor\nboğulmuş hüznü gösteriyor bana memelerinden\ngeçiyorum bir yakıcı maviden derinleştirilmiş mora\ngeçiyorum ayaklarım altında kumları hıçkırtarak\nKara yaz! Karanlık yaz! Kararan vücutlardan\nrıhtıma varmayan ceset elbette hatırlanmaz.",
  "yil": 1974,
  "no": 5,
  "__v": 0
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ismetozel.herokuapp.com" path="/rastgele/html" %}
{% api-method-summary %}
Rastgele HTML formatında bir şiir getirme
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://ismetozel.herokuapp.com" path="/" %}
{% api-method-summary %}
Şiir ekleme
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Content-type" type="string" required=false %}
application/x-www-form-urlencoded
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-form-data-parameters %}
{% api-method-parameter name="siir" type="string" required=true %}
Şiirin kendisi
{% endapi-method-parameter %}

{% api-method-parameter name="yil" type="string" required=true %}
Şiirin yazıldığı yıl \(Örn: 1999\)
{% endapi-method-parameter %}

{% api-method-parameter name="baslik" type="string" required=true %}
Şiirin başlığı \(Örn: Amentu\)
{% endapi-method-parameter %}
{% endapi-method-form-data-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "Eklenenler": {
    "_id": "5d04dfeec908470017a4267f",
    "baslik": "Karlı Bir Gece Vakti Bir Dostu Uyandırmak",
    "siir": "Benim adım insanların hizasına yazılmıştır. \r\nHer gün yepyeni rüyalarla ödenebilen bir ceza bu. \r\n\r\nKeşke yağmuru çağıracak kadar güzel olmasaydım \r\nÖlüm ve acılar çatsaydı beni \r\nDüşüncem yapma çiçekler kadar gösterişli ve parlak \r\nSözlerim ihanete varacak doğrulukta olsaydı. \r\nAnmaya gücüm yetseydi de konuşsaydım \r\nDiri-gergin kasları konuşsaydım \r\n“Kardeşler! ” deseydim “Kardeşlerim! ” \r\n“Bakın yaklaşıyor yaklaşmakta olan \r\n“Bakın yaklaşıyor yaklaşmakta olan \r\n“Bakın yaklaşıyor...” \r\nYazık, şairler kadar cesur değilim \r\nÇocukların üşüdükleri anlaşılıyor bütün yaşadıklarımdan \r\nGövdem kuduz yarasalarla birazcık yatışıyor. \r\n\r\nBenim gövdem yıllar boyu sevmekle tarazlandı \r\nÖyle bir çalımlarla gecenin çitlerinden atlardım \r\nBir güneş sayardım kendimi denizin karşısında \r\nÇünkü çam kokularına sürtünüp ağırlaşan ruhların \r\nİnanmazdım dosyalara sığacağına \r\nGittikçe ışıldardım dükkânlar kararırken \r\nHüznün o beyaz etrafına sakallarım batardı. \r\n\r\nBenim adım bilinen cevapların üstüne mühürlenmiş \r\nEllerim tütsülenmiş \r\nEvlerin yeni yıkanmış serin taşlıklarında \r\nDirgenler, bakraçlar, tornavidalar \r\nBende kül, bende kanat, bende gizem bırakmadılar \r\nVe içinden bir baş ağrısı gibi çınlamaktansa \r\nGövdem açık bir hedef kılındı belâlara. \r\nVe bu yüzden yakışıksız oluyor \r\nİnsanları hummalı baharlar olarak tanımlamak \r\nVe bu yüzden göğsümde dakikalar \r\nİnce parmaklar halinde geziniyor \r\nKonvoylar geçiyor meşelikler arasından \r\nBir yaprak kapatıyorum hayatımın nemli taraflarına \r\nÖlümden anlayan, ciddi bir yaprak \r\nUnutulacak diyorum, iyice unutulsun \r\nNeden büyük ırmaklardan bile heyecanlıydı \r\nKarlı bir gece vakti bir dostu uyandırmak.",
    "yil": 1975,
    "no": 7,
    "__v": 0
  }
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

    {
      "errors": {
        "siir": {
          "message": "Path `siir` is required.",
          "name": "ValidatorError",
          "properties": {
            "message": "Path `siir` is required.",
            "type": "required",
            "path": "siir"
          },
          "kind": "required",
          "path": "siir"
        },
        "baslik": {
          "message": "Path `baslik` is required.",
          "name": "ValidatorError",
          "properties": {
            "message": "Path `baslik` is required.",
            "type": "required",
            "path": "baslik"
          },
          "kind": "required",
          "path": "baslik"
        }
      },
      "_message": "siir validation failed",
      "message": "siir validation failed: siir: Path `siir` is required., baslik: Path `baslik` is required.",
      "name": "ValidationError"
    }
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://ismetozel.herokuapp.com" path="/baslik" %}
{% api-method-summary %}
Belirli bir şiirin içeriğini değiştirme
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="baslik" type="string" required=true %}
İlgili şiirin başlığı
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Content-type" type="string" required=false %}
application/x-www-form-urlencoded
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-form-data-parameters %}
{% api-method-parameter name="siir" type="string" required=false %}
Yeni şiir içeriği
{% endapi-method-parameter %}

{% api-method-parameter name="yil" type="string" required=false %}
Değiştirilecek şiirin yılı
{% endapi-method-parameter %}

{% api-method-parameter name="baslik" type="string" required=false %}
Değiştirilecek şiirin başlığı
{% endapi-method-parameter %}
{% endapi-method-form-data-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
OK
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

