import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">Hello, World!</h1>
      </div>
    </main>
  );
}
