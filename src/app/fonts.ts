import { Poppins } from "next/font/google";

// Documentation to check font object -: https://nextjs.org/docs/app/api-reference/components/font#src

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "900"],
  display: "swap",
});
