import { NextResponse } from "next/server";

const API_URL = "https://cam-trip.cheat.casa/api/provinces";

export async function GET() {
  try {
    const response = await fetch(API_URL, {
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