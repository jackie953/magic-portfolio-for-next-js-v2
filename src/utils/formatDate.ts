type DateInput = string | Date | null | undefined;

export function formatDate(input: DateInput, includeRelative = false): string {
  // Nothing to format
  if (input == null) return "";

  // Normalize to a Date
  let targetDate: Date;

  if (input instanceof Date) {
    targetDate = input;
  } else {
    const raw = input.trim();
    if (!raw) return "";

    // Add a time when only a date is provided (prevents Safari inconsistencies)
    const iso = raw.includes("T") ? raw : `${raw}T00:00:00`;
    targetDate = new Date(iso);
  }

  // Guard invalid dates
  if (Number.isNaN(targetDate.getTime())) return "";

  // Full, human date
  const fullDate = targetDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) return fullDate;

  // Relative: Today / Xd / Xmo / Xy ago
  const now = new Date();
  const diffMs = now.getTime() - targetDate.getTime();
  if (diffMs < 0) return fullDate; // future date: just show the full date

  const dayDiff = Math.floor(diffMs / 86_400_000); // 1000*60*60*24

  let relative: string;
  if (dayDiff >= 365) {
    const years = Math.floor(dayDiff / 365);
    relative = `${years}y ago`;
  } else if (dayDiff >= 30) {
    const months = Math.floor(dayDiff / 30);
    relative = `${months}mo ago`;
  } else if (dayDiff >= 1) {
    relative = `${dayDiff}d ago`;
  } else {
    relative = "Today";
  }

  return `${fullDate} (${relative})`;
}