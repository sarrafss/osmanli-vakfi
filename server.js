require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Stripe Checkout Session endpoint
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { amount, delivery, customerInfo } = req.body;
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'try',
                    product_data: {
                        name: 'Osmanlı Sosyal Yardım Vakfı - Başvuru İşlem Ücreti',
                        description: 'Yardım talebiniz için işlem ücreti',
                    },
                    unit_amount: amount * 100, // Convert TL to kuruş
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/`,
            customer_email: customerInfo.email || 'basvuru@osmanlivakfi.com',
            metadata: {
                delivery_type: delivery,
                customer_name: customerInfo.name,
                customer_phone: customerInfo.phone,
                customer_address: customerInfo.address
            }
        });

        res.json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Osmanlı Vakfı sunucusu çalışıyor: http://localhost:${PORT}`);
});

