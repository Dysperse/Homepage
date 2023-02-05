export default function Iframe() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        zIndex: 99999,
      }}
    >
      <iframe
        src="https://my.dysperse.com"
        style={{
          height: "100vh",
          border: "1px solid black",
          paddingTop: "30px",
          width: "360px",
        }}
      />
    </div>
  );
}
