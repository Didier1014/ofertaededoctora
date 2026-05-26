export function WistiaVideoPlayer() {
  return (
    <div className="mx-auto mb-4" style={{ maxWidth: 720 }}>
      <iframe
        id="panda-05d51158-66d9-48c9-b2b9-2e86df0631a9"
        src="https://player-vz-f9150b0d-544.tv.pandavideo.com.br/embed/?v=05d51158-66d9-48c9-b2b9-2e86df0631a9"
        style={{ border: "none", width: "100%", height: "auto", aspectRatio: "720 / 360" }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        width="720"
        height="360"
      />
    </div>
  )
}
