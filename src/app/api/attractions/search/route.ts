import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://cam-trip.cheat.casa/api/attractions/search";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword") || "";
    const page = searchParams.get("page") || "0";
    const size = searchParams.get("size") || "20";

    if (!keyword.trim()) {
      return NextResponse.json({
        content: [],
        page: 0,
        size: Number(size),
        totalPages: 0,
        totalElements: 0,
      });
    }

    const targetUrl = new URL(API_URL);
    targetUrl.searchParams.set("keyword", keyword);
    targetUrl.searchParams.set("page", page);
    targetUrl.searchParams.set("size", size);

    const response = await fetch(targetUrl.toString(), {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "External API failure" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server proxy error" },
      { status: 500 }
    );
  }
}