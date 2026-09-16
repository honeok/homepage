import { Home } from "@/components/home";
import { getSocialIconStyles } from "@/lib/icons";

export default async function Page() {
  const iconStyles = await getSocialIconStyles();

  return <Home iconStyles={iconStyles} />;
}
