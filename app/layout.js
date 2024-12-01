import { Inter } from "next/font/google";
import ReduxProvider from '@/provider/redux/ReduxProvider'


const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title : 'Create Next app',
  description: ' Generatedby create next app',
}

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      
    </ReduxProvider>
  );
}
