import Authentication from "@/pages/Authentication";

export default async function AuthenticationPage({
  searchParams,
}: {
  searchParams?: Promise<{ tab?: string }> | { tab?: string };
}) {
  const resolvedSearchParams =
    typeof searchParams === "object" && searchParams !== null && "then" in searchParams
      ? await searchParams
      : searchParams;

  const tab = resolvedSearchParams?.tab === "register" ? "register" : "login";

  return <Authentication defaultTab={tab} />;
}
