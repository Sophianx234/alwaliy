function Banner() {
  return (
    <div className="text-center flex flex-col items-center justify-center py-16 px-6 bg-brand-primary shadow-inner">
     <span className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium text-brand-text-light leading-relaxed md:leading-tight max-w-4xl mb-4">
       "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise."
      </span>
       <span className="text-xs md:text-sm text-brand-accent font-sans font-bold tracking-[0.2em] uppercase">
        Sahih Muslim 2699
       </span>
    </div>
  )
}

export default Banner;
