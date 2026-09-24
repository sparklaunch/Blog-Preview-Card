import Image from "next/image";
import styles from "./Home.module.css";
import avatar from "./assets/images/avatar.webp";
import illustration from "./assets/images/illustration.svg";

export default function Home() {
	return (
		<main className={styles.card}>
			<header className={styles.header}>
				<Image
					src={illustration}
					alt="Illustration"
					className={styles.illustration}
				/>
				<p className={styles.caption}>Learning</p>
			</header>
			<section className={styles.section}>
				<p className={styles.date}>Published 21 Dec 2023</p>
				<h1 className={styles.heading}>HTML & CSS Foundations</h1>
				<p className={styles.text}>
					These languages are the backbone of every website, defining
					structure, content, and presentation.
				</p>
			</section>
			<footer className={styles.footer}>
				<Image src={avatar} alt="Avatar" className={styles.avatar} />
				<p className={styles.name}>Greg Hooper</p>
			</footer>
		</main>
	);
}
