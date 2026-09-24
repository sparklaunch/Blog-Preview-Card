import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={figtree.className}>
			<body>{children}</body>
		</html>
	);
}
