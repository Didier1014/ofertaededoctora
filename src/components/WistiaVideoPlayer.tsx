import { useEffect, useRef } from "react"

export function WistiaVideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://fast.wistia.com/player.js"
    script.async = true
    document.head.appendChild(script)

    const embedScript = document.createElement("script")
    embedScript.src = "https://fast.wistia.com/embed/g1lno4chi4.js"
    embedScript.async = true
    containerRef.current?.appendChild(embedScript)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="mx-auto mb-4" style={{ maxWidth: 400 }}>
      <div
        ref={containerRef}
        className="wistia_responsive_padding"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <div
            className="wistia_embed wistia_async_g1lno4chi4 seo=true"
            style={{ height: "100%", width: "100%" }}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  )
}
