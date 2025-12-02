 import { format } from "date-fns";
export const formatVND = (value: any) => {
    value = value.toString().replace(/\./g, "");
    const formatted = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
    })
        .format(value)
        .replace("₫", "")
        .trim();
    return formatted;
}


export function formatDateTime(raw: string) {
  if (!raw || raw.length !== 14) return null;

  const year = raw.substring(0, 4);
  const month = raw.substring(4, 6);
  const day = raw.substring(6, 8);
  const hour = raw.substring(8, 10);
  const minute = raw.substring(10, 12);
  const second = raw.substring(12, 14);

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export function formatDateMonthYearVN(date: string){
  const customFormattedDate = format(date, "MM/dd/yyyy");
  return customFormattedDate;
};