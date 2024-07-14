import Hero from "@/components/Hero/Hero";
import ImageSlider from "@/components/Hero/ImageSlider";
import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="w-full lg:w-2/3 mx-auto  flex flex-col lg:flex-row items-center justify-center">
      <Hero />

      <ImageSlider />
    </div>
  );
}
