import dynamic from "next/dynamic";

const VoiceInput = dynamic(() => import("./VoiceInput"), {
  ssr: false,
});

export default function Recommendation() {
  return <VoiceInput />;
}
