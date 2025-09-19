import { Product } from "@/type/product.type"

interface LeftSectionProps{
 className?: string
 product: Product | null
}
const LeftSection = ({className}: LeftSectionProps) => {
  return (
    <div className={className}>
        LeftSection
    </div>
  )
}

export default LeftSection