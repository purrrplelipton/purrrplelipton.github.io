import { Backdrop } from "@components/common";
import { Contexts } from "@components/context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./drawer.css";

const links = [
  { path: "/about-me", label: "About Me" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/reach-out", label: "Reach Out" },
];

const Drawer = () => {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);

  const heroIconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    color: "var(--clr-1)",
  };

  return (
    <>
      {drawerIsOpen && (
        <>
          {drawerIsOpen && (
            <Backdrop zIndex={30} onClick={() => setDrawerIsOpen(false)} />
          )}
          <aside className={`drawer${drawerIsOpen ? "" : " closed"}`}>
            <header>
              <button
                type={"button"}
                aria-label={"Close drawer"}
                onClick={() => setDrawerIsOpen(false)}
                className={"close-drawer-btn"}
                autoFocus
              >
                <XMarkIcon style={heroIconStyle} />
              </button>
            </header>
            <nav className={"drawer-nav"}>
              <div>
                {links.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `drawer-link${isActive ? " active" : ""}`
                    }
                    onClick={() => setDrawerIsOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
              <a
                href="https://docs.google.com/document/d/1sveStIKJSgAD_EJeVN73b5VNFIghZPtxoPzux7osuZs/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-link resume"
              >
                My Resume
              </a>
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export { links, Drawer };
