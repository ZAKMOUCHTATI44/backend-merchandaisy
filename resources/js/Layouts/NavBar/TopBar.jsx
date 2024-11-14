import { Link } from "@inertiajs/inertia-react";
import { ArrowRight } from "lucide-react";
import React from "react";
import TrustBy from "./TrustBy";

const TopBar = () => {
  return (
    <div className="bg-primary py-2 text-white text-sm">
      <div className="container mx-auto flex items-center gap-5 justify-between">
        <TrustBy />
        <div className="flex items-center gap-5">
          <p>
            Trusted by <span className="font-bold">2.000+ Customers</span>
          </p>
          <Link href={"/contact-us"} className="flex items-center gap-2">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
