import type { StudioConfig } from '../../types/config';

type GalleryConfig = NonNullable<StudioConfig['gallery']>;
const d = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

const tileClasses = ['tile tile-a', 'tile tile-b', 'tile tile-c', 'tile tile-d', 'tile tile-e'];

export default function Gallery({ config }: { config: GalleryConfig }) {
  const tiles = config.tiles ?? [
    { label: 'reformer room' },
    { label: 'lounge' },
    { label: 'shower' },
    { label: 'entry' },
    { label: 'locker' },
  ];

  const hasCustomLayout = tiles.some(t => t.aspectRatio || t.cols);

  return (
    <section className="bg-surface-low section-py">
      <div className="wrap">
        <div className="flex items-end justify-between gap-8 mb-6 md:mb-8">
          <div>
            {config.overline && (
              <div className="sec-label" data-animate style={d(0)}>{config.overline}</div>
            )}
            <h3 className="section-h3" data-animate style={d(80)}
              dangerouslySetInnerHTML={{ __html: config.headline }} />
          </div>
        </div>

        <div className={`gallery-grid${hasCustomLayout ? ' gallery-grid--auto' : ''}`}>
          {tiles.map((tile, i) => {
            const tileStyle: React.CSSProperties = {
              ...(tile.cols ? { gridColumn: `span ${tile.cols}`, gridRow: 'span 1' } : {}),
              ...(tile.aspectRatio ? { aspectRatio: tile.aspectRatio } : {}),
              ...(tile.bgStyle ? { background: tile.bgStyle } : {}),
              ...d(120 + i * 80),
            };
            return (
              <div
                key={tile.label}
                className={tileClasses[i] ?? 'tile tile-a'}
                data-animate="scale"
                style={tileStyle}
              >
                <span className="tile-label">{tile.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
