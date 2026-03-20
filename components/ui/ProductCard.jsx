import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function ProductCard({ title, price, image, description }) {
  return (
    <div>
      <Card className="w-full my-2 md:w-[1/3] md:h-85  lg:h-100 group hover:-translate-y-2 hover:cursor-pointer duration-150 xl:w-[1/4]">
        <CardHeader>
          <CardTitle className="text-pretty text-md lg:text-lg">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-50  w-full md:h-30 overflow-hidden">
            <Image
              src={image}
              alt="image"
              width={1000}
              height={1000}
              className="h-full w-full object-cover group-hover:scale-105 duration-150"
            />
          </div>
          <p className="text-md lg:text-lg font-bold my-2">Rs.{price}</p>

          <p className="line-clamp-2 lg:line-clamp-3  text-xs lg:text-sm text-start mb-1">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
