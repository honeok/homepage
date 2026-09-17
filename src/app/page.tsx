import { Home } from "@/components/home";
import { PageShell } from "@/components/layout/page-shell";
import { getSocialIconStyles } from "@/lib/icons";

export default async function Page() {
  const iconStyles = await getSocialIconStyles();

  return (
    <PageShell>
      <Home iconStyles={iconStyles} />
    </PageShell>
  );
}
