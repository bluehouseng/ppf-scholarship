import Link from "next/link";
import HeaderLogo from "@/components/ui/header-logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* <HeaderLogo /> */}
            <Image
              src={
                "https://ig.bluehouseng.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.24c08824.png&w=828&q=75"
              }
              className="max-w-none"
              priority
              alt="Hero Illustration"
              width={120}
              height={120}
            />
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow justify-end">
            <Image
              src={"/images/ppf.png"}
              className="max-w-none"
              priority
              alt="Hero Illustration"
              width={120}
              height={120}
            />
            {/* Desktop sign in links */}
            {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="text-sm font-medium text-indigo-500 hover:underline px-3 lg:px-5 py-2 flex items-center"
                  href="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="ml-3">
                <Link
                  className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm"
                  href="/post-a-job"
                >
                  Post a job - $299
                </Link>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
