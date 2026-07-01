"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const DEFAULT_CENTER = { lat: 36.2792, lng: -115.2744 };
const MAPS_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ||
  "AIzaSyD_gdHoCg0SdY29tFIk1vYY7dvgp9vgy_M";

type CommuteWidgetProps = {
  center?: { lat: number; lng: number };
  title?: string;
  description?: string;
};

declare global {
  interface Window {
    initCommuteMap?: () => void;
    initializeCommuteWidgetElements?: (el: HTMLElement) => void;
    Commutes?: new (config: object) => void;
    google?: {
      maps?: unknown;
    };
  }
}

export default function CommuteWidget({
  center = DEFAULT_CENTER,
  title = "Plan Your Commute",
  description = "Add your workplace, school, or destinations to see travel times from Las Vegas neighborhoods",
}: CommuteWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    window.initCommuteMap = () => {
      if (!containerRef.current || initializedRef.current) return;
      if (!window.google?.maps || !window.initializeCommuteWidgetElements || !window.Commutes) {
        return;
      }

      window.initializeCommuteWidgetElements(containerRef.current);
      new window.Commutes({
        defaultTravelMode: "DRIVING",
        distanceMeasurementType: "IMPERIAL",
        mapOptions: {
          center,
          fullscreenControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          zoom: 12,
          zoomControl: true,
          maxZoom: 20,
          mapId: "",
        },
        mapsApiKey: MAPS_KEY,
      });
      initializedRef.current = true;
    };

    if (window.google?.maps && document.querySelector('script[src*="commutes-widget.js"]')) {
      window.initCommuteMap();
    }

    return () => {
      initializedRef.current = false;
    };
  }, [center.lat, center.lng]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&callback=initCommuteMap&libraries=places,geometry&loading=async`}
        strategy="afterInteractive"
      />
      <Script src="/commutes-widget.js" strategy="afterInteractive" onLoad={() => window.initCommuteMap?.()} />

      <div ref={containerRef} className="commute-widget-container min-h-[480px]">
        <div className="commutes">
          <div className="commutes-map rounded-lg overflow-hidden border border-slate-200 min-h-[320px]">
            <div className="map-view w-full h-[320px] bg-slate-100" />
          </div>
          <div className="commutes-info mt-4">
            <div className="commutes-initial-state text-center py-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600 mb-4">{description}</p>
              <button type="button" className="add-button bg-blue-600 text-white px-4 py-2 rounded-lg">
                Add destination
              </button>
            </div>
            <div className="commutes-destinations hidden">
              <div className="destinations-container">
                <div className="destination-list" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
