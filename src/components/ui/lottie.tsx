import heroAnimation from "@/animations/swe-animation.json";
import { useLottie } from "lottie-react";

export default function LottieView() {
  const { View: LottieView } = useLottie({
    animationData: heroAnimation,
    loop: true,
    autoplay: true,
  });

  return <>{LottieView}</>;
}
