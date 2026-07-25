import Image from "next/image"

function BannerMosque() {
  return (
    <div className="w-full relative h-[13rem] bg-brand-accent ">
      <Image src="/imgs/mosque.png" alt="Banner Mosque" fill className="w-full h-auto object-contain" />
    </div>
  )
}

export default BannerMosque
