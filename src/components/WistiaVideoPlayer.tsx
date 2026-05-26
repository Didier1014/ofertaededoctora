export function WistiaVideoPlayer() {
  return (
    <div className="mx-auto mb-4 aspect-video" style={{ maxWidth: 720 }}>
      <iframe
        id="panda-05d51158-66d9-48c9-b2b9-2e86df0631a9"
        src="https://player-vz-f9150b0d-544.tv.pandavideo.com.br/embed/?v=05d51158-66d9-48c9-b2b9-2e86df0631a9"
        className="w-full h-full"
        style={{ border: "none" }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
