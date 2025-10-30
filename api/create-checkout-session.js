const stripe = require('stripe');

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        // Check Stripe key
        if (!process.env.STRIPE_SECRET_KEY) {
            console.error('❌ STRIPE_SECRET_KEY environment variable is missing!');
            res.status(500).json({ error: 'Server configuration error' });
            return;
        }

        // Initialize Stripe with key
        const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

        // Request body validation
        console.log('📥 Request body:', JSON.stringify(req.body));
        
        if (!req.body || !req.body.amount) {
            console.error('❌ Amount missing!');
            res.status(400).json({ 
                error: 'Bad Request - Amount is required',
                received: req.body 
            });
            return;
        }
        const { amount, delivery, customerInfo } = req.body;
        
        console.log('✅ API called with amount:', amount);
        
        const session = await stripeClient.checkout.sessions.create({
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
            success_url: `${req.headers.origin || req.headers.referer}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin || req.headers.referer}/`,
            customer_email: customerInfo.email || 'basvuru@osmanlivakfi.com',
            payment_intent_data: {
                statement_descriptor: 'OSMANLI VAKFI',
                statement_descriptor_suffix: 'Basvuru',
            },
            metadata: {
                delivery_type: delivery,
                customer_name: customerInfo.name,
                customer_phone: customerInfo.phone,
                customer_address: customerInfo.address
            }
        });

        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ 
            error: error.message || 'Internal server error',
            details: error.type || 'stripe_error'
        });
    }
};

