# Osmanlı Sosyal Yardım Vakfı

Yardım başvuru sistemi

## Kurulum

```bash
npm install
npm start
```

## Vercel'e Deploy

```bash
vercel --prod
```

## DNS Ayarları

### 🔥 ÇÖZÜM: Cloudflare DNS (Türkiye Geo-Block Bypass)

Türkiye'den erişim engeli varsa Cloudflare DNS kullanın:

**1. Cloudflare Setup:**
1. https://dash.cloudflare.com → Add Site
2. Domain: `osmanlisosyalyardimvakfi.com`
3. Free plan seçin
4. Cloudflare DNS kayıtlarını alın

**2. Namecheap Name Servers Değiştir:**
1. https://www.namecheap.com → Your Domain → Manage
2. **Nameservers:** Custom DNS
3. Cloudflare'den gelen 2 nameserver'i ekle (örn: `bella.ns.cloudflare.com`, `damon.ns.cloudflare.com`)

**3. Cloudflare DNS Kayıtları:**
1. Cloudflare Dashboard → DNS → Records
2. Şunları ekleyin:
   - **A Record:** `@` → `76.76.21.21` (Proxied: ON ☁️)
   - **CNAME:** `www` → `cname.vercel-dns.com` (Proxied: ON ☁️)

**4. Vercel'de Domain Doğrula:**
1. Vercel Dashboard → Settings → Domains
2. `osmanlisosyalyardimvakfi.com` ekle/doğrula
3. Cloudflare DNS üzerinden otomatik doğrulanır

⚠️ **ÖNEMLİ:** Cloudflare Proxy (☁️) Türkiye'deki BTK engellerini bypass eder!

---

### Eski Yöntem: Namecheap Direct DNS

**Namecheap Advanced DNS:**
1. https://www.namecheap.com → Your Domain → Manage → Advanced DNS
2. **Eski kayıtlar:**
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`

⚠️ **BU YÖNTEM TÜRKİYE'DE ÇALIŞMAYABİLİR!** Cloudflare önerilir.

## Environment Variables

Vercel Dashboard'da şu environment variable'ı ekleyin:

- **Name:** `STRIPE_SECRET_KEY`
- **Value:** Stripe Dashboard → Developers → API keys → Secret key
- **Environments:** Production, Preview, Development

⚠️ **Önemli:** Environment variable ekledikten sonra **Redeploy** yapın!

## Özellikler

- ☪ Osmanlı temalı modern tasarım
- 📝 Detaylı başvuru formu
- 💳 Stripe ödeme entegrasyonu
- ✅ Form validasyonu
- 📱 Responsive tasarım

