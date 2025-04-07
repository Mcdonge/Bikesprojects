import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  image: string
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-6xl font-bold mb-6 tracking-tight animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-maroon-200 to-white">
                {title}
              </span>
            </h1>
            <p className="text-2xl font-light leading-relaxed animate-fade-in-up">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 