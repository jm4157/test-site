import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout title="Suneater's Entertainment and Rentals">
      <StaticImage src="../images/suneaters-rentals.jpg"
        alt="The crew of Suneater's Entertainment and Rentals" />
      <p1>
        It's a new day. It's my time to shine! It's time to take my career
        into my own hands. I've saved money my whole life. Great! Now it's
        time to put all my eggs into one basket and take a huge gamble on my
        future, a gamble that comes with a 100% chance of success in some
        cases.
      </p1>
      <br /> <br />
      <p1>
        What am I talking about? I'm talking about becoming a full time
        entertainer and party hostess. That's right, party planning and
        management. Something almost anyone can do with a limited degree of
        success. Sure, it's a lot of money to invest, but I've already been
        doing it part-time, and that means it's safe and lucrative.
      </p1>
      <br /> <br />
      <p1>
        If you're interested in hiring Suneater's Entertainment and Rentals,
        visit us or send a letter to our office in Tobaro. Let us plan your
        party, or hire one of our talented entertainers!
      </p1>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
