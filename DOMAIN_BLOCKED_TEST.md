# Domain Block Test - Türkiye Erişim Kontrolü

## 🔍 DOMAIN BLOCK NASIL ANLAŞILIR?

### 1️⃣ Basit URL Test (Hemen Şimdi!)
Bu linkleri tarayıcıda açın ve sonuçları yazın:

**Test 1: Temel Erişim**
- Link: https://osmanlisosyalyardimvakfi.com
- Bulgundan: [Açıldı / Hata: ... / "Güvenli bağlantı değil" / "Bu siteye erişilemiyor"]

**Test 2: Www Subdomain**
- Link: https://www.osmanlisosyalyardimvakfi.com
- Bulgundan: [Açıldı / Hata: ...]

### 2️⃣ Farklı Cihaz/Operatör Testi
Aşağıdakilerden test edin:

**A) Türkiye'de Farklı WiFi/Operatörlerden:**
- [ ] Türk Telekom WiFi
- [ ] Turkcell 4G/5G
- [ ] Vodafone 4G/5G
- [ ] Başka bir operatör

**B) Farklı Cihazlardan:**
- [ ] Telefon (Android)
- [ ] Telefon (iPhone)
- [ ] Masaüstü bilgisayar
- [ ] Tablet

### 3️⃣ DNS Testi
Bulgaristan'dan DNS'i kontrol edin:

**Windows (PowerShell):**
```powershell
Resolve-DnsName osmanlisosyalyardimvakfi.com
```

**Sonuç:** [IP adresleri listesi görünmeli]

### 4️⃣ Cloudflare Test
Cloudflare üzerinden erişimi test edin:

**Cloudflare Dashboard:**
1. https://dash.cloudflare.com → Sites → osmanlisosyalyardimvakfi.com
2. DNS → Records
3. Tüm kayıtlar **☁️ (Proxied)** olmalı!
4. A Record IP: `216.198.79.1` olmalı

### 5️⃣ Online Block Checker Araçları
Bu sitelere domain'i yazın ve sonucu paylaşın:

**Global Test:**
- https://www.isitdownrightnow.com/osmanlisosyalyardimvakfi.com.html
- https://downforeveryoneorjustme.com/osmanlisosyalyardimvakfi.com

**Türkiye Specific:**
- https://engelliweb.com → Domain ara
- https://www.accessnow.org/censorship-map/ → Turkey check

### 6️⃣ Cloudflare Analytics Check
**Cloudflare Dashboard → Analytics → Traffic:**
- Türkiye'den trafik geliyor mu?
- Türkiye görünüyor mu?
- Hangı ülkelerden geliyor?

### 7️⃣ BTK Resmi Listesi
**BTK Engellenen Sitelər:**
- Site: https://www.tib.gov.tr/
- Domain: `osmanlisosyalyardimvakfi.com`
- Arama sonucu: [Bulundu / Bulunamadı]

---

## 🎯 BLOCK OLDUĞUNU GÖSTEREN İŞARETLER

### ✅ **Kesin Block İşaretleri:**
- [ ] Türkiye'den hiçbir cihazdan açılmıyor
- [ ] Wifi de 4G de açılmıyor
- [ ] "Güvenli bağlantı değil" / "Siteye erişilemiyor" hatası
- [ ] Bulgari stand/Diğer ülkelerden açılıyor
- [ ] VPN ile Türkiye'den açılıyor

### ⚠️ **Muhtemel Block:**
- [ ] Bazı yerlerden açılıyor, bazılarından açılmıyor
- [ ] DNS resolved ediliyor ama SSL hata veriyor
- [ ] Cloudflare Analytics'te Türkiye trafiği YOK

### ❌ **Block Değil:**
- [ ] Türkiye'den açılıyor ama yavaş
- [ ] Bazı operatörlerden açılıyor
- [ ] DNS/SSL sorunları var ama açılabiliyor

---

## 🛠️ TEST SONUÇLARI PAYLAŞ

**Lütfen şunları gönderin:**

1. **Bulgaristan'dan test:**
   - Açılıyor mu? [Evet/Hayır]

2. **Türkiye'den test (varsa):**
   - Açılıyor mu? [Evet/Hayır]
   - Hata mesajı ne? [...]
   - Hangi operatör? [...]

3. **Cloudflare DNS durumu:**
   - Proxied ☁️ mi? [Evet/Hayır]
   - IP adresi? [...]

4. **BTK listesi:**
   - Liste'de var mı? [Evet/Hayır/Bulunamadım]

---

## 🔥 ÇÖZÜM ÖNERİSİ

**Eğer kesin block varsa:**
→ Alternatif domain alın (osmanli kelimesi olmadan)
→ Hemen Vercel'e ekleyin
→ 301 redirect ile eski domain'i yeni domain'e yönlendirin

**Eğer block değil ama erişilemiyorsa:**
→ DNS propagation sorunu olabilir
→ 24-48 saat bekleyin
→ Cloudflare proxy ☁️ açık olduğundan emin olun

