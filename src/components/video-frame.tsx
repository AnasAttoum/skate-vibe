type Props = {
  src?: string;
};

export default function VideoFrame({src="/assets/video/skateboard.mp4"}: Props) {
  return <video src={src} autoPlay loop muted />;
}
