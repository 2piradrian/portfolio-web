import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AppLayout from "@/layout/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<AppLayout>
			<div className={`${styles.main} ${inter.className}`}>2piradrian</div>
		</AppLayout>
	);
}
