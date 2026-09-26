
"use client";

import { useState } from "react";
import Search from "@/components/Search";
import SearchResult from "@/components/SearchResult";
import Provinces from "@/components/Provinces";

export default function HomePage() {
  const [keyword, setKeyword] = useState("");

  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
      <Search onSearch={setKeyword} />

    
      <SearchResult keyword={keyword} />

      {!keyword && <Provinces />}
    </main>
  );
}