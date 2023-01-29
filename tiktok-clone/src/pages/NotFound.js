import NotFoundIcon from "icons/NotFoundIcon";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-inner">
        <NotFoundIcon></NotFoundIcon>
        <p className="not-found-title">Page not available</p>
        <p className="not-found-description">Sorry about that! please try again later.</p>
      </div>
    </div>
  );
}
