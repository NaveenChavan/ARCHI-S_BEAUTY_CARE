import { AppointmentFormData, ApiResponse } from "@/types";

// TODO: Replace with your deployed Google Apps Script Web App URL
// Deployment Guide:
// 1. Create a Google Sheet named "Appointments" with columns:
//    ID, Created Date, Full Name, Mobile Number, Service, Preferred Date, Message, Status
// 2. Create a Google Apps Script project bound to the sheet
// 3. Use doPost(e) function to handle incoming form submissions
// 4. Deploy as Web App (Execute as: Me, Access: Anyone)
// 5. Copy the deployment URL here
const APPOINTMENT_API_URL =
  process.env.NEXT_PUBLIC_APPOINTMENT_API_URL || "";

export async function submitAppointment(
  data: AppointmentFormData
): Promise<ApiResponse> {
  if (!APPOINTMENT_API_URL) {
    // Simulated submission for development
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Appointment data (dev mode):", data);
    return {
      success: true,
      message: "Appointment request received! We will contact you shortly.",
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(APPOINTMENT_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return {
      success: true,
      message: "Appointment request received! We will contact you shortly.",
    };
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      return {
        success: false,
        message: "Request timed out. Please try again.",
      };
    }
    return {
      success: false,
      message: "Something went wrong. Please try again or WhatsApp us directly.",
    };
  }
}
