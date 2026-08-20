import {ServiceForm} from "../service-form";import {getSiteSettings} from "@/lib/site-settings";
export default async function NewService(){const settings=await getSiteSettings();return <section className="admin-page"><div className="admin-page-title"><div><p>Admin / Services / New</p><h1>Add Service</h1></div></div><ServiceForm defaultDuration={Number(settings.defaultDuration)}/></section>}
