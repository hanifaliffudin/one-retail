import Link from "next/link";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();

  const removeLocalStorage = () => {
    localStorage.removeItem("token");
    router.push("/cms");
  };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full border-r bg-gray-800 border-gray-700">
          <ul className="space-y-2">
            <li>
              <Link
                href="/cms/dashboard"
                className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 group"
              >
                <span className="ml-3">Dashboard Blog</span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={removeLocalStorage}
          className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex text-white bg-gray-800 z-20 border-r border-gray-700"
        >
          Logout
        </button>
      </aside>
    </>
  );
};

export default SideBar;
