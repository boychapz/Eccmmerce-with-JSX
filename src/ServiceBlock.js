import "./styles.css";

export default function ServiceBlock() {
  return (
    <div className="ServiceBlock">
      <div id="first-service" className="block">
        <img alt="woman sitting" src="https://assets.codepen.io/6060109/agency-service-1.png" />
        <p id="web-design-text">Web Design</p>
      </div>
      <div className="block">
        <img alt="functional tablet" src="https://assets.codepen.io/6060109/agency-service-2.png" />
        <p>Ecommerce</p>
      </div>
      <div className="block">
        <img alt="man typing" src="https://assets.codepen.io/6060109/agency-service-3.png" />
        <p>Automation</p>
      </div>
    </div>
  );
}
