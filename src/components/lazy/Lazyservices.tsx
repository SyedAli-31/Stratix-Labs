// components/lazy/LazyServices.tsx
"use client";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const LazyServicesComponent = dynamic(() => import(".././home/Services"), {
  loading: () => null, // Optional: add spinner or skeleton if needed
  ssr: false,
});

const LazyServices = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <div ref={ref} id="services">
      {show && <LazyServicesComponent />}
    </div>
  );
};

export default LazyServices;
