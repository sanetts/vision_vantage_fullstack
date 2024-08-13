// Import necessary libraries and components
import React from "react";
import { mount } from "@cypress/react";
import Register from "../../src/components/Register"; // Adjust the import path as needed

// Describe block for the Register component tests
describe("Register Component", () => {
  it("renders with Tailwind CSS styles", () => {
    // Mount the Register component
    mount(<Register />);

    // Assert that the button has the correct class
    cy.get("button").should("have.class", "bg-mediumseagreen");
    // Assert that the input has the correct class
    cy.get("input").should("have.class", "border-gray-300");
  });
});
