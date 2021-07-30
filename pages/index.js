import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";


export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hook form test - Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Form Test
        </h1>
        <div style={{ display: "flex" }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "16px", marginRight: "24px", padding: "24px" }} onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired")} />
            {errors.exampleRequired && <span>This field is required</span>}
            <button type="submit">Submit</button>
          </form>
          <div>
            <h3>Outputs</h3>
            {watch("example")}
          </div>
        </div>
      </main>
    </div>
  )
}
