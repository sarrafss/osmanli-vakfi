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

### Vercel'den Gelen DNS Kayıtları

Vercel Dashboard → Settings → Domains → `osmanlisosyalyardimvakfi.com`

Orada gösterilen DNS kayıtlarını Namecheap'e ekleyin:

**Namecheap Advanced DNS:**
1. https://www.namecheap.com → Your Domain → Manage → Advanced DNS
2. Vercel'in gösterdiği kayıtları ekleyin

**Genellikle şunlar:**
- **A Record:** `@` → `76.76.21.21`
- **CNAME:** `www` → `cname.vercel-dns.com`

⚠️ **ÖNEMLİ:** Vercel Dashboard'da "DNS change recommended" yazıyorsa, Namecheap'te bu kayıtları güncelleyin!

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

