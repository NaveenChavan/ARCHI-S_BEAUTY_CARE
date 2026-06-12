import { AppointmentFormData, ApiResponse } from "@/types";

/**
 * Google Sheets Appointment Integration
 *
 * SETUP GUIDE:
 * ─────────────────────────────────────────────────────────────────────
 * 1. Create a Google Sheet with these exact column headers in Row 1:
 *    ID | Created Date | Full Name | Mobile Number | Service | Preferred Date | Message | Status
 *
 * 2. Open Extensions → Apps Script in your Google Sheet
 *
 * 3. Replace the default code with this Google Apps Script:
 * ─────────────────────────────────────────────────────────────────────
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   var id = "APT-" + new Date().getTime();
 *   var createdDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
 *   sheet.appendRow([
 *     id,
 *     createdDate,
 *     data.fullName,
 *     data.mobileNumber,
 *     data.service,
 *     data.preferredDate,
 *     data.message || "",
 *     "Pending"
 *   ]);
 *   return ContentService
 *     .createTextOutput(JSON.stringify({ status: "success" }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 * ─────────────────────────────────────────────────────────────────────
 *
 * 4. Click Deploy → New Deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 *
 * 5. Copy the Deployment URL (looks like:
 *    https://script.google.com/macros/s/AKfycb.../exec)
 *
 * 6. Add to your .env.local file:
 *    NEXT_PUBLIC_APPOINTMENT_API_URL=https://script.google.com/macros/s/YOUR_ID/exec
 *
 * 7. Redeploy your Next.js app — all bookings will appear in your Google Sheet!
 * ─────────────────────────────────────────────────────────────────────
 */

const APPOINTMENT_API_URL =
  process.env.NEXT_PUBLIC_APPOINTMENT_API_URL || "";

export async function submitAppointment(
  data: AppointmentFormData
): Promise<ApiResponse> {
  // Development / no-API-url fallback
  if (!APPOINTMENT_API_URL) {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("📋 Appointment submission (dev mode — no API URL set):", data);
    return {
      success: true,
      message:
        "Appointment request received! We will contact you shortly to confirm.",
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    // Google Apps Script requires no-cors mode
    await fetch(APPOINTMENT_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: data.fullName,
        mobileNumber: data.mobileNumber,
        service: data.service,
        preferredDate: data.preferredDate,
        message: data.message || "",
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // no-cors always returns opaque response (status 0) — treat as success
    return {
      success: true,
      message:
        "Appointment request received! We will contact you shortly to confirm.",
    };
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      return {
        success: false,
        message: "Request timed out. Please try again or WhatsApp us directly.",
      };
    }
    return {
      success: false,
      message:
        "Something went wrong saving your appointment. Please WhatsApp us directly to confirm.",
    };
  }
}
