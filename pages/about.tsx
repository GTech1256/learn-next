import Router from "next/router"
import {IAbout} from "../interfaces/about"
import MainLayout from "../layout/MainLayout"
import {getAboutModel} from "../services/db/model/about"

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
  const serverData = await getAboutModel();

  return {props: {serverData}}
} 