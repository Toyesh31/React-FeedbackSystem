import React from "react";
import Card from "../components/Shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About us</h1>
        <p>This is the About Us page for Feedback Project</p>
        <p>version: 1.0.0</p>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
