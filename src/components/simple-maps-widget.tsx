import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

declare global {
  interface Window {
    google?: {
      maps: {
        Map: new (el: HTMLElement, opts: Record<string, unknown>) => unknown;
        Marker: new (opts: Record<string, unknown>) => {
          addListener: (event: string, fn: () => void) => void;
        };
        InfoWindow: new (opts: { content: string }) => {
          open: (map: unknown, marker: unknown) => void;
        };
        Size: new (w: number, h: number) => unknown;
      };
    };
  }
}

interface PropertyMarker {
  id: string;
  lat: number;
  lng: number;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'for-sale' | 'sold' | 'pending';
}

interface SimpleMapsWidgetProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  title?: string;
  height?: string;
  properties?: PropertyMarker[];
}

const getMarkerIcon = (status: string) => {
  const colors: Record<string, string> = {
    'for-sale': '#22c55e',
    sold: '#6b7280',
    pending: '#f59e0b',
  };
  const color = colors[status] ?? '#3b82f6';
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C10.48 2 6 6.48 6 12c0 8 10 18 10 18s10-10 10-18c0-5.52-4.48-10-10-10z" fill="${color}" stroke="white" stroke-width="2"/>
      <circle cx="16" cy="12" r="4" fill="white"/>
    </svg>
  `)}`;
};

const getStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    'for-sale': '#22c55e',
    sold: '#6b7280',
    pending: '#f59e0b',
  };
  return colors[status] ?? '#3b82f6';
};

const getEmbedUrl = (lat: number, lng: number) =>
  `https://maps.google.com/maps?q=${lat},${lng}&z=13&output=embed`;

export default component$<SimpleMapsWidgetProps>((props) => {
  const mapRef = useSignal<HTMLDivElement>();
  const mapLoaded = useSignal(false);
  const mapFailed = useSignal(false);

  const {
    center = { lat: 36.308, lng: -115.298 },
    zoom = 12,
    title = 'Map',
    height = '400px',
    properties = [],
  } = props;

  useVisibleTask$(async ({ track }) => {
    track(() => mapRef.value);

    if (!mapRef.value || mapLoaded.value || mapFailed.value) return;
    if (typeof window === 'undefined') return;

    try {
      if (!window.google?.maps) {
        const script = document.createElement('script');
        const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY || '';
        if (!apiKey) {
          mapFailed.value = true;
          return;
        }
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Maps script failed'));
        });
      }

      const map = new window.google!.maps.Map(mapRef.value, {
        center,
        zoom,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      if (properties.length > 0) {
        for (const property of properties) {
          const marker = new window.google!.maps.Marker({
            position: { lat: property.lat, lng: property.lng },
            map,
            title: `${property.address} - $${property.price}`,
            icon: {
              url: getMarkerIcon(property.status),
              scaledSize: new window.google!.maps.Size(32, 32),
            },
          });

          const infoWindow = new window.google!.maps.InfoWindow({
            content: `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">$${Number(property.price).toLocaleString()}</h3>
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${property.address}</p>
                <div style="display: flex; gap: 12px; margin: 0 0 8px 0; font-size: 12px; color: #6b7280;">
                  <span>${property.beds} bed</span>
                  <span>${property.baths} bath</span>
                  <span>${property.sqft.toLocaleString()} sq ft</span>
                </div>
                <span style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 10px; font-weight: 600; text-transform: uppercase; background: ${getStatusColor(property.status)}; color: white;">
                  ${property.status.replace('-', ' ')}
                </span>
              </div>
            `,
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        }
      } else {
        new window.google!.maps.Marker({
          position: center,
          map,
          title,
        });
      }

      mapLoaded.value = true;
    } catch {
      mapFailed.value = true;
    }
  });

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`;

  return (
    <div style={{ width: '100%', height, border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
      {mapFailed.value ? (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <iframe
            title={title}
            src={getEmbedUrl(center.lat, center.lng)}
            width="100%"
            height="100%"
            style={{ border: 0, flex: 1, minHeight: '400px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            style={{
              padding: '0.75rem 1rem',
              background: '#f9fafb',
              borderTop: '1px solid #e5e7eb',
              textAlign: 'center',
              fontSize: '0.875rem',
            }}
          >
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', fontWeight: 600 }}>
              View on Google Maps
            </a>
          </div>
        </div>
      ) : (
        <div ref={mapRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
          {!mapLoaded.value && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: '400px',
                backgroundColor: '#f3f4f6',
                color: '#6b7280',
                gap: '0.5rem',
              }}
            >
              <span>Loading map…</span>
              <a href={mapsLink} style={{ color: '#1e40af', fontSize: '0.875rem' }}>
                Open in Google Maps
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
});
