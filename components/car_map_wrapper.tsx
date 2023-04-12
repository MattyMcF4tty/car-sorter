// CarMapWrapper.tsx
import dynamic from "next/dynamic";

const CarMap = dynamic(() => import("./car_map"), { ssr: false });

export default CarMap;
