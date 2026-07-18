export const upiConfig = {
  upiId: "9916304636-2.wallet@phonepe",
  payeeName: "Nithin R",
  defaultNote: "Donation to SGGB Festival",
  defaultCategory: "Donation",
} as const;

export const donationAmounts = [
  { value: 101, label: "₹101", desc: "Simple Offering", shortDesc: "Support the daily rituals and prayers throughout the festival", recommended: false },
  { value: 501, label: "₹501", desc: "Prasadam", shortDesc: "Bless a family with sacred prasadam on the day of the festival", recommended: true },
  { value: 1001, label: "₹1,001", desc: "Flower Donation", shortDesc: "Help us decorate the temple with fresh flowers for the celebrations", recommended: false },
] as const;

export type DonationAmount = (typeof donationAmounts)[number];
