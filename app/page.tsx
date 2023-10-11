import Background from "@/components/background";

export default function Home() {
  return (
    <div>
    <Background />
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 sm:mr-[5rem]">
      <h1 className="text-2xl sm:text-3xl xl:text-4xl">Lorem ipsum dolor</h1>
      <p className="hidden sm:block sm:text-1xl xl:text-2xl mt-[1rem] ">Cumque sequi, laudantium accusantium repudiandae rem, nemo amet error, expedita asperiores suscipit impedit nulla similique adipisci perferendis consectetur ad accusamus minus quibusdam eveniet odio! Quo optio reprehenderit voluptatem.</p>
    </div>
    </div>
  )
}
