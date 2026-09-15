import { ReferralForm } from "../referral-form";

export const dynamic = "force-dynamic";

export default function NewReferralPage() {
  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Referrals Services / New</p>
          <h1>Add Referral Specialist / Service</h1>
        </div>
      </div>
      <ReferralForm />
    </section>
  );
}
