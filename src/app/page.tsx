import { Content, Hero, Closed } from "@/components/home";

export default function Home() {
  console.log("OPEN", process.env.CFP_OPEN)
  return (
    <>
      <Hero />
       { process.env.CFP_OPEN == "true" ? <Content /> : <Closed /> }
    </>
  );
}
