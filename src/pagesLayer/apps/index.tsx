import React, { useEffect, useState } from "react"
import { AppList } from "entities/app/ui/app-list"
import Skeleton from "shared/ui/skeleton"
import { Wrapper } from "shared/ui/wrapper"

import styles from "./styles.module.scss"

const AppsPage = () => {
  const [isLoaded, setIsLoaded] = useState(true)

  const apps = [
    {
      id: "1",
      image_url: "/noimage.webp",
      title: "Audio Bot",
      short_description: "Бот позволяет слушать музыку из VK без ограничений!",
    },
    {
      id: "2",
      image_url: "/noimage.webp",
      title: "Random Key Generator",
      short_description:
        "Generate random keys/passwords on the air! Enter length and select method to create one.",
    },
    {
      id: "3",
      image_url: "/noimage.webp",
      title: "MeteoBot",
      short_description: "Я покажу погоду в твоём городе!",
    },
    {
      id: "4",
      image_url: "/noimage.webp",
      title: "HomeBro Аренда 🏠",
      short_description: "Персональный помощник по поиску жилья 🏡",
    },
  ] as WebApp[]

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false)
    }, 1000)
  }, [])

  return (
    <Wrapper>
      <h1 style={{ marginBottom: "20px" }}>Apps</h1>
      {isLoaded && <Skeleton.AppList />}
      {!isLoaded && <AppList apps={apps} title="Top Rating" />}
    </Wrapper>
  )
}

export default AppsPage
