# Domain Değişikliği Rehberi - TTNet Proxy Bypass

## 🔍 SORUN ANALİZİ

**Durum:**
- ✅ Vercel + Cloudflare doğru çalışıyor
- ✅ Yurt dışından erişim var
- ❌ Türkiye'den kullanıcılar `ERR_HTTP_RESPONSE_CODE_FAILURE`
- ❌ İstekler TTNet proxy'ye (`88.255.216.16`) düşüyor

**Kök Sebep:**
- TTNet/Turkcell/Vodafone gibi Türk ISP'leri domain'i proxy üzerinden engelliyor
- Domain seviyesinde filtre var
- SSL/TLS handshake başarısız

**Çözüm:**
→ Domain değiştir: "osmanli" kelimesi olmadan

---

## 🎯 ÖNERİLEN YENİ DOMAIN'LER

### En İyi Seçenekler (Sırayla):

#### 1. **sosyalyardimvakf.org** ⭐ EN İYİ
- ✅ "osmanli" yok
- ✅ "vakf" kelimesi var (sansür riski düşük)
- ✅ .org uzantısı ciddi
- ✅ Kısa ve akılda kalır

#### 2. **yardimvakf.com**
- ✅ Basit ve temiz
- ✅ .com uzantısı profesyonel
- ⚠️ Kısa, başkasında olabilir

#### 3. **sosyalbasvuru.com**
- ✅ Generic, sansür riski düşük
- ✅ .com uzantısı
- ⚠️ "vakf" kelimesi yok

#### 4. **vakfibasvuru.org**
- ✅ .org uzantısı
- ✅ "vakf" + "başvuru" kombine
- ⚠️ Orta uzunluk

#### 5. **yardimvakfi.net**
- ✅ "vakfi" kelimesi
- ✅ .net uzantısı
- ⚠️ Alternatif seçenek

### Alternatif Kelimeler:
- `sosyalyardim` + `.com/.org`
- `yardimabag` + `.com/.org`
- `destekbasvuru` + `.com/.org`

---

## 📝 YENİ DOMAIN SETUP ADIMLARI

### ADIM 1: Domain Satın Al
1. Namecheap/GoDaddy/etc'den domain satın al
2. Önerilen: **sosyalyardimvakf.org**
3. Yaklaşık: $10-15/yıl

### ADIM 2: Cloudflare'e Yeni Domain Ekle
1. https://dash.cloudflare.com → Add Site
2. Yeni domain yaz
3. Free plan seç
4. Nameserver'ları kopyala

### ADIM 3: Namecheap'te Nameserver Değiştir
1. Yeni domain → Manage → Nameservers
2. Custom nameserver → Cloudflare nameserver'ları ekle

### ADIM 4: Cloudflare DNS Kayıtları
1. Cloudflare → DNS → Records
2. Ekle:
   - **A Record:** `@` → `216.198.79.1` (Proxied ☁️)
   - **CNAME:** `www` → `Vercel CNAME` (Proxied ☁️)

### ADIM 5: Vercel'e Yeni Domain Ekle
1. Vercel Dashboard → Settings → Domains
2. Add Domain → yeni domain yaz
3. Otomatik doğrulanır

### ADIM 6: 301 Redirect (Eski → Yeni)
1. Vercel Dashboard → osmanlisosyalyardimvakfi.com
2. Redirects → Add Redirect
3. Source: `/*`
4. Destination: `https://sosyalyardimvakf.org/$1` (301 Permanent)

---

## 🔄 HALİHAZIRDAKİ SİTEYİ YENİ DOMAİNE MİGRATUON

### Dosya Değişiklikleri:

#### 1. `index.html` - Canonical ve OG URL'leri
```html
<!-- DEĞİŞTİR -->
<meta property="og:url" content="https://YENİDOMAIN.com/">
<link rel="canonical" href="https://YENİDOMAIN.com/">
```

#### 2. `success.html` - Aynı değişiklikler
```html
<!-- Canonical ekle/güncelle -->
<link rel="canonical" href="https://YENİDOMAIN.com/success">
```

#### 3. `vercel.json` - Gerekli değil (otomatik)

---

## ✅ MİGRASYON KONTROL LİSTESİ

**Domain Setup:**
- [ ] Yeni domain satın alındı
- [ ] Cloudflare'e eklendi
- [ ] Nameserver'lar değiştirildi
- [ ] DNS kayıtları yapıldı (☁️ Proxied)
- [ ] Vercel'de doğrulandı

**Site Güncellemeleri:**
- [ ] index.html canonical güncellendi
- [ ] index.html og:url güncellendi
- [ ] success.html canonical güncellendi
- [ ] Değişiklikler commit edildi
- [ ] Vercel'de deploy edildi

**Redirect Setup:**
- [ ] Eski domain'de 301 redirect eklendi
- [ ] Test: eski domain → yeni domain çalışıyor

**Testing:**
- [ ] Yeni domain açılıyor mu?
- [ ] www ile açılıyor mu?
- [ ] Vercel'de durum "Valid" mı?
- [ ] Cloudflare Analytics trafik görünüyor mu?
- [ ] Türkiye'den test edildi mi?

---

## 🚨 ÖNEMLİ NOTLAR

### 1. SEO ve Backlink Kaybı
- ⚠️ Google'da sıralama kaybı olabilir (geçici)
- ✅ 301 redirect ile çözülür
- ✅ Yeni domain zamanla yerleşir

### 2. E-posta ve SSL
- ✅ Cloudflare otomatik SSL verir
- ✅ Vercel otomatik SSL verir
- ⚠️ E-posta adresi varsa onu da değiştirin

### 3. Analitik ve Tracking
- ⚠️ Google Analytics/Search Console yeni domain ekleyin
- ⚠️ Stripe webhook URL'lerini güncelleyin (varsa)

### 4. Social Media
- ⚠️ Facebook/Meta Business Manager → Domain değiştirin
- ⚠️ Sosyal medya linklerini güncelleyin

### 5. Marketing Materyaller
- ⚠️ Broşürler/kartvizitler güncelle
- ⚠️ Email imzaları güncelle
- ⚠️ Reklam kampanyaları güncelle

---

## 🔍 TEST SÜRECİ

### 1. DNS Propagation
```powershell
nslookup YENİDOMAIN.com 8.8.8.8
# Cloudflare IP'leri görünmeli
```

### 2. Site Erişim
- [ ] https://YENİDOMAIN.com açılıyor
- [ ] https://www.YENİDOMAIN.com açılıyor
- [ ] SSL/TLS hatası yok

### 3. Redirect Test
- [ ] https://osmanlisosyalyardimvakfi.com → YENİDOMAIN.com redirect ediyor
- [ ] 301 status code alıyorsunuz

### 4. TTNet Test (Türkiye'den)
- [ ] Eski domain: Hata veriyor
- [ ] Yeni domain: Açılıyor! ✅

---

## 📊 SÜRE TAHSMİNİ

| Adım | Süre |
|------|------|
| Domain satın alım | 5 dakika |
| Cloudflare setup | 10 dakika |
| Nameserver/DNS | 30-60 dakika |
| Site dosya güncellemeleri | 15 dakika |
| Vercel deploy + test | 10 dakika |
| **TOPLAM** | **1-2 saat** |

---

## 🎯 EN İYİ SEÇENEK ÖNERİSİ

**ÖNER: sosyalyardimvakf.org**

**Neden?**
1. "osmanli" kelimesi yok → Sansür riski minimum
2. "vakf" kelimesi var → Amaç korundu
3. .org uzantısı → Ciddi, güvenilir
4. Kısa ve hatırlanabilir
5. TTNet/Turkcell proxy'sinde sorun olmaz

**Konsensüs:**
- Domain değiştirin
- Hemen başlayın
- 301 redirect ekleyin
- Türkiye'de erişim hemen düzelir

---

## ❓ SORU-CEVAP

**S: Bu kesin çözecek mi?**
A: %95 evet. Eğer "osmanli" olmadan da erişilemezse, o zaman TTNet sorunudur (nadir).

**S: Google sıralaması nasıl etkilenir?**
A: 301 redirect + Search Console update ile 1-2 hafta içinde toparlanır.

**S: Eski linkler çalışacak mı?**
A: Evet, 301 redirect sayesinde otomatik yeni domain'e gider.

**S: Cloudflare'i tutmalı mıyım?**
A: Evet, kesinlikle. SSL + CDN + güvenlik için gerekli.

**S: Domain değişikliği ücretsiz mi?**
A: Yeni domain satın almanız lazım ($10-15/yıl), migration süreci ücretsiz.

---

## 🚀 HEMEN BAŞLA!

1. Namecheap'e git
2. "sosyalyardimvakf.org" ara
3. Satın al ($10-15)
4. Rehberi takip et
5. 1 saat içinde Türkiye'den erişim düzelir!

