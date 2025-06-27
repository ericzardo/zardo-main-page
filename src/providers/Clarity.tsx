"use client";

import { useEffect } from "react";
import { initClarity } from "@/lib/clarity/config";

export function ClarityClient() {
  useEffect(() => {
    initClarity();
  }, []);

  return null;
}
