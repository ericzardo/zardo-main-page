"use client";

import { useState, useEffect } from "react";
import { NotFoundScreen, LoadingScreen } from "@zardo/ui-kit/feedback";

export default function NotFoundPage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }
  
  return <NotFoundScreen backHref="/" />;
}