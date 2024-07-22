import { NavProp } from "../pages/types";
export const Navbar = ({
    navHeader,
    active,
}: {
    navHeader: NavProp[];
    active: number | undefined;
}) => {
    const handleNavClick = (e: any) => {
        var sectionRef = navHeader[e.target.id].ref;
        var base = document.getElementById("base");
        base?.scroll({
            top: sectionRef.current?.offsetTop,
            behavior: "smooth",
        });
        window.history.replaceState(null, "", `#${e.target.name}`);
    };
    return (
        <div className='h-dvh fixed inset-y-0 right-3 md:right-10 z-50 text-white flex flex-col pt-10 gap-10 md:gap-5 transform origin-top scale-50 md:transform-none'>
            {navHeader.map((settings: NavProp, idx: number) => (
                <button
                    className={`w-5 h-5 rounded-full ${
                        active === idx
                            ? "transition all scale-150 opacity-100 duration-500"
                            : "transition transform scale-100 opacity-50 duration-500"
                    } ${active && active >= 2 ? "bg-orange-900" : "bg-accent"}`}
                    id={`${idx}`}
                    name={settings.id}
                    onClick={handleNavClick}
                ></button>
            ))}
        </div>
    );
};
