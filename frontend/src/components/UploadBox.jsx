export default function UploadBox({ onUpload }) {
  return (
    <input
      type="file"
      accept=".txt"
      onChange={(e) => onUpload(e.target.files[0])}
    />
  );
}
