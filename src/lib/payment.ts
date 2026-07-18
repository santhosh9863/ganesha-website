import { upiConfig } from "@/data/payment";

export interface PaymentRequest {
  amount: number;
  note?: string;
}

export interface PaymentResult {
  success: boolean;
  error?: string;
}

function buildUpiUrl(amount: number, note?: string): string {
  const params = new URLSearchParams({
    pa: upiConfig.upiId,
    pn: upiConfig.payeeName,
    am: amount.toString(),
    cu: "INR",
    tn: note || upiConfig.defaultNote,
    tr: `SGGB-${Date.now()}`,
  });

  return `upi://pay?${params.toString()}`;
}

function isUpiSupported(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|iPod/.test(ua);
}

export async function initiatePayment(request: PaymentRequest): Promise<PaymentResult> {
  const { amount, note } = request;

  if (!amount || amount <= 0 || !Number.isInteger(amount)) {
    return { success: false, error: "Please enter a valid donation amount." };
  }

  if (amount > 100000) {
    return { success: false, error: "Maximum donation amount is ₹1,00,000." };
  }

  if (!isUpiSupported()) {
    return {
      success: false,
      error: "UPI payments are only supported on mobile devices. Please open this page on your phone to donate.",
    };
  }

  try {
    const upiUrl = buildUpiUrl(amount, note);
    window.location.href = upiUrl;
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Unable to open UPI app. Please ensure you have a UPI app installed (PhonePe, GPay, Paytm, etc.).",
    };
  }
}

export function getUpiDeepLink(amount: number, note?: string): string {
  return buildUpiUrl(amount, note);
}
