"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((path) => path);

  const formatSegment = (segment: string) => {
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-stone-800/50">
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm text-stone-400">
          <li>
            <Link href="/" className="hover:text-amber-400">
              Inicio
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLast = index === pathSegments.length - 1;
            return (
              <React.Fragment key={href}>
                <li>
                  <ChevronRight size={16} />
                </li>
                <li>
                  {isLast ? (
                    <span className="font-semibold text-white">{formatSegment(segment)}</span>
                  ) : (
                    <Link href={href} className="hover:text-amber-400" legacyBehavior>
                      {formatSegment(segment)}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
