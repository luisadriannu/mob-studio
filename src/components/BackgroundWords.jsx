import "./Styles.css";

export default function BackgroundWords({ children }) {
  return (
    <article className="words">
      <div>{children}</div>
    </article>
  );
}
