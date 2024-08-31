"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
  const router = usePathname();
  const page = router.split("/");

  return (
    <nav className="flex">
      <ol className="inline-flex items-center space-x-5 text-secondary text-sm">
        <li className="inline-flex items-center">
          <Link href="/" className="leading-[21px] capitalize">
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            /
            <Link href="/" className="ms-5 leading-[21px] capitalize">
              {page[1]}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            /
            <span className="ms-5 leading-[21px] font-semibold capitalize">
              {page[2].split("-").join(" ")}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
