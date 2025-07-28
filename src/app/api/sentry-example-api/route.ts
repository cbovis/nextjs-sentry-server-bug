import { logger } from "@sentry/nextjs";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  logger.info("Sentry Example API Route Invoked");
  
  throw new Error("Sentry Example API Route Error");
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
