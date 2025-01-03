import { useLottie } from "lottie-react";
import heroAnimation from "@/animations/swe-animation.json";

export default function LottieView() {
  const { View: LottieView } = useLottie({
    animationData: heroAnimation,
    loop: true,
    autoplay: true,
  });

  return <>{LottieView}</>;
}
