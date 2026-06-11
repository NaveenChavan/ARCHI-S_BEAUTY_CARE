export interface ValidationErrors {
  fullName?: string;
  mobileNumber?: string;
  service?: string;
  preferredDate?: string;
  message?: string;
}

export function validateAppointmentForm(data: {
  fullName: string;
  mobileNumber: string;
  service: string;
  preferredDate: string;
  message: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = "Full name is required";
  } else if (trimmedName.length < 2) {
    errors.fullName = "Name must be at least 2 characters";
  }

  const trimmedPhone = data.mobileNumber.trim();
  if (!trimmedPhone) {
    errors.mobileNumber = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(trimmedPhone.replace(/\s/g, ""))) {
    errors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
  }

  if (!data.service) {
    errors.service = "Please select a service";
  }

  if (!data.preferredDate) {
    errors.preferredDate = "Preferred date is required";
  } else {
    const selected = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.preferredDate = "Date cannot be in the past";
    }
  }

  return errors;
}

export function sanitizeString(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}
