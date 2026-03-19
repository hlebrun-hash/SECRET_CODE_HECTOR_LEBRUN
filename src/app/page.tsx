import SecretButton from "./SecretButton";
import styles from "./page.module.css";

export default function Home() {
  const secret = process.env.MON_TEXT_SECRET || "Variable non définie";

  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div className={styles.intro} style={{ alignItems: 'center', textAlign: 'center' }}>
          <h1>Découvrez le Secret</h1>
          <p>Appuyez sur le bouton ci-dessous pour révéler la valeur de la variable <code>MON_TEXT_SECRET</code>.</p>
        </div>
        
        <SecretButton secret={secret} />
      </main>
    </div>
  );
}
