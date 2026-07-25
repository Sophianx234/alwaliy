import Image from "next/image"

function BannerMosque() {
  return (
    <div className="w-full relative h-[13rem] bg-brand-accent ">
      <div className="absolute inset-0 z-0 -bottom-11">

      <Image src="/imgs/mosque.png" alt="Banner Mosque" fill className="w-full z-0 h-auto opacity-75 object-contain" />
      </div>
    </div>
  )
}

export default BannerMosque
