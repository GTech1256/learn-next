import Link from "next/link";
import classes from '../styles/notFound.module.sass';

export default function NotFoundPage() {
  return (
    <>
      <h1 className={classes['not-found']}>Error 404</h1>
      <p>Plaese <Link href="/"><a>go back</a></Link> to safety</p>
    </>
  )
}