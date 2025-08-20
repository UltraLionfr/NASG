import { toast } from "react-hot-toast";

export async function copyToClipboard(
  value: string,
  setFlag: (b: boolean) => void,
  label?: string
) {
  try {
    await navigator.clipboard.writeText(value);
    setFlag(true);
    toast.success(label ? `${label} copied!` : "Copied!", {
      id: label ? `copy-${label}` : "copy",
      duration: 1200,
    });
    setTimeout(() => setFlag(false), 1200);
  } catch {
    toast.error("Error during copying");
  }
}
