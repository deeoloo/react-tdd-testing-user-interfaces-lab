import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(< App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });


   test ("displays an image with alt text identifying the content of the image", ()=>{
    render (<App/>)
    const image = screen.getByRole("img",{
        name: /my picture/i,
    })
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', 'my picture')
   })


   test("displays a second-level heading with the text `About Me`", () => {
    // Arrange
    render(< App />);
  
    // Act
    const secondLevelHeading = screen.getByText("About Me",{
      name: /About Me/i,
      exact: false,
      level: 2,
    });
  
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
  });



  test("displays a paragraph for your biography", () => {
    // Arrange
    render(< App />);
  
    // Act
    const biographyParagraph = screen.getByText(/biography/i,{
      selector: ' p',
    });
  
    // Assert
    expect(biographyParagraph).toBeInTheDocument();
    expect(biographyParagraph).toBeVisible();
  });


  test("displays two links, one to your GitHub page, and one to your LinkedIn page", () => {
    // Arrange
    render(< App />);
  
    // Act
    const githubLInk = screen.getByRole("link", { name:/GitHub/i });
    expect(githubLInk).toBeInTheDocument();
    expect(githubLInk).toHaveAttribute("href", expect.stringContaining('github.com'));

    const linkedInLink = screen.getByRole("link", { name:/LinkedIn/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", expect.stringContaining('linkedin.com'));
  });
