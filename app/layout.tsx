import Image from "next/image";
import type { ReactNode } from "react";
import { store } from "@/provider/redux/store";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";

import "./styles/globals.css";

const inter = Inter({ subsets: ['latin']})

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      
    </Provider>
  );
}
