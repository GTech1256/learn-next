import Router from "next/router"
import {IAbout} from "../interfaces/about"
import MainLayout from "../layout/MainLayout"

interface IProps {
  serverData: IAbout
}

export default function About({serverData}: IProps) {

  const handleLinkClick = () => {
    Router.push('/')
  }

  return (
    <MainLayout title="About Page">
      <h1>{serverData.title}</h1>
      <p>{serverData.body}</p>

      <button onClick={handleLinkClick}>Go back to home</button>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/about`)
  const serverData: IProps = await response.json();

  return {props: {serverData}}
} 