export function ProfilePicture({ template }: any) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <img
        src={
          template.createdBy?.email === "hello@dysperse.com"
            ? "/logo.svg"
            : `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(
                template.createdBy.profile?.name
              )}`
        }
        width={25}
        height={25}
        style={{ borderRadius: 99 }}
      />
      <h5 className="font-black">By {template.createdBy.profile?.name}</h5>
      {template.createdBy?.email === "hello@dysperse.com" && (
        <span
          style={{
            fontSize: 20,
            fontVariationSettings: "'wght' 900, 'FILL' 1",
            opacity: 0.8,
          }}
          className="material-symbols-rounded"
        >
          verified
        </span>
      )}
    </div>
  );
}
