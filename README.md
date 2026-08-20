# Ulam Seyal Full-Stack Application

Next.js App Router application with a public mental-wellness website, a Next.js backend, PostgreSQL through Prisma, and one centralized admin dashboard. There are no counsellor or patient accounts.

## Architecture

- Public routes remain ordinary Next.js routes.
- Published Counsellors, services and resources are read from PostgreSQL.
- Public bookings and enquiries use validated Route Handlers.
- `/admin/*` uses one database-backed admin identity and an HttpOnly signed session cookie.
- Admin mutations are Server Actions that verify the session on the server.
- Prisma is accessed through the singleton in `lib/prisma.ts`.
- Local development media is stored in `public/uploads`; only its URL and metadata are stored in PostgreSQL. Replace this with object storage for horizontally scaled production deployments.
- Application timezone: `Asia/Kolkata`.

## Setup

1. Install PostgreSQL and create an empty database.
2. Copy `.env.example` to `.env` and set strong, private values. `AUTH_SECRET` should contain at least 32 random characters. Never commit `.env`.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Generate Prisma Client and deploy migrations:

   ```bash
   npm run db:generate
   npm run db:deploy
   ```

   During local schema development use `npm run db:migrate -- --name descriptive_name`. Production must use `npm run db:deploy`, not `prisma db push`.

5. Create/update the initial admin from `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_NAME`:

   ```bash
   npm run db:seed
   ```

6. Start development:

   ```bash
   npm run dev
   ```

## Verification

```bash
npm run db:validate
npm run db:generate
npm run lint
npm run build
```

## Main routes

- Public: `/`, `/about`, `/services`, `/counsellors`, `/resources`, `/contact`, `/book-consultation`
- Admin login: `/admin/login`
- Dashboard: `/admin`
- Operations: `/admin/bookings`, `/admin/counsellors`, `/admin/services`, `/admin/availability`, `/admin/enquiries`
- Content: `/admin/resources`, `/admin/testimonials`, `/admin/faqs`, `/admin/homepage`, `/admin/media`
- Configuration: `/admin/settings`, `/admin/account`

## Security notes

- Passwords are hashed with bcrypt and never stored in plaintext.
- Admin cookies are HttpOnly, SameSite=Lax, time-limited, and Secure in production.
- Every admin Server Action performs server-side authorization.
- Zod validates public submissions server-side.
- Keep PostgreSQL private and use TLS in production.
- Local media upload is limited to image MIME types and 5 MB; production should additionally scan uploads and use managed object storage.
- Booking records intentionally avoid diagnosis and detailed medical-history fields.
