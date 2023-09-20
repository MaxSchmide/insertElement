const setDivWidth = () => {
  const screenSize = window.innerWidth;
  const newDiv = document.getElementById("newDiv");

  const isMobile = screenSize < 768;
  const isTablet = screenSize >= 768 && screenSize < 1200;

  let divWidth;

  if (isMobile) {
    divWidth = "100%";
  } else if (isTablet) {
    divWidth = "calc((33.329% * 2) - 5rem)";
  } else {
    divWidth = "calc(50% - 1rem)";
  }

  newDiv.style.width = divWidth;
};

const applyStyles = (element, styles) => {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
};

const insertDiv = ({ containerClass, elementPosition }) => {
  const newDiv = document.createElement("div");
  const container = document.querySelector(`.${containerClass}`);
  const nextElement = container.children[elementPosition - 1];
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0.5rem",
    borderRadius: "10px",
    boxShadow: "1px 1px 5px 5px #f1f1f1",
  };

  newDiv.setAttribute("id", "newDiv");
  newDiv.innerHTML = "Random text";

  applyStyles(newDiv, styles);

  container.insertBefore(newDiv, nextElement);

  setDivWidth();
};

insertDiv({ containerClass: "product-items", elementPosition: 5 });

window.addEventListener("resize", setDivWidth);
