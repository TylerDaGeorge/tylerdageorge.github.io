# Eden Stripe Checkout — development only

Cloudflare Worker for CET Stripe Checkout. CSC remains RFQ-only while prototype validation continues.

## Setup
1. Install Wrangler and authenticate with Cloudflare.
2. Rotate any Stripe test secret previously exposed in chat.
3. Set secrets with `npx wrangler secret put STRIPE_SECRET_KEY` and `npx wrangler secret put STRIPE_WEBHOOK_SECRET`.
4. Deploy with `npx wrangler deploy`.
5. Configure the exact Worker URL in `tables/cet.js`, and configure CORS for the staging origin before testing.
6. Register `https://<worker-host>/webhook` as a Stripe test webhook destination.
7. Configure Stripe Tax registrations and verify the correct product tax code. The current placeholder tax code must be reviewed.
8. Implement a durable idempotent order database, fulfillment workflow, and freight calculation before enabling Checkout. Keep CHECKOUT_ENABLED=false until those are complete.

Current safety controls: server-side catalog pricing, allowlisted CET variants, 1–5 units, US addresses, disabled-by-default Checkout, signed webhook verification. The Worker does not yet fulfill orders, quote freight, or persist order records. Do not enable it for real orders.

Use Stripe CLI/test-mode cards to exercise success, declines, tax, cancellations, webhook retries, and order persistence after implementing the missing pieces.
