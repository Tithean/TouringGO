import { notFound } from "next/navigation";
import DestinationListView from "@/components/DestinationListView";
import DestinationGuideView from "@/components/DestinationGuideView";
import AttractionDetailView from "@/components/AttractionDetailView";

type DestinationPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <DestinationListView />;
  }

  if (slug.length === 1) {
    return <DestinationGuideView code={slug[0]} />;
  }

  if (slug.length === 2) {
    return <AttractionDetailView code={slug[0]} id={slug[1]} />;
  }
  
  notFound();
}
