
export const getRoute = (pathname) => {
if (pathname.startsWith("/projects")) {
  return {
    title: "Projects",
    subhead: "A Showcase of My Work and Practical Implementations",
    subhead2: "My work portfolio",
  };
}

if (pathname.startsWith("/skills")) {
  return {
    title: "Skills",
    subhead: "Technologies and Tools I Use to Build Solutions",
    subhead2: "Tools & expertise",
  };
}

if (pathname.startsWith("/education")) {
  return {
    title: "Education",
    subhead: "Academic Background and Continuous Learning Journey",
    subhead2: "Learning journey",
  };
}

if (pathname.startsWith("/experience")) {
  return {
    title: "Professional Experience",
    subhead: "Career Journey, Roles, and Real-World Impact",
    subhead2: "Career highlights",
  };
}

if (pathname.startsWith("/contact")) {
  return {
    title: "Contact",
    subhead: "Let's Connect and Collaborate",
    subhead2: "Get in touch",
  };
}

return {
  title: "Dashboard",
  subhead: "Overview of My Portfolio and Activities",
  subhead2: "Portfolio overview",
};
}