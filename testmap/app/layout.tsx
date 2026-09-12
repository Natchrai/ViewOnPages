import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '쉼 SUIM — 지도에서 찾는 나만의 휴식', description: '고양·파주의 마사지와 편안한 휴식 공간을 지도에서 찾아보세요. 지역과 가격을 비교하고 매장 정보를 확인하세요.' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ko"><body>{children}</body></html>;}
